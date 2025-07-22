class ModoOscuro extends HTMLElement {
  constructor() {
    super();
    this.isDarkMode = false;
    this.tooltipInstance = null;
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    
      <button class="toggle-button btn btn-outline-light ms-3"
        data-bs-toggle="tooltip"
        title="Modo Claro">🌙</button>
    `;

    const toggleButton = this.querySelector('.toggle-button');

    // Leer estado guardado en localStorage
    const savedMode = localStorage.getItem('modo-oscuro');
    if (savedMode === 'true') {
      this.isDarkMode = true;
      this.toggleDarkMode();
    }

    this.tooltipInstance = new bootstrap.Tooltip(toggleButton);

    toggleButton.addEventListener('click', () => {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('modo-oscuro', this.isDarkMode);
      this.toggleDarkMode();
    });
  }

  toggleDarkMode() {
    const toggleButton = this.querySelector('.toggle-button');

    // Eliminar tooltip anterior (necesario para que actualice el title)
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();
    }

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.removeAttribute('style'); // limpiar estilo en línea si existía
      toggleButton.textContent = '☀️';
      toggleButton.setAttribute('title', 'Modo Oscuro');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.removeAttribute('style'); // limpiar estilos anteriores

      // Establecer explícitamente el color de fondo del modo claro si es necesario
      document.body.style.backgroundColor = '#95AEE9';
      document.body.style.color = 'black';

      toggleButton.textContent = '🌙';
      toggleButton.setAttribute('title', 'Modo Claro');
    }

    // Volver a crear el tooltip con el nuevo título
    this.tooltipInstance = new bootstrap.Tooltip(toggleButton);
  }
}

customElements.define("mi-modo-oscuro", ModoOscuro);
