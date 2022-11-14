let hiddenWindow = document.querySelector('.hidden-window');
let addEquipament = document.querySelector('.add-equipament');
let closeWindow = document.querySelector('.close-window');

console.log('anexado');

addEquipament.addEventListener('click', () => {
    hiddenWindow.style.display = 'flex';
})

closeWindow.addEventListener('click', () => {
    hiddenWindow.style.display = 'none';
})

