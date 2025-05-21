Clase 3
- Entendiendo el CRUD
Avanzamos en nuestra formación sobre el consumo de APIs con JavaScript. Ya hemos estado consumiendo servicios de APIs. Comenzamos con promesas y vimos cómo JavaScript se comporta ante operaciones que no controla completamente, delegando así el concepto de promesa. Hablamos de async y await y pasamos a consumir datos sin conocer mucho sobre lo que era una API.

Luego entendimos que una API es un proceso, una interfaz capaz de comunicar o integrar elementos. En el caso de una API REST, es una API que permite representar transacciones de elementos, donde cada operación es única, va de ida y vuelta, parte del cliente y regresa del servidor con una respuesta, y cada operación es independiente.

No dependemos de una operación para otra, salvo que también tenemos la posibilidad de enviar datos. Aprendimos que existen cuatro métodos o verbos, y hasta ahora solo hemos utilizado el método GET, que se relaciona con el proceso de consulta.

Vamos a ver los verbos GET, POST para inserción, PUT para actualizar, PATCH para actualizar y DELETE para borrar. Estas son las operaciones básicas que, como están en nuestra hoja de ruta, se engloban en el acrónimo CRUD, que se refiere a CREATE, READ, UPDATE, DELETE, es decir, CREAR, LEER, ACTUALIZAR y BORRAR.

Hasta ahora hemos realizado la operación de lectura. Ha llegado el momento de realizar operaciones de creación. Por ejemplo, lo siguiente será lo natural. ¿Qué estamos leyendo? Estamos leyendo repositorios. Por lo tanto, como nuestra hoja de ruta indica, vamos a crear un repositorio desde la API.

Si hemos creado repositorios en GitHub a través de una interfaz, ahora vamos a crear desde la API REST que estamos consumiendo. Para ello, es importante entender qué enviar. Vamos al código, a Visual Studio Code, y modificaremos nuestro archivo de JavaScript. ¿Para qué? Para que, en lugar de un proceso de búsqueda, realicemos un proceso de creación.

Pero antes, hay un paso previo importante: leer la documentación. Nuestro repositorio o aplicación está aquí. Si buscamos nuestro usuario, él nos muestra el consumo de los repositorios que hemos creado, pero ahora es el momento de creación.

Para crear repositorios, vamos al mismo enlace que estábamos utilizando para listar o consultar repositorios. Intenté buscar si la documentación ya estaba traducida. Algunas zonas de la documentación de la API de GitHub están traducidas, pero lamentablemente esta no. Nos manejamos entonces con la parte de leer un poco de inglés, ya que algunas partes están traducidas y otras no.

Voy a bajar un poco y buscar en la parte donde se habla de usuarios autenticados, hay una sección que dice creación de repositorios de usuarios autenticados. ¿Qué nos dice? Que para poder crear un repositorio, debemos trabajar con un token creado en el sitio web de GitHub. Ya lo hicimos, creamos un personal token para ello.

Cuando creamos el personal token, le dimos algunos permisos. Recuerden que este es un endpoint o una ruta privada. Es decir, si no decimos quiénes somos, no nos autoriza. Si no nos autenticamos, no autoriza el acceso. Pueden incluso probar sin el access token para crear, pero no podrán hacerlo.

En GitHub, recuerden que en la parte de settings, teníamos una sección de personal tokens, en "developer settings", donde encontramos los personal access tokens. Usé el token clásico porque es el que está estable. Si entran a este token, que creamos en actividades anteriores y que expira pronto, nos pide que hagamos uso de autenticación. Voy a usar mi contraseña para no tener que buscar mi teléfono, para hacerlo más sencillo. Vamos a ver si con esto podemos entrar.

Ahora, vean qué permite hacer el token: puedo buscar el repositorio, hacer búsquedas, acceso, acceso, acceso, creación. Vean aquí el repositorio. Creo que no le dimos permisos de creación de repositorios. Vamos a buscar aquí. Vamos a darle permisos a todas las operaciones. Aquí access token, public token, full control. Aquí con full control. Creo que está completo. Pueden ir verificando y probando. Creo que con esto podemos crear, venir y actualizar los permisos. Eso es importante.

