let toggleArrow = document.querySelector('.close-icon');
let aside = document.querySelector('aside');
let menuText = document.querySelectorAll('.btn-aside p');
let asideHeader = document.querySelector('.header');
let closeAsideIcon = asideHeader.querySelector('.close-icon');
let asideHeaderH1 = asideHeader.querySelector('h2');
let asideButtonIcon = document.querySelectorAll('.btn-icon img')

toggleArrow.addEventListener('click', () => {

    if(aside.classList.contains('aside-full')){
        asideClosed();
    } else {
        asideOpen();
    }
})

function asideClosed(){
    aside.classList.remove('aside-full');
    aside.classList.add('aside-close');

    menuText.forEach(element => {
        element.style.display = 'none';
    });

    asideHeader.style.gap = '0rem';
    closeAsideIcon.style.transform = 'rotate(180deg)';
    asideHeaderH1.innerHTML = 'YZY';
    asideButtonIcon.style.height = '2rem'
}

function asideOpen(){
    aside.classList.remove('aside-close');
    aside.classList.add('aside-full');  
    menuText.forEach(element => {
        element.style.display = 'block';
    });

    asideHeader.style.gap = '2rem';
    closeAsideIcon.style.transform = 'rotate(0deg)';
    asideHeaderH1.innerHTML = 'YEEZY';
}