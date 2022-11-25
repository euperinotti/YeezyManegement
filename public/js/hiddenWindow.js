let hiddenWindow = document.querySelector('.hidden-window');
let addEquipament = document.querySelector('.add-equipament');
let addClient = document.querySelector('.add-client');
let closeWindow = document.querySelector('.close-window');

addEquipament.addEventListener('click', () => {
    hiddenWindow.style.display = 'flex';
})

closeWindow.addEventListener('click', () => {
    hiddenWindow.style.display = 'none';
})

