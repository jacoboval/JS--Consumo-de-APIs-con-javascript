const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('keypress',(event) => {
    if (event.key === 'Enter'){
        buscarRepositorios();
    }
});

async function buscarRepositorios() {
    const endPoint = `https://api.github.com/users/${searchInput.value}/repos`;
    //alert(endPoint);

    //const response = await fetch(endPoint);
    const response = await fetch(endPoint, {method:'GET'});
    const data = await response.json();

    console.log(data);
    

}