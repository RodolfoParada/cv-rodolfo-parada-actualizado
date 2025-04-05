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
                    min-width: ${ancho} !important; /* Usa el valor definido en el atributo */
                    max-width: 100vw; /* Garantiza que no sobrepase el tamaño de la ventana */
                    width: ${ancho} !important; /* Controla el ancho */
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
        // Aseguramos que Bootstrap está disponible antes de usarlo
        import("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
            .then(() => {
                new bootstrap.Popover(btn, {
                    placement: "bottom",
                    fallbackPlacements: [],
                    customClass: "custom-popover",
                    trigger: 'focus'  // Cambié el trigger a 'focus' para controlar manualmente el cierre
                });
        // Agregar un botón de cierre personalizado al contenido del popover
        const popoverContent = btn.getAttribute("data-bs-content");
        const closeButton = `
        <button type="button" class="btn-close" aria-label="Close"></button>
        `;

        // Actualizar el contenido del popover para incluir el botón de cierre
        btn.setAttribute("data-bs-content", closeButton + popoverContent);

        // Escuchar el clic en el botón de cierre para cerrar el popover
        const closeBtn = btn.querySelector(".btn-close");
        closeBtn.addEventListener("click", () => {
            popover.hide(); // Cerrar el popover cuando se presiona el botón
        });
          })
          .catch((err) => console.error("Error cargando Bootstrap:", err));
    }
}
}


window.customElements.define("mi-popover",popover);