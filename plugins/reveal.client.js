export default defineNuxtPlugin((nuxtApp) => {
  let observer;

  const revealElements = () => {
    const elements = document.querySelectorAll('.reveal:not(.reveal-visible)');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('reveal-visible'));
      return;
    }

    observer ||= new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
  };

  nuxtApp.hook('app:mounted', () => {
    requestAnimationFrame(revealElements);
  });

  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(revealElements);
  });
});
