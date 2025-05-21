const searchInput = document.querySelector('#searchInput');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');
const createRepoForm = document.getElementById("createRepoForm");
const token = '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';

//  se usa let para quse se pueda actualizar el valor
let repoActual = '';

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

    // searchInput.value  -->  owner
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
            <div style="display:flex">
                <button type="button" class="addButton" onclick="mostrarElemento('addFileForm'); repoActual='${repo.name}'">Agregar Archivo</button>
                <button type=button class="deleteButton" onclick="mostrarElemento('deleteFileForm');repoActual='${repo.name}'">Eliminar Archivo</button>       
            </div>

        `;
        reposContainer.appendChild(repoCard);
    });   
}

function mostrarConfirmacion(mensaje) {
    const successMessage = document.getElementById('successMessage');    
    successMessage.textContent = mensaje;
    successMessage.style.display = 'block';
}

function ocultarConfirmacion(){
    const succesMessage = document.getElementById('succesMessage');
    succesMessage.style.display = 'none';

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
async function agregarArchivoRepo(){
    const path = document.getElementById('filePath');
    if(path !== ''){
        const endPoint = `https://api.github.com/repos/${searchInput.value}/${repoActual}/contents/${path.value}`;
        const method = 'PUT';
        const headers = datosAutentication();
        const fileContent = document.getElementById('fileContent');
        const fileCommitMsg = document.getElementById('fileCommitMsg');

        const data = {
            message: fileCommitMsg.value,
            content: btoa(unescape(encodeURIComponent(fileContent.value)))
        };
        
        //https://developer.mozilla.org/es/docs/Web/API/Window/atob
       

        const response = await fetch(`${endPoint}`,
            {
                headers,
                method,
                body: JSON.stringify(data)
            });

        if (!response.ok) {
            mostrarError("No fue posible agregar al archivo al repositorio.");
            return;
        }
        mostrarConfirmacion('Archivo subido exitosamente.');
        path.value = '';        
        fileContent.value = '';
        fileCommitMsg.value = '';        

        ocultarElemento('addFileForm');
    }
}

async function obtenerSHAArchivoRepositorio(path) {
    if (path !== '') {
        const endPoint = `https://api.github.com/repos/${searchInput.value}/${repoActual}/contents/${path}`;     
        const headers = datosAutentication();

        const response = await fetch(`${endPoint}`,
            {
                headers
            });
            if(!response.ok){
                return false;
            }

            const data = await response.json();
            return data['sha'];
    }    
}
async function borrarArchivoRepositorio(params) {
    const path = document.getElementById('delFilePath');
    if (path !== '') {
        const endPoint = `https://api.github.com/repos/${searchInput.value}/${repoActual}/contents/${path.value}`;
        const method = 'DELETE';
        const headers = datosAutentication();
        
        const delCommitMsg = document.getElementById('delCommitMsg');
        const sha = await obtenerSHAArchivoRepositorio(path.value);

        const data = {
            message: delCommitMsg.value,
            sha
        };

        const response = await fetch(`${endPoint}`,
            {
                headers,
                method,
                body: JSON.stringify(data)
            });

        if(!response){
            mostrarError("No se pudo borrar el archivo.");
            return;
        }
        mostrarConfirmacion("Archivo borrado con éxito.");
        
        path.value='';
        delCommitMsg.value = '';
        ocultarElemento('deleteFileForm');
            
    }   
    
}

