document.addEventListener('DOMContentLoaded',function(){
    const check=document.querySelector(".checkbox");
    const check1=document.getElementById('registration');
    check.addEventListener("change",function(){
        if(this.checked){
            check1.classList.remove("register");
        }
        else{
            check1.classList.add("register");
        }
    })
})