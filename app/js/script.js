
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');
const hasFade = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(event){
    event.preventDefault();
    if(header.classList.contains('open')){ //Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        hasFade.forEach(function(items){
            items.classList.remove('fade-in');
            items.classList.add('fade-out')
        })
        
    } else { //Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        hasFade.forEach(function(items){
            items.classList.remove('fade-out');
            items.classList.add('fade-in');
        })
        
    }
})


window.onscroll = function(){
    let top = window.scrollY;
    // console.log(top)
    if(top >= 50) {
        header.classList.add('transparent__half');
        header.classList.remove('transparent__none');
    } else {
        header.classList.remove('transparent__half');
        header.classList.add('transparent__none');
    }
}


