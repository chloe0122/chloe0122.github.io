$(document).ready(function(){
    var deviceSize = { pc:1200, tablet:1000, mobile:800 };     
    $(window).on('resize',function(){
        var w_size = $(window).width();
        if( w_size >= deviceSize.pc ) {
            window.location.href = './index.html';
        }
        else if(w_size<=deviceSize.mobile ){
            window.location.href = './mobile.html';
        }        
    });
    $(window).trigger('resize');
});