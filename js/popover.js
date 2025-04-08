class popover extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Obtenemos los atributos del componente
    const titulo = this.getAttribute('titulo');
    const contenido = this.getAttribute('contenido');
    const textoBoton = this.getAttribute('text-boton');
    const ancho = this.getAttribute("ancho");
    
    // Generamos una clase única basada en el ancho
    const popoverClass = `custom-popover-${ancho.replace('%', '').replace('vw', '').replace('px', '')}`;

    this.innerHTML = ` 
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="/css/index.css"/>
      <style>
        .custom-popover {
          min-width: ${ancho} !important;
          max-width: 100vw;
          width: ${ancho} !important;
        }
        .popover-header {
          position: relative;
        }
        .popover-header .btn-close {
          position: absolute;
          right: 10px;
          top: 10px;
        }
      </style>
      <button 
        type="button" 
        class="btn btn-lg popover" 
        id="btn-popover"
        data-bs-toggle="popover"
        data-bs-placement="bottom" 
        data-bs-html="true"
        data-bs-title="${titulo}" 
        data-bs-content="${contenido}"
        min-width="${ancho}"
      >
        ${textoBoton}
      </button>
    `;
    
    this.initPopover(popoverClass);
  }

  initPopover() {
    const btn = this.querySelector("#btn-popover");
    if (btn) {
      import("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
        .then(() => {
          const popover = new bootstrap.Popover(btn, {
            placement: "bottom",
            fallbackPlacements: [],
            customClass: "custom-popover",
            trigger: 'focus',
            html: true
          });

          // Evento cuando el popover se ha mostrado
          btn.addEventListener('shown.bs.popover', () => {
            const popoverId = btn.getAttribute('aria-describedby');
            const popoverEl = document.getElementById(popoverId);
            if (popoverEl) {
              const popoverHeader = popoverEl.querySelector('.popover-header');
              if (popoverHeader) {
                // Crear y añadir botón de cierre al título
                const closeButton = document.createElement('button');
                closeButton.className = 'btn-close';
                closeButton.setAttribute('aria-label', 'Close');
                closeButton.addEventListener('click', () => {
                  popover.hide();
                });
                popoverHeader.appendChild(closeButton);
              }
            }
          });
        })
        .catch((err) => console.error("Error cargando Bootstrap:", err));
    }
  }
}

window.customElements.define("mi-popover", popover);
