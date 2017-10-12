
// ScrollTop>0, nav定於上方

$(window).scroll(function(e){
    if ($(this).scrollTop()>10){
        $('.top_menu').removeClass('at_top');
    }else{
        $('.top_menu').addClass('at_top');
    }
});



//-點選連結以滑動方式到定位(網頁內有其他外連a標籤的用法)
$("a[href*='#']:not([href='#'])").click(function(e){
  // 先取消a標籤的預設動作
  e.preventDefault();
  var target= $(e.target).attr('href');
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },1000);
});
// -end