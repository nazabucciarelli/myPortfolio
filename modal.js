const btnOpen = document.getElementById("btn-login")
const btnClose = document.getElementById("btn-login-close")
const modal = document.getElementById("modal")

btnOpen.addEventListener("click",()=>{
    modal.showModal();
})

btnClose.addEventListener("click",()=>{
    modal.close();
})