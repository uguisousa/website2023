const { 
    itemContato: itemContatoLink, 
    modal, 
    close: closeModal 
} = {
    itemContato: document.querySelector('.item-contato'),
    modal: document.getElementById('modal'),
    close: document.querySelector('.close')
};

itemContatoLink.addEventListener('click', function(event) {
    event.preventDefault(); 

    // Exibe o modal
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora da área do modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
