const btnMenuTag = document.querySelector(".btnMenu");
const secTag = document.querySelector("section");
const navTag = document.querySelector("nav");
btnMenuTag.addEventListener("click", function () {
  btnMenuTag.style.display = "none";
  secTag.classList.add("on");
  navTag.classList.add("on");
});

let menuTag = document.querySelector("#gnb");
menuTag.addEventListener("click", function (e) {
  //메뉴가 가진 div를 회전하기
  let index = parseInt( e.target.getAttribute("value") );
  for( let i=0 ; i<secTag.children.length ; i++ ){
    secTag.children[i].classList.remove("on");
  }
  secTag.children[index].classList.add("on");

  //다시 원상복귀  
  btnMenuTag.style.display = "block";
  secTag.classList.remove("on");
  navTag.classList.remove("on");
});
