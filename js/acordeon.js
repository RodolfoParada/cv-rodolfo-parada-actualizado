class Acordeon extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      let data = [];
      try {
        data = JSON.parse(this.getAttribute("data") || "[]");
      } catch (e) {
        console.error("Error al parsear el atributo data:", e);
        return;
      }
  
      const uniqueId = `acordeon-${crypto.randomUUID()}`;
  
      this.innerHTML = `
        <link rel="stylesheet" href="css/index.css" />
        <div class="container mt-4">
          <div class="row">
            <!-- Acordeón al lado izquierdo -->
            <div class="col-12 col-md-3 fondo-colapse color-fondo">
              <div class="accordion" id="${uniqueId}-buttons">
                ${data.map((item, index) => `
                  <div class="accordion-item color-fondo">
                    <h2 class="accordion-header">
                      <button 
                        class="accordion-button custom-btn ${index === 0 ? 'activo' : ''}" 
                        type="button" 
                        data-index="${index}"
                        aria-expanded="${index === 0}"
                        aria-controls="${uniqueId}-content-${index}"
                      >
                        <span class="fw-bold">${item.titulo}</span>
                        <img src="/assets/iconos/punta-flecha.png" class="punta-flecha" alt="">
                      </button>
                    </h2>
                  </div>
                `).join('')}
              </div>
            </div>
  
            <!-- Texto al lado derecho -->
            <div class="col-12 col-md-8">
              <div class="accordion-content">
                <div class="accordion-text" id="${uniqueId}-content">
                  <!-- Aquí va el contenido dinámico -->
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  
      const contentArea = this.querySelector(`#${uniqueId}-content`);
      const buttons = this.querySelectorAll(".custom-btn");
  
      const mostrarContenido = (index) => {
        const item = data[index];
        if (!item) return;
  
        // Insertar contenido dinámico con HTML
        contentArea.innerHTML = `
          <h4 class="fw-bold fs-4 izquierda">${item.titulo}</h4>
          <div class="texto mt-3">${item.contenido}</div>
        `;
  
        // Establecer los botones activos
        buttons.forEach((btn, i) => {
          const isActive = i === index;
          btn.classList.toggle("activo", isActive);
          btn.setAttribute("aria-expanded", isActive);
        });
      };
  
      // Eventos de click para los botones
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const index = parseInt(btn.getAttribute("data-index"), 10);
          mostrarContenido(index);
        });
      });
  
      // Mostrar el primer contenido por defecto
      if (data.length > 0) mostrarContenido(0);
    }
  }
  window.customElements.define("mi-acordeon", Acordeon);
  