Si en algún momento creamos nuestro token y no le otorgamos los permisos completos, simplemente podemos regresar y trabajar nuevamente. Vamos a realizar la operación de creación. Antes de hacerlo en la interfaz, que ya está preparada para ciertas operaciones, debemos asegurarnos de tener nuestro proyecto desde el inicio de la actividad anterior. Este proyecto ya cuenta con todo lo necesario para trabajar.

Vamos a realizar una prueba en Postman. Tenemos un conjunto de operaciones sobre nuestro GitHub para crear un nuevo repositorio. Cuando queremos crear, debemos reforzar lo que estamos trabajando. ¿Qué verbo debemos ejecutar en las operaciones? El verbo POST. Luego de ejecutar POST, consultamos la documentación para obtener la ruta que vamos a utilizar. La ruta es user/repos con el verbo POST. Debemos usar la API user/repos, tal como usamos users en otras operaciones.

¿Qué debemos enviar cuando realizamos una operación que requiere autenticación? Un token. En este caso, utilizamos un token Bearer. Vamos a copiar el token que tenemos, el cual es el mismo que está en el código. Vamos a garantizar que obtenemos el del código que está en la línea correspondiente. Guardamos y especificamos que vamos a crear un repositorio.

Estamos realizando todo esto fuera de la interfaz para que comprendamos que hay dos capas: una manejada con JavaScript, HTML, CSS, y la capa de backend que recibe peticiones desde una interfaz, un cliente API o incluso una aplicación móvil.

En este caso, estamos probando todas esas opciones. Con la autenticación establecida, explicaremos la parte del body. ¿Qué es el body? Es lo que enviamos en una petición de una API. Trabajamos con parámetros de consulta o query params, que son aquellos elementos que pasamos con signo de relación para realizar búsquedas. Estos nos permiten cambiar el filtro de nuestra API, como hicimos en actividades anteriores.

Los query params se colocan en la URL y generalmente se usan con el método GET. Hay una forma adicional que veremos ahora, que es especificar un cuerpo o body a la API. En Postman, indicamos que el body es de tipo RAW. ¿Qué formato tendrá ese cuerpo? Puede ser texto, XML, pero generalmente usamos JSON, que es el formato estándar para API REST. Vamos a trabajar con JSON.

Consultamos la documentación y tomamos un ejemplo. Nos indica qué cuerpo debemos enviar: un nombre, una descripción y, por ahora, solo la variable PRIVATE. Podemos extender la funcionalidad de nuestra aplicación para aceptar problemas, gestionar issues dentro del repositorio, crear una wiki para proyectos asociados o habilitar discusiones. Hay muchas posibilidades, pero por ahora nos enfocamos en lo básico para tener dominio.

Copiamos y pegamos el formato, dejando solo las tres primeras variables: nombre, descripción y privacidad. Indicamos que este es un repositorio de Alura Latam, con la descripción "repositorio creado desde la API". Lo dejamos abierto al público.

¿Qué esperamos que suceda? Desde el cliente Postman, enviamos los datos a la API de GitHub y recibimos un resultado indicando que todo está bien. Deberíamos recibir una respuesta que diga RESPONSE del lado derecho y un 201 creado correctamente. Si algo falla, lo corregimos. Enviamos la petición y esperamos un 200. Luego, verificamos en nuestra aplicación y buscamos el repositorio creado desde la API, utilizando el método POST. Esto nos confirma que la API funciona correctamente.

Finalmente, vamos al código de nuestra aplicación para continuar trabajando. Estamos disponibles en el foro y en el canal de Discord para ayudar siempre. Gracias.

-  ajustando la interfaze de las acciones

Llegó el momento de agregar esa funcionalidad a nuestra aplicación, la cual vimos anteriormente que es posible: crear repositorios mediante el consumo de la API de GitHub. Para ello, vamos a utilizar Visual Studio Code y tomaremos algunos elementos que están comentados en el proyecto inicial, los cuales ya habíamos dejado incluidos y construidos para aprovechar el tiempo y enfocarnos en tener esa funcionalidad disponible en nuestra aplicación.

