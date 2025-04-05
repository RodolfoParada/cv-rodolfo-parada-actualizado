class Acordeon extends HTMLElement {
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

    
   

    this.innerHTML = `
      <link rel="stylesheet" href="css/index.css"/>
      <div class="container mt-4">
        <div class="row">
          <!-- Acordeón al lado izquierdo -->
          <div class="col-12 col-md-3 fondo-colapse color-fondo">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item color-fondo">
                <h5 class="d-flex justify-content-center fs-6 align-items-center fw-bold"></h5>
                <h2 class="accordion-header">
                  <button class="accordion-button accordion-collapse collapse show" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span class="fw-bold">${titulo1}</span>
                    <img src="/assets/iconos/punta-flecha.png" id="flecha" class="punta-flecha" alt="">     
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed color-fondo fw-bold text-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span class="fw-bold">${titulo2}</span>
                    <img src="assets/iconos/punta-flecha.png" id="flecha" class="punta-flecha" alt="" style="transition: transform 0.3s;">
                  </button>
                </h2>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed color-fondo" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span class="fw-bold">${titulo3}</span>
                    <img src="assets/iconos/punta-flecha.png" id="flecha" class="punta-flecha" alt="">
                  </button>
                </h2>
              </div>
            </div>
          </div>

          <!-- Texto al lado derecho de los botones, visible solo cuando se expande -->
          <div class="col-12 col-md-8">
            <div class="accordion-content">
              <div class="accordion-text" id="accordionTextOne" data-bs-parent="#mainAccordion">
                <h4 class="fw-bold fs-4 izquierda">${titulo1}</h4>
                <div class="texto mt-3">${contenido1}</div>
              </div>
              <div class="accordion-text" id="accordionTextTwo" data-bs-parent="#mainAccordion">
                <h4 class="fw-bold izquierda">${titulo2}</h4>
                <div class="texto mt-3">${contenido2}</div>
              </div>
              <div class="accordion-text" id="accordionTextThree" data-bs-parent="#mainAccordion">
                <h4 class="fw-bold fs-4 izquierda">${titulo3}</h4>
                <div class="texto mt-3">${contenido3}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("acordeon-experiencia", Acordeon);
