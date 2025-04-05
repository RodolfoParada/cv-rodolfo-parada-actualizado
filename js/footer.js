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
      <div class="row justify-content-between align-items-center">
        
        <!-- Lista izquierda -->
        <div class="col-3 text-center">
            <a><img src="assets/imagenes/react.png" class="img-item" style="width:30px; height:30px ;" alt=""></a>
               <a href="">
              <img src="assets/imagenes/angular.png" class="img-item" style="width:30px; height:30px ;" alt="">
            </a>
            <a href="">
              <img src="assets/imagenes/vue.png" class="img-item" alt="">
            </a>
             <a href="">
              <img src="assets/imagenes/javascripts.png" class="img-item" style="width:30px; height:30px ;" alt="">
            </a>
        </div>

        <!-- Sección de contacto (Centro) -->
        <div class="col-6 text-center titulo-color">
          <h5>Contáctame</h5>
          <p>
            <a href="https://www.linkedin.com/in/rodolfoparada/" target="_blank" rel="link">
              <img src="assets/footer/linkedin.jpg" alt="Imagen de contacto" class="img-linkedin">
            </a>
            <a href="https://github.com/RodolfoParada" target="_blank" rel="github">
              <img src="assets/footer/github.png" alt="Imagen de contacto" class="img-github">
            </a>
          </p>
        </div>

        <!-- Lista derecha -->
        <div class="col-3 text-center">
         <a href="">
              <img src="assets/imagenes/springboot.png" class="img-item" style="width:30px; height:30px ;">
            </a>
             <a href="">
              <img src="assets/imagenes/node.png" class="img-item" style="width:30px; height:30px ;">
            </a>
             <a href="">
              <img src="assets/imagenes/mysql.png" class="img-item" style="width:30px; height:30px ;">
            </a>
            <a href="">
              <img src="assets/imagenes/bootstrap.png" class="img-item" style="width:30px; height:30px ;">
            </a>
        </div>
      </div>

      <!-- Línea de copyright -->
      <div class="text-center">
        <p>&copy; 2025 Rodolfo Parada González. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

`;
  }
}
window.customElements.define("mi-footer", footer);
