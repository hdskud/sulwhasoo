$(document) .ready(function(){
  const $header = $('header'),
        $headerHeight = $header.outerHeight()
  let   $subHeight = $(this).find("ul").outerHeight()

  $("nav div") .hover(function(){
    // $(this).find("ul").css("opacity",1)
    $header.stop().animate({
      height:$headerHeight+$subHeight + "px"
    }, 300)
  },function(){
    // $(this).find("ul").css("opacity", 0)
    $header.stop().animate({height:$headerHeight}, 300)
  })
  $("nav div").hover(function(){
    $(this).find("ul").stop().fadeToggle(300)
  })
  $(".tmclick").click(function(){
    $(".tmport").fadeIn()
  })
  $(".tmport button").click(function(){
    $(".tmport").fadeOut()
  })
  $("ul.mslide").bxSlider({
    mode: 'fade',
    auto: true,
    controls: true
  })
  AOS.init();
  $(".bxcover ul").bxSlider({
    maxSlides: 4,
    minSlides: 2,
    moveSlides: 1,
    slideWidth: 300,
    slideMargin: 25,
    auto: true,
    pause: 3000,
    controls: false,
    pager:false
  })
  $(window).scroll(function(){
    if($(this).scrollTop()>800){$(".topbtn").fadeIn()
  } else{
    $(".topbtn").fadeOut()
  }
  })
  $(".topbtn").click(function(){
    $("html,body").animate({
      scrollTop:0
    });
  });
  
})