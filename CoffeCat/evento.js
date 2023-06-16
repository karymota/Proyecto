const sing_in_btn= document.querySelector("#sing-in-btn");
const sing_up_btn= document.querySelector("#sing-up-btn");
const container= document.querySelector(".container");
const sing_in_btn2= document.querySelector("#sing-in-btn2");
const sing_up_btn2= document.querySelector("#sing-up-btn2");

sing_up_btn.addEventListener("click",() =>{
    container.classList.add("sing-up-mode");

})

sing_in_btn.addEventListener("click",() =>{
    container.classList.remove("sing-up-mode");

})

sing_up_btn2.addEventListener("click",() =>{
    container.classList.add("sing-up-mode2");

})

sing_in_btn2.addEventListener("click",() =>{
    container.classList.remove("sing-up-mode2");

})
