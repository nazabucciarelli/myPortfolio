const btnOpen = document.getElementById("btn-login");
const btnClose = document.getElementById("btn-login-close");
const modal = document.getElementById("modal");
const body = document.getElementById("body");

btnOpen.addEventListener("click",()=>{
    modal.showModal();
    body.classList.add("noscroll");
})

btnClose.addEventListener("click",()=>{
    modal.close();
    body.classList.remove("noscroll");
})

