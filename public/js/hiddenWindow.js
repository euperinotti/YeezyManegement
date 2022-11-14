let hiddenWindow = document.querySelector('.hidden-window');
let addEquipament = document.querySelector('.add-equipament');

console.log('anexado');

addEquipament.addEventListener('click', () => {
    hiddenWindow.style.display = 'flex';
})