document.querySelector('.side-items')?.addEventListener('click', (e) => {
    
    // .target é usado para descobrir qual elemento (e) foi clicado
    // pelo usuário
    console.log(e.target);

    // enquanto isso, o currentTarget tem basicamente a mesma finalidade porém ele exibe
    // o elemento que possui o evento de click
});

document.querySelectorAll('.occupied-side')?.forEach(area => {

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

    if(e.currentTarget.querySelector('.occupied-side') == null){
        let dragItem = document.querySelector('.item-box.dragging');
        let closeWindow = document.querySelector('.close-window');
        let hiddenWindow = document.querySelector('.hidden-window');
        let hiddenForm = document.querySelector('#hiddenForm');

        hiddenWindow.style.display = 'flex';

        closeWindow.addEventListener('click', () => {
            hiddenWindow.style.display = 'none';
            e.currentTarget.appendChild(dragItem);
        })
    }
}