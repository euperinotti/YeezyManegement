document.querySelectorAll('.left-side')?.forEach(area => {

    // Sempre que for necessário criar um evento de drag and drop, é necessário
    // ter essas 3 funções, drag over, drag leave e drop

    area.addEventListener('dragover', dragOver); // Arrastar um elemento para dentro
    area.addEventListener('dragleave', dragLeave); // Arrastar um elemento para fora
    area.addEventListener('drop', drop); // Soltar um elemento
});

document.querySelectorAll('.item-box')?.forEach(item => {

    // comeco do evento de arrastar
    item.addEventListener('dragstart', dragStart);

    // final do evento de arrastar
    item.addEventListener('dragend', dragEnd);
});

function dragStart(e){
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}

 // Funcções relacionadas a area do elemento
 

function dragOver(e){

    // Permite que o elemento seja solto em outro lugar do html
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeave(e){
    e.currentTarget.classList.remove('hover');
}

function drop(e){
    e.currentTarget.classList.remove('hover');
    

    if(e.target.classList.contains('occupied-side')){
        let dragItem = document.querySelector('.item-box.dragging');
        let closeWindow = document.querySelector('.close-window');
        let submitForm = document.querySelector('.submitForm');
        let hiddenWindow = document.querySelector('.hidden-window');
        let hiddenForm = document.querySelector('#hiddenForm');
        let equipamentId = document.querySelector('.item-box');

        hiddenWindow.style.display = 'flex';

        submitForm.addEventListener('click', () => {
            hiddenForm.action = `/transfer/${equipamentId.getAttribute('equipId')}`
        })

        closeWindow.addEventListener('click', () => {
            hiddenWindow.style.display = 'none';
            e.currentTarget.appendChild(dragItem);
        })
    }
    if(e.target.classList.contains('available-side')){
        let dragItem = document.querySelector('.item-box.dragging');

        location.href = `/restore/${dragItem.getAttribute('equipId')}`
    }
}