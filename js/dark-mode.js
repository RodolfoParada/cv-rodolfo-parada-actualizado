class ModoOscuro extends HTMLElement {
  constructor() {
    super();
    this.isDarkMode = false;
    this.tooltipInstance = null;
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="css/dark-mode.css" />
      <button class="toggle-button btn btn-outline-light ms-3"
        data-bs-toggle="tooltip"
        title="Modo Claro">🌙</button>
    `;

    const toggleButton = this.querySelector('.toggle-button');

    // Inicializar tooltip al montar el componente
    this.tooltipInstance = new bootstrap.Tooltip(toggleButton);

    toggleButton.addEventListener('click', () => {
      this.isDarkMode = !this.isDarkMode;
      this.toggleDarkMode();
    });
  }

  toggleDarkMode() {
    const toggleButton = this.querySelector('.toggle-button');

    // Eliminar el tooltip antiguo antes de cambiar
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();
    }

    if (this.isDarkMode) {
      // Activar modo oscuro
      document.body.classList.add('dark-mode');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';

      toggleButton.textContent = '☀️';
      toggleButton.setAttribute('title', 'Modo Oscuro');
      toggleButton.style.color = '#333';
      toggleButton.style.backgroundColor = '#333';
    } else {
      // Activar modo claro
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      toggleButton.textContent = '🌙';
      toggleButton.setAttribute('title', 'Modo Claro');
      toggleButton.style.color = '#95AEE9';
      toggleButton.style.backgroundColor = '#95AEE9';
    }

    // Vuelves a inicializar el tooltip actualizado
    this.tooltipInstance = new bootstrap.Tooltip(toggleButton);
  }
}

customElements.define("mi-modo-oscuro", ModoOscuro);
