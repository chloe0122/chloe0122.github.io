$(document).ready(function(){
    var deviceSize = { pc:1200, tablet:1000, mobile:800 };     
    $(window).on('resize',function(){
        var w_size = $(window).width();
        if( w_size >= deviceSize.pc ) {
            $('p').text("width="+w_size+"   pc size");      
            window.location.href = './pc.html';
        }
        else if(w_size<=deviceSize.mobile ){
            $('p').text("width="+w_size+"   mobile size");
            window.location.href = './mobile.html';
        }        
    });
    //$(window).trigger('resize');
});