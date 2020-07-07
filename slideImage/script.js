
let imgIdx = 0;
let smallTag = document.querySelector(".small");
let bannerTag = document.querySelector(".banner");
let captionTag = document.querySelector(".caption");
// console.log(bannerTag.children[0]);
// this , currentTarget , target
smallTag.addEventListener("click",function(e){       
    let imgTag = e.target;
    // console.log( imgTag );
    //index    
    imgIdx = Number(imgTag.getAttribute("value"))-1;
    bannerTag.children[0].textContent = (imgIdx+1)+"/6";
    //배너 이미지를 변경
    let src = imgTag.getAttribute("src");
    // console.log(src);
    bannerTag.style.backgroundImage=`url(${src})`;

    //.caption 의 텍스트가 변경
    let text = imgTag.getAttribute("alt");
    // console.log(text);
    //innerText , innerHTML
    captionTag.textContent = imgTag.getAttribute("alt");
    // captionTag.innerText = "<b>text</b>";
});

//버튼을 눌러서 이미지 변경
// let nextTag = document.querySelector(".next");
// let preTag = document.querySelector(".prev");

// nextTag.addEventListener("click",function(e){    
//     slideImage(1);
// });
// preTag.addEventListener("click",function(e){    
//     slideImage(0);
// });

function slideImage(btn)
{
    if( btn ){       
        if( imgIdx>4) return;
        imgIdx++;
    }
    else{     
        if( imgIdx<1 )  return;
        imgIdx--;
    }
    // console.log( imgIdx );
    let imgName = smallTag.children[imgIdx].getAttribute("src");        
    bannerTag.style.backgroundImage=`url(${imgName})`;
    captionTag.textContent = smallTag.children[imgIdx].getAttribute("alt");
    // console.log(bannerTag.children[0].textContent);
    bannerTag.children[0].textContent = `${imgIdx+1}/6`;
}
