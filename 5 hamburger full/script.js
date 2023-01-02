var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click",function(){
    this.classList.toggle('close')
});



//(code2) this code will works properly and will simply show the navelements
/*
const navbar = document.querySelector('.hamburger');
var cal = document.querySelector('.myclass');
navbar.addEventListener('click',function(){
    cal.classList.toggle('myclass');
})
*/


//this code will reveal the nav bar
var hamburger = document.querySelector('.hamburger');
var nav_reveal = document.querySelector('nav');
hamburger.addEventListener('click',function(){
    nav_reveal.classList.toggle('reveal')
})
