// Selecciona la caja de búsqueda y la sección de productos.
const searchBox = document.getElementById('search-box');
const productItems = document.querySelectorAll('.product-item');



/**
 * Filtra productos basándose en la entrada del usuario.
 */
function filterProducts() {
    // Obtiene el texto ingresado por el usuario.
    let query = searchBox.value.toLowerCase();

    // Itera sobre cada producto.
    productItems.forEach(product => {
        // Obtiene el nombre del producto desde el atributo "data-product-name".
        let productName = product.getAttribute('data-product-name').toLowerCase();

        // Si el nombre del producto contiene la consulta, muestra el producto. Si no, lo oculta.
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

/**
 * Función que carga contenido en el div 'page-content' en función de la página solicitada.
 * @param {string} pageName - El nombre de la página a cargar.
 */
function loadPage(pageName) {
    const contentDiv = document.getElementById('page-content');
    const productSection = document.getElementById('product-section');

    // Limpiamos el contenido previo y ocultamos la sección de productos para todas las opciones por defecto
    contentDiv.innerHTML = '';
    productSection.style.display = 'none';

    switch (pageName) {
        case 'home':
            contentDiv.innerHTML = '<h2>Inicio</h2><p>Bienvenido a nuestra tienda.</p>';
            break;
        case 'products':
            // Solo para 'productos', mostramos la sección de productos
            productSection.style.display = 'block';
            break;
        case 'about':
            contentDiv.innerHTML = '<h2>Acerca de</h2><p>Información sobre nosotros.</p>';
            break;
        case 'contact':
            contentDiv.innerHTML = '<h2>Contacto</h2><p>Formulario de contacto o detalles.</p>';
            break;
    }
}

    // Llama a la función con 'home' como argumento para cargar el contenido de Inicio
    loadPage('home');

    // function loadExternalContent() {
    //     var xhr = new XMLHttpRequest();
    //     var container = document.getElementById('page-content'); // Cambiado a 'page-content'


    //     xhr.open('GET', 'https://portafolio.digital/co/catalogo/a30ff714-3db1-47cd-9bf3-64baad0219df', true); // Sustituye 'URL_DEL_CONTENIDO' con la URL real a donde quieres dirigirte.
    
    //     xhr.onload = function() {
    //         if (this.status === 200) { // Si la solicitud fue exitosa.
    //             container.innerHTML = this.responseText; // Insertamos el contenido en el contenedor.
    //         } else {
    //             container.innerHTML = "Error al cargar el contenido.";
    //         }
    //     };
    
    //     xhr.onerror = function() {
    //         container.innerHTML = "Error al realizar la solicitud.";
    //     };
    
    //     xhr.send(); // Realizamos la solicitud.
    // }
    

// Agrega un "event listener" para detectar cuando el usuario escribe en la caja de búsqueda.
searchBox.addEventListener('input', filterProducts);
