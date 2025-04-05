class AcordeonFormacion extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const titulo1 = this.getAttribute('titulo1') || 'Tema 1';
      const contenido1 = this.getAttribute('contenido1') || 'Contenido 1';
  
      const titulo2 = this.getAttribute('titulo2') || 'Tema 2';
      const contenido2 = this.getAttribute('contenido2') || 'Contenido 2';
  
      const titulo3 = this.getAttribute('titulo3') || 'Tema 3';
      const contenido3 = this.getAttribute('contenido3') || 'Contenido 3';
  
      const titulo4 = this.getAttribute('titulo4') || 'Tema 4';
      const contenido4 = this.getAttribute('contenido4') || 'Contenido 4';
  
      const titulo5 = this.getAttribute('titulo5') || 'Tema 5';
      const contenido5 = this.getAttribute('contenido5') || 'Contenido 5';
  
      this.innerHTML = `
        <link rel="stylesheet" href="css/index.css"/>
        <div class="container mt-4">
          <div class="row">
            <!-- Acordeón izquierdo -->
            <div class="col-12 col-md-3 fondo-colapse color-fondo">
              <div class="accordion">
                <div class="accordion-item color-fondo">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" onclick="mostrar1()">
                      <span class="fw-bold">${titulo1}</span>
                      <img src="assets/iconos/punta-flecha.png" class="punta-flecha" alt="">
                    </button>
                  </h2>
                </div>
                <div class="accordion-item color-fondo">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" onclick="mostrar2()">
                      <span class="fw-bold">${titulo2}</span>
                      <img src="assets/iconos/punta-flecha.png" class="punta-flecha" alt="">
                    </button>
                  </h2>
                </div>
                <div class="accordion-item color-fondo">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" onclick="mostrar3()">
                      <span class="fw-bold">${titulo3}</span>
                      <img src="assets/iconos/punta-flecha.png" class="punta-flecha" alt="">
                    </button>
                  </h2>
                </div>
                <div class="accordion-item color-fondo">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" onclick="mostrar4()">
                      <span class="fw-bold">${titulo4}</span>
                      <img src="assets/iconos/punta-flecha.png" class="punta-flecha" alt="">
                    </button>
                  </h2>
                </div>
                <div class="accordion-item color-fondo">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" onclick="mostrar5()">
                      <span class="fw-bold">${titulo5}</span>
                      <img src="assets/iconos/punta-flecha.png" class="punta-flecha" alt="">
                    </button>
                  </h2>
                </div>
              </div>
            </div>
  
            <!-- Contenido derecho -->
            <div class="col-12 col-md-8">
              <div class="accordion-content">
                <div class="accordion-text" id="contenido1">
                  <h4 class="fw-bold fs-4 izquierda">${titulo1}</h4>
                  <div class="texto mt-3">${contenido1}</div>
                </div>
                <div class="accordion-text" id="contenido2" style="display: none;">
                  <h4 class="fw-bold fs-4 izquierda">${titulo2}</h4>
                  <div class="texto mt-3">${contenido2}</div>
                </div>
                <div class="accordion-text" id="contenido3" style="display: none;">
                  <h4 class="fw-bold fs-4 izquierda">${titulo3}</h4>
                  <div class="texto mt-3">${contenido3}</div>
                </div>
                <div class="accordion-text" id="contenido4" style="display: none;">
                  <h4 class="fw-bold fs-4 izquierda">${titulo4}</h4>
                  <div class="texto mt-3">${contenido4}</div>
                </div>
                <div class="accordion-text" id="contenido5" style="display: none;">
                  <h4 class="fw-bold fs-4 izquierda">${titulo5}</h4>
                  <div class="texto mt-3">${contenido5}</div>
                </div>
              </div>
            </div>
          </div>
        </div>