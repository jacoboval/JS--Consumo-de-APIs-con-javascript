const searchInput = document.querySelector('#searchInput');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');
searchInput.addEventListener('keypress',(event) => {
    if (event.key === 'Enter'){
        buscarRepositorios();
    }
});

async function buscarRepositorios() {
    const endPoint = `https://api.github.com/users/${searchInput.value}/repos`;
    ocultarError();
    mostrarCargando();
    //alert(endPoint);

    //const response = await fetch(endPoint);
    const response = await fetch(endPoint, {method:'GET'});
    
    
    if(!response.ok){
        mostrarError("No fue posible consultarlso repositorios de ese usuario.");

    }
    const data = await response.json();
    //console.log(data);
    ocultarCargando();
    mostarRepositorios(data);
}
function mostarRepositorios(repos){
    const reposContainer = document.getElementById('reposContainer');
    if(repos.length === 0){
        mostrarError=("El usuario no tiene repositorios.");
    }
    reposContainer.innerHTML = '';

    repos.forEach(repo => {
        reposContainer.innerHTML += `<div>${repo.name}</div>`;
       

    });   
}

function mostrarError(mensaje){
    //const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = mensaje;
    errorMessage.style.display = 'block';
} 
function ocultarError(){
    errorMessage.style.display = '';
}

function mostrarCargando(){
    loading.style.display='block';
}

function ocultarCargando() {
    loading.style.display='';

}