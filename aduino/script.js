function fnLedClick(){            
    const ledElem = document.querySelector(".led");
    if( ledElem.getAttribute("value") == "on" ){
        ledElem.style.background = "gray";
        ledElem.innerHTML = "LED<br />OFF ";
        ledElem.setAttribute("value","off");
    }
    else{
        ledElem.style.background = "#fff";
        ledElem.innerHTML = "LED<br />ON ";
        ledElem.setAttribute("value","on");
    }
    
}