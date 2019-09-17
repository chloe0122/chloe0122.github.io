$(document).ready(function(){
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
     * 화면 resize
     */
    var deviceSize = 960;  //중단점
    $(window).on('resize',function(){
        var w_size = $(window).width();
        var head_menu = $('#header .gnb>ul>li');
        if( w_size >= deviceSize ) {
            //pcsize
            console.log( "pc===>" + w_size );            
            head_menu.addClass('header_menu');
            $('#contents>article').width('33.333333%');  
            $('#contents .notice table th:odd').hide();
            $('#contents .notice table td:odd').hide();
        }
        else{
            //mobile size
            console.log( "mobile===>" + w_size );        
            head_menu.removeClass('header_menu');
            $('#contents>article').width('100%');     
            $('#contents .notice table th:odd').show();
            $('#contents .notice table td:odd').show();       
        }        
    });
    $(window).trigger('resize');
});