En Visual Studio Code, en el archivo index.html, buscaremos la línea que dice "Action Container". Antes de eso, colocaremos un comentario HTML de cierre, de manera que el comentario que está en la línea 32 se cierre con este en la línea 42, descomentando así la parte de acciones.

Recomiendo que las líneas 48 y 49 las comentemos para dejar disponible solo un botón por ahora, que es el botón de crear repositorios. Más adelante, daremos vida al resto de los botones. Con esto, dejaremos descomentada la parte de creación de repositorios.

Más abajo, veremos que también hay formularios comentados para otras operaciones que realizaremos más adelante. Les pido que, por favor, los comentemos y dejemos el código de la siguiente manera: iniciando el comentario en 1973 y cerrándolo con el comentario que dejamos al final. Esto nos habilita y deja disponible en nuestra aplicación un botón ya construido.

Vamos a buscar nuevamente los repositorios del usuario con el que estamos probando. En mi caso, estoy probando con mi usuario. Al hacer clic en este botón, queremos que aparezca el formulario que aún no hemos visto. Está en el código, pero no lo vemos porque tiene un estilo que lo oculta.

Buscamos el elemento CreateRepo4, que es el formulario que vamos a mostrar, y buscamos Action4. En style.css, Action4 tiene el estilo display: none. Queremos que, al hacer clic en el botón de crear repositorio, ese formulario se muestre.

Para lograrlo, agregamos el tipo de botón y especificamos que es de tipo button, ya que, de lo contrario, toma el tipo submit por defecto. Luego, llamamos al evento onClick para invocar la función mostrarFormulario. Esta es la función que queremos ejecutar. Al hacer clic en ese botón, queremos que el formulario aparezca. Vamos a llamar a esa función en el script y crear la función mostrarCrearRepositorio.

Esto nos permitirá acceder al elemento identificado con ese ID. Aprendimos que para ello utilizamos los métodos del DOM. Creamos una variable con el nombre de ese ID y llamamos al documentObjectModel para hacer un getElementById de ese elemento o un querySelector comenzando con el numeral al inicio, y así tendremos control de ese elemento.

¿Qué queremos que haga? Simplemente, cuando se haga clic en ese botón, se le quite el estilo display: none y se le deje display: block, por ejemplo. Entonces, elemento.style, que sabemos que con esto ya accedemos a los estilos de ese elemento. Aquí indicamos el estilo que queremos. Visual Studio Code nos muestra que queremos el estilo display. A ese estilo display le vamos a asignar block para que se muestre. Perfecto.

¿Qué sucede cuando hacemos clic ahora? Aparece un formulario que tenemos creado. El formulario no nos gusta como está, porque cuando creamos el proyecto inicial, lo dejamos en la aplicación. Si buscamos nuestros repositorios, se ve un poco desordenado. Ese elemento lo vamos a convertir en un modal. Tenemos ya los elementos necesarios para hacerlo.

¿Qué vamos a hacer aquí? En este punto, vamos a cambiar este elemento por un div normal. Luego, vamos a encerrar nuestro formulario por otro div completo. Con ello, le agregaremos un estilo que tenemos, que es modal. Con eso ya aparecerá.

Además, tendremos un div llamado modalContent. Dejamos un modal al final para confirmación que probablemente usemos más adelante. Nos basamos en él para poder crear nuestro modal. Creamos un modalContent que se refiere al contenido del modal. Todas esas clases y estilos están definidas. Con esta corrección, el formulario ahora aparece como un modal. Perfecto.

Solo nos falta colocar el cierre. Y el cierre lo tenemos aquí, con un span de cierre. Solo que tendremos que hacer un poco de JavaScript. Colocamos un botón o un evento llamado onClick para cerrar. ¿A quién? Al modal, y le pasamos el id por ahora. Podemos hacer uso de una sola función. Por ahora, lo dejaremos con el nombre del modal que queremos cerrar, para no complicarlo tanto.

¿Cómo cerramos el modal? Simplemente, colocamos la función cerrarModal. Esta función recibe el elemento que queremos cerrar. Ahora, le indicamos al elemento que pase a la función genérica. elemento igual a document.getElementById, pasando el id que recibimos, y style.display igual a none. Creamos una función genérica para poder cerrar ese elemento.

