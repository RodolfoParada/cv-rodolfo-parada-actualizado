class footer extends HTMLElement {
  constructor() {
    super();
  }
//dsa
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"> 
              <link rel="stylesheet" href="css/footer.css"/>
   <footer class="footer text-white py-4 fixed-bottom">
    <div class="container">
      <h5 class="titulo-contacto cuadro-contacto">Contáctame</h5>
      <div class="row justify-content-between align-items-center">
        
        <!-- Lista izquierda -->
        <div class="col-3 text-center ">
        <div>
            <a><img src="assets/iconos/react.png" class="img-item" style="width:30px; height:30px ;" alt="React" data-bs-toggle="tooltip" title="React.js">
            </a>
            <a>
              <img src="assets/iconos/angular.png" class="img-item" style="width:30px; height:30px ;" alt="Angular" data-bs-toggle="tooltip" title="Angular.js">
            </a>
            <a>
             <img src="assets/iconos/vue.png" class="img-item"  style="width:30px; height:30px ;" alt="Vue.js" data-bs-toggle="tooltip" title="Vue.js">
            </a>    
            </a>
              <img src="assets/iconos/javascripts.png" class="img-item" style="width:30px; height:30px ;" alt="Javascript" data-bs-toggle="tooltip" title="Javascript">
            </a>
        </div>
        <div>
            <a>
            <img src="assets/iconos/node.png" class="img-item" style="width:30px; height:30px ;" alt="Node.js" data-bs-toggle="tooltip" title="Node.js">
            </a>
            <a>
              <img src="assets/iconos/typescript.png" class="img-item" style="width:30px; height:30px ;" alt="Typescript" data-bs-toggle="tooltip" title="Typescript">
            </a>
            <a>
              <img src="assets/iconos/github.png" class="img-item"  style="width:30px; height:30px ;" alt="GitHub" data-bs-toggle="tooltip" title="GitHub">
            </a>
          </div> 
        </div>
     

        <!-- Sección de contacto (Centro) -->
        <div class="col-6 text-center titulo-color ">
         <div class="container">
        
        </div>
          <p>
            <a href="https://www.linkedin.com/in/rodolfoparada/" target="_blank" rel="link">
              <img src="assets/footer/linkedin.jpg" alt="Imagen de contacto" class="img-linkedin" data-bs-toggle="tooltip" title="Contactame por LinkedIn">
            </a>
            <a href="https://github.com/RodolfoParada" target="_blank" rel="github">
              <img src="assets/footer/github.png" alt="Imagen de contacto" class="img-github" data-bs-toggle="tooltip" title="Puedes ver mi GitHub">
            </a>
          </p>
        </div>

        <!-- Lista derecha -->
        <div class="col-3 text-center">
         <div> 
            <a>
              <img src="assets/iconos/springboot.png" class="img-item" style="width:30px; height:30px;" alt="SpringBoot" data-bs-toggle="tooltip" title="SpringBoot">
            </a>
             <a>
              <img src="assets/iconos/java.png" class="img-item" style="width:30px; height:30px;" alt="Java" data-bs-toggle="tooltip" title="Java">
            </a>
             <a>
              <img src="assets/iconos/html-5.png" class="img-item" style="width:30px; height:30px ;" alt="HTML5" data-bs-toggle="tooltip" title="HTML5">
            </a>
            <a>
              <img src="assets/iconos/css-3.png" class="img-item" style="width:30px; height:30px ;" alt="CSS3" data-bs-toggle="tooltip" title="CSS3">
            </a>
        </div>
        <div>
            <a>
            <img src="assets/iconos/bootstrap.png" class="img-item" style="width:30px; height:30px ;" alt="Bootstrap" data-bs-toggle="tooltip" title="Bootstrap">
            </a>
            <a>
              <img src="assets/iconos/git.png" class="img-item" style="width:30px; height:30px ;" alt="Git" data-bs-toggle="tooltip" title="Git">
            </a>
            <a>
              <img src="assets/iconos/gitlab.png" class="img-item"  style="width:30px; height:30px ;" alt="GitLab" data-bs-toggle="tooltip" title="GitLab">
            </a>
          </div> 
      </div>

      <!-- Línea de copyright -->
      <div class="text-center">
        <p class="copyright">&copy; 2025 Rodolfo Parada González. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

`;
  }
}
window.customElements.define("mi-footer", footer);
