
$(document).ready(function() {
     //剛進入頁面時除了第一個以外的區域隱藏
  $(".qa_group:not(:first)").hide();
     //桌機版        側邊選單 QA區域切換
    $(".meun_item").click(function() {
      // 隱藏所有的 qa_group
      $(".qa_group").hide();
      
      // 取得索引值
      let index = $(this).index();
      
      // 顯示qa_group
      $(".qa_group").eq(index).show();
    });
//=================================================================//
    //手機.平板  下拉選單 QA區域切換

  $(".menu_phone").change(function() {
    // 隱藏所有的 qa_group
    $(".qa_group").hide();
    
    // 取得索引值
    let index = $(this).prop("selectedIndex");
    
    // 顯示qa_group
    $(".qa_group").eq(index).show();
  });

  });

  