También podemos hacer una función para abrir, abrirModal, pasando el id. Es fácil y la reutilizaremos en el resto de elementos. Al trabajar con abrirModal, hacemos un block. Simplemente, en este botón le decimos que al hacer clic, se ejecute abrirModal y le pasamos el id. Es más simple y mucho más extensible. Perfecto.

¿Qué sucede cuando hacemos clic? Se hace el llamado a la petición de repositorios. Pero esto lo haremos en la próxima actividad. Ya tenemos todo para consumir la API de la forma que queremos. Vamos a ello. Trabajaremos con el body y haciendo uso de nuestra aplicación, consumiendo la API de GitHub. Continuaremos trabajando en el próximo video. Recuerden que cualquier duda, estamos en el foro para ayudarles. Muchas gracias.

- Usando el metodo POST
Continuamos con nuestra actividad, nuestra tarea de crear repositorios desde nuestra aplicación, consumiendo APIs desde JavaScript.

Tenemos nuestra pantalla, pero queremos mejorar un detalle: el botón de acciones solo debe estar disponible cuando ya hemos buscado los repositorios de algún usuario, ya que deseamos crear un repositorio sobre ese usuario.

Para ello, realizaremos un pequeño cambio. En el div de acciones, colocaremos un ID, lo llamaremos idAcciones, y luego aplicaremos el estilo actionForm para ocultar ese botón. Ahora, el botón ya no aparece.

¿Cuándo lo mostraremos? Cuando busquemos los datos del usuario, debemos mostrarlo. En este caso, tenemos una función llamada mostrarRepositorios o buscarRepositorios, y cuando se realice la operación, debería abrir o mostrar ese elemento. Anteriormente, tenía un nombre como abrirModal y cerrarModal. ¿Qué tal si cambiamos esos nombres a mostrarElementos y ocultarElementos para hacerlo un poco más genérico, ya que no son solo modales?

Entonces, diremos mostrarElemento y queremos que se muestre cuando estemos buscando repositorios, específicamente el elemento de acciones. Le pasamos como ID acciones y se mostrará. Como cambiamos el nombre de las funciones, ahora debemos actualizar nuestro HTML: donde decía abrirModal, ahora será mostrarElemento, y donde decía cerrarModal, será ocultarElemento. Guardamos los cambios.

Si todo está correcto, ahora deberíamos mostrar ese div cuando se carguen los datos. Por ejemplo, al crear un repositorio, ahora se muestra y se cierra correctamente.

Pasemos a crear repositorios. En el formulario que tenemos, hay un botón para crear repositorios. Primero, especificaremos que el tipo es button y luego asociaremos un elemento onclick que llame a crearRepositorio, una función que aún no existe. La crearemos.

¿Será esta función síncrona o asíncrona? Aunque inicialmente podría parecer síncrona, veremos que no lo será. ¿Qué hará la función crearRepositorio? Primero, debe tomar los datos del diálogo. ¿Qué datos tenemos? Entradas: dos inputs y un select. Los obtendremos por ID.

Entonces, obtendremos los const, el newRepoName, con document.getElementById, pasando el ID. Usaremos querySelector, colocando el numeral adelante. Haremos un const de newRepoDesc con querySelector para mostrar la diferencia, nuevamente pasando el numeral y el ID. El tercero es el select, que obtendremos con getElementById.

Intentaremos crear el repositorio. Si repoName es diferente de vacío, usando la comparación estricta, entraremos en el proceso de hacer el fetch. Ya hemos realizado esto antes y aprovecharemos esa parte.

Observamos que tenemos todo el fetch. Usamos el fetch y nos indica que es una operación asíncrona. Traeremos esto aquí y veamos qué sucede. Este mismo elemento solo se ejecutará cuando tengamos un nombre. Pero el fetch ya nos indica que no puede ser una función normal, sino una función asíncrona. Todo lo relacionado con el consumo de APIs, conexión a bases de datos o archivos es asíncrono. Entonces, cuando decimos await, debemos especificar que es asíncrona. Colocamos async al inicio.

