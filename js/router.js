// js/router.js

// =================================================================
// PASO 1: UTILIDAD PARA CARGAR SCRIPTS DINÁMICAMENTE
// =================================================================
const loadedScripts = new Set();
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        // Protección 1: Si ya está en el Set, no lo cargamos de nuevo.
        if (loadedScripts.has(src)) {
            console.log(`Script ya cargado: ${src}`);
            return resolve();
        }

        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        
        script.onload = () => {
            loadedScripts.add(src);
            resolve();
        };
        
        script.onerror = (error) => {
            console.error(`Error al cargar el script: ${src}`, error);
            reject(new Error(`Failed to load script ${src}`));
        };

        document.head.appendChild(script);
        console.log(`Cargando script: ${src}`);
    });
};


// =================================================================
// PASO 2: DEFINICIÓN DE RUTAS Y FUNCIÓN PRINCIPAL
// RUTAS CORREGIDAS: Usan el prefijo 'vistas/' para los archivos de contenido.
// =================================================================
const routes = {
    '/': 'vistas/index-content.html',
    '/index.html': 'vistas/index-content.html', 
    '/experiencia.html': 'vistas/experiencia-content.html',
    '/formacion.html': 'vistas/formacion-content.html',
    '/proyectos.html': 'vistas/proyectos-content.html'
};

const contentArea = document.querySelector('main#spa-content');

if (!contentArea) {
    console.error('El elemento main#spa-content no se encontró en el DOM.');
}

async function navigateTo(pathname) {
    if (!contentArea) return;

    // *** NORMALIZACIÓN DE RUTA ***
    // 1. Eliminar parámetros de consulta (ej. ?foo=bar)
    let normalizedPath = pathname.split('?')[0]; 
    
    // 2. Asegurar que empiece con '/' si no es el caso (para rutas como 'index.html')
    if (!normalizedPath.startsWith('/')) {
        normalizedPath = '/' + normalizedPath;
    }

    // 3. Si la ruta es solo '/index.html', la tratamos como el inicio '/'
    if (normalizedPath === '/index.html') {
         normalizedPath = '/';
    }

    const routeKey = normalizedPath;
    const route = routes[routeKey];
    
    if (!route) {
        console.error(`Ruta no encontrada para: ${routeKey}`); 
        contentArea.innerHTML = '<h1>404 - Página no encontrada</h1>';
        window.history.pushState({}, routeKey, routeKey); 
        return;
    }

    try {
        // =================================================================
        // *** LÓGICA DE CARGA DE DEPENDENCIAS ESPECÍFICAS DE LA VISTA ***
        // Utilizamos la clave 'routeKey' (normalizada) para la lógica condicional.
        // =================================================================
        
        // --- Carga de Acordeón y Popover ---
        if (routeKey === '/formacion.html' || routeKey === '/experiencia.html' || routeKey === '/') {
            await loadScript('js/acordeon.js'); 
        }
        
        if (routeKey === '/') {
            await loadScript('js/popover.js'); 
        }

        // --- Carga de todos los Componentes de Proyectos ---
        if (routeKey === '/proyectos.html') {
            console.log('Cargando dependencias de Proyectos...');
            
            await loadScript('js/paginacionCards.js');
            await loadScript('js/proyectoClones.js');
            await loadScript('js/proyectoCrud.js');
            await loadScript('js/proyectoEcommerce.js');
            await loadScript('js/proyectoDashboars.js');
            await loadScript('js/proyectoIa.js');
            await loadScript('js/proyectoBackend.js');
            await loadScript('js/proyectoFrontend.js');
            await loadScript('js/proyectoLogica.js');
            await loadScript('js/proyectoJuegos.js');
            await loadScript('js/proyectoFullStack.js');
            await loadScript('js/proyectoEmpresariales.js');
            await loadScript('js/proyectoSeguridad.js');
            await loadScript('js/proyectoUX.js');
            
            await loadScript('js/proyectos-init.js'); 
        }

        // --- FETCH Y RENDERIZADO DEL CONTENIDO ---
        const response = await fetch(route);

        if (!response.ok) {
            throw new Error(`Error al cargar el contenido de ${route}: ${response.statusText}`);
        }

        const html = await response.text();
        
        contentArea.innerHTML = html; 
        
        window.history.pushState({}, routeKey, routeKey); 
        
        // Llamada a la inicialización de proyectos
        if (routeKey === '/proyectos.html' && typeof window.initializeProyectosView === "function") {
            if (document.getElementById("categoriaTabs")) {
                console.log("Inicializando vista de Proyectos...");
                window.initializeProyectosView();
            }
        }
        
        console.log(`Navegación exitosa a: ${routeKey}. Contenido de ${route} cargado.`);

    } catch (error) {
        console.error('Error durante la navegación:', error);
        contentArea.innerHTML = `<h1>Error de Carga</h1><p>No se pudo cargar el contenido de la página: <strong>${route}</strong>. (Verifica la consola para 404)</p>`;
    }
}

// =================================================================
// PASO 3: MANEJO DE EVENTOS
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Escuchamos clicks en cualquier enlace que termine en .html
    document.body.addEventListener('click', e => {
        const target = e.target.closest('a');
        if (target && target.getAttribute('href') && target.getAttribute('href').endsWith('.html')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            navigateTo(href); 
        }
    });

    // Manejar el botón de retroceso/adelante del navegador
    window.onpopstate = () => {
        navigateTo(window.location.pathname);
    };

    // Cargar la vista inicial (usa la URL actual: / o /archivo.html)
    navigateTo(window.location.pathname);
});