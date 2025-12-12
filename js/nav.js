class Navegacion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="./css/nav.css"/>
      <link rel="stylesheet" href="css/dark-mode.css"/>
  
      <nav class="navbar navbar-expand-lg navbar-light fixed-top color px-3">
        <div class="container-fluid">
          <a class="titulo-rodolfo fw-bold fs-5 text-white" href="index.html">Rodolfo Parada González</a>
          
          <button class="navbar-toggler" id="btn-toggle" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link text-white" href="index.html">Sobre mí</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="experiencia.html">Experiencia</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="formacion.html">Formación</a></li>
              <li class="nav-item"><a class="nav-link text-white" href="proyectos.html">Proyectos</a></li>
            </ul>
            <div class="d-flex align-items-center gap-2 ms-lg-auto mt-2 mt-lg-0">
              <mi-modo-oscuro></mi-modo-oscuro>
              <img src="assets/images/rodolfo2.jpg" alt="Perfil" class="rounded-circle img-perfil"
              style="width: 40px; height: 40px; object-fit: cover;">
            </div>
          </div>
        </div>
      </nav>
    `;

    // 1. Comportamiento del toggle personalizado (existente)
    const toggleBtn = this.shadowRoot.getElementById("btn-toggle");
    const menu = this.shadowRoot.getElementById("menu");

    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    // 2. Lógica de enrutamiento SPA (NUEVA) 🚀
   const navLinks = this.shadowRoot.querySelectorAll('a.nav-link, a.titulo-rodolfo'); // Incluye el título [cite: 984]
    
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 🛑 Detiene la recarga de página 
        
        const targetPath = link.getAttribute('href'); 
        
        // Llama a la función global
        if (typeof window.navigateTo === 'function') {
            window.navigateTo(targetPath); 
            // Cierra el menú móvil si estaba abierto 
            // (Asegúrate de tener la variable 'menu' definida en este scope)
            // if (menu.classList.contains("show")) { menu.classList.remove("show"); }
        } else {
            console.error("Función window.navigateTo no definida. FALLO DE SCOPE.");
        }
    });
});

    console.log("Componente <mi-navegacion> cargado correctamente");
  }
}

customElements.define("mi-navegacion", Navegacion);