¿Y el endpoint? Consultamos la documentación y nos indica que el endpoint es user/repos, de tipo POST. Definimos const endpoint, pero falta la base de la API, ¿verdad? No lleva query params, porque cuando se trata de métodos POST, no se usan realmente. ¿Se pueden usar? Sí, pero no es común. Definimos const method y especificamos que no es GET, sino POST.

const headers igual a datos de conexión, datos de autenticación. Ya tenemos todo aquí. Nosotros tenemos que armar un body. Recordemos que cuando utilizamos el Postman, nosotros armamos un body que era un texto. ¿Qué fue este texto que está aquí? Nosotros lo usamos a partir de un JSON.

Entonces, debemos construir un JSON. Vamos a decir const data igual a un JSON. Aquí decimos name. ¿Qué será ese name? value. Necesitamos una descripción. description será igual a newRepoDesc.value. Necesitamos un private. private será igual a newRepoPrivate.value. Si lo dejamos de esta forma, se pasa como texto y no se espera texto.

La documentación indica que se espera un booleano. Entonces, debemos decir que si es igual a true, le asignamos usando el operador ternario de condicional, true. Si no, indicamos que es false. Podemos hacer simplemente esto y funcionará, pero para dejarlo explícito, lo dejamos de esta forma.

¿Podemos enviar este data aquí? Sí. Cuando hacemos peticiones de tipo POST, va el elemento body. Entonces, body igual a data. Podemos hacer esto aquí. Solo que si este data se envía como un JSON, la API REST no entenderá ese JSON. Necesitamos transformarlo en un string. Para transformar un JSON, JavaScript nos ofrece JSON.stringify pasándole data. Si esto está bien, ya se creará.

Entonces, si no hay respuesta o no es ok, mostraremos un error: "No fue posible crear el repositorio". Si todo funciona, ¿qué deberíamos hacer? Ocultar el elemento. ¿A quién vamos a ocultar? Vamos a ocultar el modal que es este repoForm porque ya no lo necesitamos usar. Pero antes de eso, deberíamos limpiar sus valores.

Entonces, newRepoName.value igual a vacío, newRepoDesc.value igual a vacío, y newRepoPrivate.value igual a false.

Mostramos el elemento. ¿Y qué pasa cuando se crea el repositorio? ¿Qué sucederá en la API? Se tendrá un nuevo elemento que podemos llamar haciendo uso de la función buscarRepositorios. Simplemente. ¿buscarRepositorios necesita algún parámetro? Esta función es asíncrona.

Entonces, utilizamos await para esperar su ejecución. Perfecto. Si todo está bien, venimos a nuestra aplicación. Buscamos al usuario. Nuestro comportamiento define que el usuario debe estar presente para poder activar el botón. Perfecto. Vamos a crear el repositorio. repoDesdeAPI.

Veamos que cuando enviamos espacio en blanco, la API es inteligente y coloca guiones para evitar espacios en el nombre. Nosotros vamos a hacer esa validación. Les invitamos a que realicen eso como tarea dentro de la aplicación.

Este es un repo creado desde la aplicación de Alura usando la API REST de GitHub. Lo dejamos como público. Perfecto. Veamos el repositorio. ¿Y qué pasó? Hubo algún problema. Vamos a investigar. Aquí no funcionó. Algo no salió bien. repoDesdeAPI. Solamente para reducir la prueba. Vamos a público. Veamos qué sucede aquí. Crea repo. Dice 405 no permitido. ¡Oh! Recordemos que mencionamos que faltaba la base. Lo bueno fue que supimos por la gestión de errores que había un problema. Indicamos que este es el endpoint.

Y ahora sí, vamos a hacer la prueba. Vamos a limpiar aquí. Buscamos al usuario. Perfecto. Vamos a crear el repositorio. Entonces, aquí decimos repoDesdeAPI. La API colocará los guiones. Este es un repo creado desde mi aplicación Alura usando la API de GitHub. Vamos a ampliar un poco este texto aquí. Indicamos público. Veamos cómo se comporta. Y creó el repositorio. Ya tenemos el repositorio listo. Nuestro formulario fue capaz de crearlo con todos los datos que queríamos.

