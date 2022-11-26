let toggleArrow = document.querySelector('.close-icon');
let aside = document.querySelector('aside');
let menuText = document.querySelectorAll('.btn-aside p');
let asideHeader = document.querySelector('.header');
let closeAsideIcon = document.querySelector('.close-icon');
let asideHeaderH1 = document.querySelector('.header h2');
let asideButtonIcon = document.querySelectorAll('.btn-icon img');
let mainContent = document.querySelector('.main-content');
let asideStatus = 'open';

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

    closeAsideIcon.style.transform = 'rotate(180deg)';
    asideHeaderH1.innerHTML = 'YZY';
    asideHeaderH1.style.fontSize = '1.3rem';
    mainContent.style.width = '100%';
}

function asideOpen(){
    aside.classList.remove('aside-close');
    aside.classList.add('aside-full');

    menuText.forEach(element => {
        element.style.display = 'block';
    });

    closeAsideIcon.style.transform = 'rotate(0deg)';
    asideHeaderH1.innerHTML = 'YEEZY';
    asideHeaderH1.style.fontSize = '2rem';
    mainContent.style.width = 'calc(100% - 15.5rem)%';
}