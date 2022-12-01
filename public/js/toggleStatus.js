let selectMenu = document.querySelector('#equipament-Status');
let selectMenuChildren = document.querySelectorAll('#equipament-Status option');
let clients = document.querySelector('.clientResponsible');
let clientsSelect = document.querySelector('#clientResponsible');
let i = 0;

selectMenu.addEventListener('click', () => {
    if(selectMenu.value == 'Ocupado'){
        clients.style.display = 'block';
        clientsSelect.removeAttribute('disabled');
    } else if(selectMenu.value == 'Disponivel') {
        clients.style.display = 'none';
        clientsSelect.setAttribute('disabled', '');
    }

})
