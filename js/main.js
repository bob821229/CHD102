$(document).ready(function () {
  //剛進入頁面時除了第一個以外的區域隱藏
  $(".qa_group:not(:first)").hide();
  //桌機版        側邊選單 QA區域切換
  $(".meun_item").click(function () {
    // 隱藏所有的 qa_group
    $(".qa_group").hide();
    // 取得索引值
    let index = $(this).index();

    // 顯示qa_group
    $(".qa_group").eq(index).show();
  });
  //=================================================================//
  //手機.平板  下拉選單 QA區域切換

  $(".menu_phone").change(function () {
    // 隱藏所有的 qa_group
    $(".qa_group").hide();

    // 取得索引值
    let index = $(this).prop("selectedIndex");

    // 顯示qa_group
    $(".qa_group").eq(index).show();
  });

  //=================================================================//
  //隱藏ans區域
  $(".faq_answer_container").slideUp();
  //點擊+展開 ans區域
  $(".plus").click(function() {
    var faqGroup = $(this).closest(".qa_group");
    var answerContainer = faqGroup.find(".faq_answer_container");
    var imgElement = $(this).find("img");
    var originalSrc = imgElement.attr("src");
    var newSrc = "pic/-.svg";
    var resetSrc = "pic/+.svg";
  
    answerContainer.slideToggle();
  
    if (imgElement.attr("src") === newSrc) {
      imgElement.attr("src", resetSrc);
    } else {
      imgElement.attr("src", newSrc);
    }
  });
  
  

  $(".minus").click(function () {

    var faqGroup = $(this).closest(".qa_group");
    var answerContainer = faqGroup.find(".faq_answer_container");

    // 展開目前點擊的答案區域
    answerContainer.slideUp();
  });

  //===================================================================//
  //滑鼠滾動 文字滑出
  $(window).on("scroll", function() {
    let scrollPosition = $(this).scrollTop(); // 取得滾動的位置
    console.log(scrollPosition)
    // 計算要設定的 left 值
    

    if (jQuery(window).width() > 768){
      let  leftValue = scrollPosition > 500 ? 0 : -100;
      // 更新 .pro_txt 的 left 屬性
  $(".pro_txt").css("left", leftValue + "%");
    }if (jQuery(window).width() < 768){
      let  leftValue = scrollPosition > 10 ? 0 : -100;
          // 更新 .pro_txt 的 left 屬性
  $(".pro_txt").css("left", leftValue + "%");
    }
  
  });
});
