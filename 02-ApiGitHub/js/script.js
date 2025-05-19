const searchInput = document.querySelector('#searchInput');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');
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

   
        ocultarError();
        mostrarCargando();
        //alert(endPoint);

        //const response = await fetch(endPoint);
        const response = await fetch(endPoint, 
            {
                //headers:headers,
                headers,
                //method:'GET'
                method,
            });
        
        
        if(!response.ok){
            mostrarError("No fue posible consultarlso repositorios de ese usuario.");

        }
        const data = await response.json();
        //console.log(data);
        ocultarCargando();
        mostarRepositorios(data);
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