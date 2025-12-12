

// En js/router.js
// Usamos el prefijo 'vistas/' en el valor de cada ruta
const routes = {
    // Casos de carga inicial de Live Server
    '/': 'vistas/index-content.html', 

    // Casos de click en el NAV (Sin slash)
    'index.html': 'vistas/index-content.html', 
    'experiencia.html': 'vistas/experiencia-content.html',
    'formacion.html': 'vistas/formacion-content.html',
    'proyectos.html': 'vistas/proyectos-content.html',

    // Casos de acceso directo en el navegador (Con slash)
    '/index.html': 'vistas/index-content.html',
    '/experiencia.html': 'vistas/experiencia-content.html',
    '/formacion.html': 'vistas/formacion-content.html',
    '/proyectos.html': 'vistas/proyectos-content.html',
};
// ... el resto del código
// ... el resto de la función navigateTo y el listener del DOM ...

async function navigateTo(pathname) {
    const route = routes[pathname];
    const contentArea = document.querySelector('main#spa-content'); 

    // PRUEBA DE FUEGO 1: Verifica que el contenedor existe
    if (!contentArea) {
        console.error("ERROR CRÍTICO: El elemento <main id='spa-content'> no se encontró.");
        return; // Detiene la ejecución si el elemento no existe
    }
    
    // PRUEBA DE FUEGO 2: Verifica que la ruta está definida
    if (!route) {
        contentArea.innerHTML = '<h1>404 | Página no encontrada por el router</h1>';
        return;
    }
    
    try {
        const response = await fetch(route);
        
        // Verifica si la carga del archivo falló (por ejemplo, 404)
        if (!response.ok) {
            contentArea.innerHTML = `<h1>Error de carga: El archivo ${route} no existe (Status: ${response.status})</h1>`;
            throw new Error(`Error al cargar ${route} (Status: ${response.status})`);
        }
        
        const html = await response.text();
        contentArea.innerHTML = html; 
        window.history.pushState({}, pathname, pathname);
        // Llamamos a la inicialización si existe (evita errores si no está definida)
if (typeof window.initializeProyectosView === 'function') {
    // Solo ejecutar si la vista contiene el selector (mejor práctica)
    if (document.getElementById('categoriaTabs')) {
        try {
            window.initializeProyectosView();
            console.log('initializeProyectosView ejecutada correctamente.');
        } catch (err) {
            console.error('Error al inicializar proyectos:', err);
        }
    }
}

        console.log(`Navegación exitosa a: ${pathname}. Contenido de ${route} cargado.`);
        
    } catch (error) {
        console.error("Error de SPA routing:", error);
        contentArea.innerHTML = `<h1>Error de carga: ${error.message}</h1>`;
    }
}

// ⭐ Aseguramos que la función sea GLOBAL (para que nav.js la vea)
window.navigateTo = navigateTo; 

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('popstate', () => {
        navigateTo(window.location.pathname);
    });
    
    // Carga la vista inicial al abrir la página
    navigateTo(window.location.pathname); 
});