$(document).ready(function(){
    var section = $('#wrapper>section');
    var sectionTop = [];
    var objInfo = [];

    section.each(function(i){
        var target = $(this);
        sectionTop.push(target.offset().top);

        objInfo.push([]);
        //현재 섹션의 자식노드의 정보
        var child = target.children();
        child.each(function(j){
            var obj = $(this);
            objInfo[i][j] = obj.position().top;
        });

        var upBtn = $('.tit>.arrow>a').eq(0);
        upBtn.on('click',function(e){
            console.log("upBtn Click");
            e.preventDefault();
            if( i == 0 ) return;
            sectionMove(i-1);
        });
        var downBtn = $('.tit>.arrow>a').eq(1);
        downBtn.on('click',function(e){
            console.log( "downBtn Click");
            e.preventDefault();
            if( i == (section.length-1) ) return;
            sectionMove(i+1);
        });
    });
   
    console.log( objInfo );

    function sectionMove(idx)
    {
        console.log("idx= "+ idx );
        var top = sectionTop[idx];
        $('html,body').stop().animate({scrollTop:top},500);
    }

    //section 고정
    section.css('position','fixed');

    //스크롤 이벤트 발생 시
    $(window).on('scroll',function(){
        var scrollTop = $(window).scrollTop();
        section.each(function(i){
            //section
            var target = $(this);
            var top = (scrollTop*-1)+sectionTop[i];

            //
            if( scrollTop > sectionTop[i] ){
                //top /= top/2;
                top *= 0.5;
            }
            target.css('top',top);

            //child scroll
            var child = target.children();
            child.each(function(j){
                var obj = $(this);
                var start = sectionTop[i];
                var end = sectionTop[i+1];
                var min = objInfo[i][j];
                var max = objInfo[i][j] + (j*200)+100;
                var objTop = (scrollTop-start)*(max-min) / (end-start)+min;
                obj.css('top', objTop );
            });
        });
    });
});