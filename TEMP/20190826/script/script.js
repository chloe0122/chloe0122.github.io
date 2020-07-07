$(document).ready(function(){
    init();
    /*
        전체 메뉴 슬라이드 다운&업
    */
    $('.gnb').on({
        'mouseover':function(){
            $(this).children('.gnb_sub').stop().slideDown();
        },
        'mouseleave':function(){
            $(this).children('.gnb_sub').stop().slideUp();        
        }
    });

    /*
        이미지 슬라이드
    */
   var SLIDE_IMG = 2;
   var nowImg = 0;
   function init()
   {   
        $('.img-slide>img').eq(0).css({'margin-left':'0px'});      
        setInterval( fnImgSlide , 3000 );
   }
   function fnImgSlide()
   {
       if( nowImg >= SLIDE_IMG ) {
           nowImg = 0;
       }
       else {
           nowImg++;
       }
   
       //이전 슬라이드 이동
       $('.img-slide>img').eq(nowImg-1).css({'margin-left':'-1000px'});
       //현재 슬라이드 이동    
       $('.img-slide>img').eq(nowImg).css({'margin-left':'0px'});
   }
});