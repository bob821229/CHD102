import { products } from '../data/catalog';

export const useShop = () => {
  const cart = useState('shop-cart', () => []);
  const favorites = useState('shop-favorites', () => []);

  const findProduct = (slug) => products.find((product) => product.slug === slug);

  const cartItems = computed(() =>
    cart.value
      .map((item) => {
        const product = findProduct(item.slug);
        return product ? { ...product, quantity: item.quantity } : null;
      })
      .filter(Boolean),
  );

  const cartCount = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0));
  const cartTotal = computed(() =>
    cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0),
  );

  const addToCart = (slug, quantity = 1) => {
    const product = findProduct(slug);
    if (!product) return;
    const existing = cart.value.find((item) => item.slug === slug);
    if (existing) {
      existing.quantity += quantity;
      cart.value = [...cart.value];
      return;
    }
    cart.value = [...cart.value, { slug, quantity }];
  };

  const removeFromCart = (slug) => {
    cart.value = cart.value.filter((item) => item.slug !== slug);
  };

  const updateQuantity = (slug, quantity) => {
    if (quantity <= 0) {
      removeFromCart(slug);
      return;
    }
    cart.value = cart.value.map((item) => (item.slug === slug ? { ...item, quantity } : item));
  };

  const clearCart = () => {
    cart.value = [];
  };

  const isFavorite = (slug) => favorites.value.includes(slug);
  const toggleFavorite = (slug) => {
    favorites.value = isFavorite(slug)
      ? favorites.value.filter((item) => item !== slug)
      : [...favorites.value, slug];
  };

  const searchProducts = (query) => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return products;
    return products.filter((product) =>
      [product.name, product.category, product.summary, ...product.specs]
        .join(' ')
        .toLowerCase()
        .includes(keyword),
    );
  };

  return {
    cart,
    cartItems,
    cartCount,
    cartTotal,
    favorites,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isFavorite,
    toggleFavorite,
    searchProducts,
  };
};
