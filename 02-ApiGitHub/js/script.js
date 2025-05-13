const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('keypress',(event) => {
    if (event.key === 'Enter'){
        buscarRepositorios();
    }
});

function buscarRepositorios() {
    alert('Buscando');

}