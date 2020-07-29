(function(){

    const gnbElem = document.querySelector(".gnb");
    const topElem = document.querySelector(".topBtn");
    let yHeight = gnbElem.getBoundingClientRect().top;                    

    function offsetFixMenu(){   
        if( window.pageYOffset >= yHeight ) {
            gnbElem.classList.add("sticky");
        }                 
        else{
            gnbElem.classList.remove("sticky");
        }
    }

    function topBtnView(){
        //window.pageYOffset
        let scrollY = document.documentElement.scrollTop;
        if(  scrollY > 30 ){
            topElem.style.display = "block";
        }
        else{
            topElem.style.display = "none";
        }
    }

    window.addEventListener("scroll",function(){
        offsetFixMenu();
        topBtnView();
    });

    function btnClick_topMove(){
        // document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        //document.documentElement.scrollBy(0,100);
    }

    topElem.addEventListener("click", btnClick_topMove);



})();