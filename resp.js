
let burger = document.querySelector('.burger');
let navbar = document.querySelector('.nav-bar')
let rightnav = document.querySelector('.right-nav')
let navlist = document.querySelector('.nav-list')




burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('visibility-resp');
    navlist.classList.toggle('visibility-resp');
    navbar.classList.toggle('h-nav-resp');

})