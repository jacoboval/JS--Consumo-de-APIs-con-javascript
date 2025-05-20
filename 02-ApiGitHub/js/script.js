const searchInput = document.querySelector('#searchInput');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');
const createRepoForm = document.getElementById("createRepoForm");
const token = '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';

searchInput.addEventListener('keypress',(event) => {
    if (event.key === 'Enter'){
        buscarRepositorios();
    }
});

function datosAutentication(){
    const  headers = new Headers();
    // bearer  tipo  de autemtication
    headers.append('Authorization', `bearer ${token}`);

    return headers;

}

async function buscarRepositorios() {
    const headers = datosAutentication();
    const method = 'GET';
    const endPoint = `https://api.github.com/users/${searchInput.value}/repos`;
    const queryParams = 'sort=updated&direction=desc&per_page=100';

    try{    
        ocultarError();
        mostrarCargando();
        //alert(endPoint);

        //const response = await fetch(endPoint, 
        const response = await fetch(`${endPoint}?${queryParams}`,
            {
                //headers:headers,
                headers,
                //method:'GET'
                method,
            });
            
            ocultarCargando();        
        
        if(!response.ok){
            if(response.status === 404)
                mostrarError("Usuario inexistente!");
            else if (response.status === 401)
                mostrarError("Error al autenticar!");
            else
                mostrarError("No fue posible consultarlso repositorios de ese usuario.");
            return;

        }
        const data = await response.json();
        //console.log(data);      
        mostarRepositorios(data);
        mostrarElemento('acciones');
    }catch(error){
        mostrarError(`Se generó un error: ${error.mensaje}`);
    }
}

function mostarRepositorios(repos){
    const reposContainer = document.getElementById('reposContainer');
    if(repos.length === 0){
        mostrarError=("El usuario no tiene repositorios.");
    }
    reposContainer.innerHTML = '';

    repos.forEach(repo => {
        
        const repoCard = document.createElement('div');
        repoCard.className = "repo-card";
        
        repoCard.innerHTML  =`
            <div class="repo-name">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="repo-description">
                ${repo.description || 'Sin descripción'}
            </div>
            <div class="repo-stats">
                <div class="repo-stat">
                    <span>⭐</span> ${repo.stargazers_count}
                </div>
                <div class="repo-stat">
                    <span>🍴</span> ${repo.forks_count}
                </div>
                <div class="repo-stat">
                    ${repo.language || 'N/A'}
                </div>
            </div>

        `;
        reposContainer.appendChild(repoCard);
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

//funcion generica
function ocultarElemento(id){
    const elemento = document.getElementById(id);
    elemento.style.display = 'none';
}
function mostrarElemento(id){
    const elemento = document.getElementById(id);
    elemento.style.display = 'block';
}

async function crearRepositorio(){
    const newRepoName = document.getElementById('newRepoName');
    const newRepoDesc = document.querySelector('#newRepoDesc');
    const newRepoPrivate = document.getElementById('newRepoPrivate');
    const endPoint = 'https://api.github.com/user/repos';
    const method = 'POST';
    const headers = datosAutentication();

    if (newRepoName !== '') {
        const data = {
            name: newRepoName.value,
            description: newRepoDesc.value,
            private: newRepoPrivate.value === 'true' ? true : false
        }
        const response = await fetch(`${endPoint}`,
            {
                headers,
                method,
                body: JSON.stringify(data)
            });

        if (!response.ok) {
            mostrarError("No fue posible crear el repositorio");
        }
        newRepoName.value = '';        
        newRepoDesc.value = '';
        newRepoPrivate.value = 'false';
        ocultarElemento('createRepoForm');
               
        await buscarRepositorios();
    }
}