Desde la API, ustedes tienen una serie de opciones disponibles para darle más vida a su aplicación. Les invitamos a explorar esta parte y aprovechar la funcionalidad de la API de GitHub con mucha más eficiencia. Entonces, ya creamos. Ya usamos POST. Vamos para PUT y para DELETE. Cualquier duda, en el foro estamos para ayudarles.


- Usando el meetodo PUT

Vamos a completar el proceso de agregar archivos al repositorio utilizando la API de GitHub, específicamente el método PUT, que nos permite crear o actualizar archivos. En este caso, vamos a crear. Tenemos como tarea profundizar en los detalles del uso de la API de GitHub.

La API de GitHub nos indica que es un método PUT, que queremos usarlo, y que se va a pasar a un usuario, el cual ya estamos tomando desde el Search Input Value, en un repositorio que activamos al hacer clic en el botón de actualizar, en un PATH. El PATH se refiere al nombre del archivo.

Vamos a ver cómo enviamos ese PATH. El PATH es el nombre del archivo que queremos. Si revisamos nuestro formulario, debemos tener un file PATH, que es el nombre del archivo que queremos subir y que se creará en el repositorio. Vamos a obtener ese nombre de archivo con const PATH = document.getElementById('file PATH'). Esto es válido siempre que PATH tenga contenido; de lo contrario, no hacemos nada. Cuando tenemos contenido, envolvemos todo dentro de ello.

Ya tenemos el endpoint, el método y los headers. Ahora, ¿qué hacemos? Simplemente armamos nuestro body. Este body lleva un mensaje y un contenido. Este contenido parece codificado, lo cual es normal cuando enviamos archivos, ya que trabajamos con algo llamado base64 para codificar esos archivos.

Esto se debe a que no es común enviar contenido de forma transparente, especialmente cuando son archivos de tipo Word o Excel, que son binarios y tienen un formato interno. Los transformamos a cadenas de texto mediante la codificación.

Vamos a crear un texto que debe ser codificado para poder enviarlo. La documentación indica que el contenido del nuevo archivo debe usar la codificación base64. En JavaScript, esto es sencillo. Además de tener los headers, el método y el endpoint, necesitamos el contenido. Usamos const content = document.getElementById('file content'). Utilizamos PATH arriba porque es la variable que estaba en la documentación, pero también podríamos usar file path sin problema.

También necesitamos un mensaje para el commit. Usamos const fileContentMessage = document.getElementById('file content message'). Con esto, ya podemos crear el archivo. Sabemos dónde está el repositorio, quién es el usuario y qué archivo vamos a enviar.

Para enviar esto, debemos enviar un body. Hacemos un fetch de un endpoint que ya tenemos definido, que lleva unos headers, un método y un body. El body no lo tenemos aún. En este caso, el path ya está en la ruta, lo cual es importante entender. Hablamos de query params, que son aquellos que van después de la interrogación, y de los headers, que nos permiten autenticar y autorizar.

Enviamos el body, y también cosas en la URL o en el endpoint que cambian. Este elemento se puede denominar como un parámetro, pero no es un query param porque va antes de la interrogación. Cuando hay elementos que cambian en una API y van antes de la interrogación, se denominan parámetros o params. Al trabajar con el backend, especialmente con Node, entenderemos bien esto. Son las partes de una API: query params, params, headers y body.

En la data, debemos enviar tanto el mensaje, que será el contenido del mensaje, como el contenido del archivo. La documentación indica que debe ir message y content, pero ese content va en base64. Para ello, usamos una función llamada btoa, que nos permite codificar de forma fácil cadenas de caracteres. Así como hay una forma para codificar, hay una para decodificar, que es atob. btoa es para codificar y atob para decodificar. En este caso, usaremos btoa para codificar el contenido. El contenido está en file content. Como es un texto, debemos aplicarle algunas operaciones antes, como codificar caracteres especiales y aplicar un escape para evitar problemas en el envío de datos.

¿Qué sucede cuando no se puede actualizar? Simplemente mostramos un mensaje indicando que no fue posible subir el archivo al repositorio. Si todo funciona, deberíamos ocultar el elemento, ya que no hay mucho más que hacer. También limpiaremos los valores de las variables. Vamos a establecer path.value como vacío, fileContentMessage.value como vacío, y fileContent.value también como vacío. Con esto, estamos listos para enviar datos.

