let images = document.querySelectorAll(".main img");
let about = document.querySelector(".about img")


 
for (let i= 0; i < images.length; i++) {
  images[i].addEventListener("click",function(){
    
    let tmp = about.src;
    about.src = images[i].src;
    images[i].src =tmp;
    
    })

}
  

