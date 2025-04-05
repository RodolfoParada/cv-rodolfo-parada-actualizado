class navegacion extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"> 
          <link rel="stylesheet" href="css/nav.css"/>
       <nav class="navbar navbar-expand-lg navbar-light fixed-top color">
  <div class="container-fluid">
    <a class="titulo-rodolfo fw-bold fs-5" href="#">Rodolfo Parada González</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link sobreMi" aria-current="page" href="index.html">Sobre mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link experiencia" href="experiencia.html">Experiencia</a>
        </li>
           <li class="nav-item">
          <a class="nav-link formacion" href="formacion.html">Formación</a>
        </li>
        </li>
           <li class="nav-item">
          <a class="nav-link proyectos" href="proyectos.html">Proyectos</a>
        </li>
        </li>
           <li class="nav-item">
          <a class="nav-link contactame" href="contactame.html">Contáctame</a>
        </li>
      </ul>

      <!-- Imagen a la derecha -->
          <img src="/assets/images/rodolfo1.jpg" alt="Perfil" class="rounded-circle img-perfil" style="width: 40px; height: 40px; object-fit: cover; margin-left: auto;">
        </div>
    </div>
  </div>
</nav>
        `;
  }
}

window.customElements.define("mi-navegacion", navegacion);