Vamos a crear un archivo. Primero, buscaremos nuestro usuario. Ustedes usarán su usuario. Yo abriré el repositorio para mostrar que no tiene nada y crearé un primer archivo. Agregaremos un archivo llamado index.html y escribiremos "este es un archivo de inicio" con el mensaje "primer commit". Dejaremos la consola abierta para ver qué se envía y procederemos a agregar el archivo.

Al intentar agregar el archivo, nos encontramos con un error. El endpoint está correcto, pero parece que hubo un problema con el encabezado de la API. Me doy cuenta de que he estado usando const en lugar de let, lo que impide la actualización. Vamos a corregir esto y limpiar la consola. Intentamos nuevamente agregar el archivo index.html con el mensaje "primer commit". Esta vez, funcionó, pero apareció un error indicando que la solicitud no es válida porque properties.message no es un string. Me faltó agregar .value.

Vamos a corregir esto y realizar el proceso nuevamente. Limpiamos y agregamos el archivo. Esta vez, no hubo mensaje de error y el archivo index.html se subió correctamente. Sin embargo, el contenido también necesitaba el .value. Ahora, ocultaremos el elemento correspondiente, asegurándonos de que el ID del modal esté correcto.

Validamos que todos los valores estén correctos. No tenemos un mensaje de confirmación, así que crearemos una función rápida llamada mostrarConfirmación que mostrará un mensaje de éxito. También crearemos una función ocultarConfirmación para ocultar el mensaje cuando sea necesario.

Cuando el archivo se crea correctamente, mostramos la confirmación con el mensaje "Archivo subido exitosamente". Limpiamos y cerramos la operación. Buscamos nuestro archivo en el dispositivo, agregamos un archivo README.md con el mensaje "este es un archivo subido desde la API" y "prueba put". Al agregar el archivo, todo se agregó correctamente, pero el mensaje no apareció. Corregimos el error y verificamos que todo funcione.

Finalmente, creamos otro archivo index.html con el mensaje "este es un archivo de put" y "otro commit". Al agregar el archivo, todo funciona correctamente. Hemos completado la carga de archivos a través del método PUT. Ahora, nos queda el método DELETE. ¡Vamos a ello!

- habilitando el borado de Archivos

Llegó el momento de completar el CRUD que hemos estado desarrollando. Ya hemos creado, leído y actualizado. Nos falta la D de delete (borrar). Según la hoja de ruta de pantalla, utilizaremos el método DELETE de la API REST para eliminar archivos de ese repositorio, indicando la ruta del archivo y que deseamos borrarlo.

Para ello, consultaremos la documentación de la API de GitHub. Allí veremos que existe la posibilidad de eliminar archivos, y el proceso es bastante similar al caso anterior. Aprovecharemos lo que hemos hecho previamente, cambiando prácticamente solo el método.

Procedamos a ello. En nuestro código, no descomentaremos nada. Intentaremos hacerlo en el DOM. Donde teníamos una acción de delete, eliminamos ese código. Lo llamaremos así. Copiamos esto y lo llamaremos ahora en el DOM, como hicimos en el caso del PUT, para saber en qué repositorio queremos aplicar el método. Con el método de agregar archivo, pudimos determinar qué archivo queríamos agregar. Con el de borrar, también podremos usar la variable repoActual desde ese botón.

Lo primero que haremos es agregar el botón. Así como tenemos este elemento aquí, lo colocaremos aquí. Le daremos un estilo, especificando que sea un display flex, para que los elementos aparezcan uno al lado del otro. Flexbox es un tema que en Alura tenemos bastante material para que puedan dominarlo si necesitan un refuerzo.

¿Qué elemento mostraremos? Vamos al index, donde tenemos algunas cosas comentadas por descomentar, como el deleteFileForm. Descomentamos esto y nuestro código estará listo para funcionar. Casi todo está descomentado, así que estamos avanzando bien. En este caso, también teníamos el propietario y el repositorio, pero no los necesitamos, ya están disponibles. Solo necesitamos la ruta del archivo y el mensaje de commit para poder borrarlo. Si tuviéramos control de todos los archivos del repositorio, podría ser una interfaz completa. Pero aquí, como lo hacemos por la API, colocamos el nombre del archivo.

