(function(){
    const mainMenuElem = document.querySelector(".main-menu");
    const gnbElem = document.querySelector('.gnb');
    const barElem = document.querySelector('.btnMenu');

    //네비게이션 바를 클릭하면
    gnbElem.addEventListener("click",function(e){
        let target = e.target;
        let index = target.getAttribute("value");  
        index = parseInt(index);
        if( index>=0 || index<=2 ){
            // 메인메뉴가 회전되면서 안보이게
            mainMenuElem.classList.add("on");    
            //barMenu 보이게
            barElem.style.display="block";        
        }
    });

    barElem.addEventListener("click",function(){
        barElem.style.display="none"; 
        mainMenuElem.classList.remove("on");
    });
})();