¿Qué hacemos ahora? Traemos las clases que están aquí y este div que está aquí, y las llevamos allí, agregando el modal. ¿Qué le falta a esto? El close, para que podamos cerrarlo sin problemas. Queremos ocultar este elemento que está aquí. Estamos reutilizando todas las piezas de código. Vamos a ver cómo se comporta. Vamos aquí, buscamos, y... ¡epa! No apareció el botón. ¿Por qué no apareció el botón? Tal vez nos faltó guardar algo aquí. Vamos a verificar.

Aquí eliminamos un elemento. Debería haber desaparecido. Vamos a inspeccionar qué sucede. No aparece el botón de eliminar. Revisemos si hay algo mal cerrado. En la sección de mostrar repositorios, parece que todo está en orden. Verifiquemos nuevamente si hay algún problema de caché. No parece ser un problema de caché. ¿Qué sucede con ese botón que no se muestra? Es interesante este detalle. Revisemos si hay algo mal cerrado. Efectivamente, había algo mal cerrado. Ahora sí, perfecto.

Vamos a cambiar el estilo de ese botón, ya que es muy grande. Vamos a darle un estilo más atractivo rápidamente. Le indicaremos que es un delete button. Tengo algunos colores disponibles, incluyendo un rojo que les dejé. El estilo está bien aquí también, pero aplicaremos los nuevos estilos para ver cómo cambia. Aquí hay un estilo de error que vamos a usar también. Lo aplicamos al botón. Perfecto, ahora se ve mejor.

Sabemos que en este repositorio existe un index.html que queremos eliminar. Al hacerlo, se muestra la ruta y el commit. Ahora queremos aplicar el estilo al index.html para que sea consistente, ya que está apareciendo en verde. La clase delete button es correcta, y queremos que sea de tipo button. Cuando se haga clic en él, queremos que borre el archivo del repositorio. Esto sigue la misma línea de lo que hemos estado haciendo.

Vamos a crear una pequeña función para borrar el archivo del repositorio en el script.js. Será una función async (asíncrona), como ya sabemos. Vamos a copiar y pegar con responsabilidad. ¿Qué haremos aquí? Solicitaremos el path, ya que, según la documentación, necesitamos los mismos contenidos que en el caso anterior, solo que enviamos algunos datos adicionales. El proceso de eliminación es prácticamente igual al de actualización, al PUT. Todo esto se aplica aquí. Lo único que no llamaremos es el file content, porque no lo necesitamos. Este file content lo eliminamos. ¿Cuándo borraremos el archivo? Cuando tengamos el path. Tiene sentido que se comporte de la misma manera, incluso podríamos parametrizar la función para optimizarla más adelante, una vez que tengamos dominio del conocimiento. Es fácil hacerlo.

El método que utilizaremos es DELETE. Completamos el CRUD. El commitMessage se utiliza. Si verificamos el cuerpo que vamos a enviar, solo lleva un message. Perfecto. Ese sha es un stream del archivo que será borrado. Es interesante. ¿Cómo calculamos ese sha? Necesitamos pasárselo. Para calcularlo, realizaremos una operación un poco más compleja, pero no tanto. Vamos a llamar a este response, enviando el método headerBody.

Sabemos que necesitamos armar ese sha, ese data con el sha y el message que nos solicita. Traemos este data y lo armamos hasta aquí, solo que falta el sha por completar. Por ahora, lo dejaremos vacío. Aprovechamos todo lo que pudimos.

Ahora entraremos en terreno nuevo, pero eso lo haremos en el próximo video, en la próxima actividad para completar el proceso. Ya levantamos la interfaz y somos capaces de enviar datos. Nos falta un poco más.

¿Cómo lo resolvemos? Lo veremos en la próxima clase. Cualquier duda, estamos en el foro para ayudar. Estamos finalizando el curso. Recuerden, seguimos avanzando. El curso está muy interesante. Gracias.