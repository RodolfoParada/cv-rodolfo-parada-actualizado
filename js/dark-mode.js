class ModoOscuro extends HTMLElement {

    constructor() {
        super();
        this.isDarkMode = false;
        this.tooltipInstance = null;
    }

    connectedCallback() {
        this.innerHTML = `
        <button class="toggle-button btn btn-outline-light ms-3"
            data-bs-toggle="tooltip"
            title="Modo Oscuro">🌙</button>
        `;

        const toggleButton = this.querySelector('.toggle-button');

        const savedMode = localStorage.getItem('modo-oscuro');
        if (savedMode === 'true') {
            this.isDarkMode = true;
            document.body.classList.add('dark-mode');
            toggleButton.textContent = '☀️';
            toggleButton.title = 'Modo Claro';
        }

        toggleButton.addEventListener('click', () => {
            this.isDarkMode = !this.isDarkMode;
            localStorage.setItem('modo-oscuro', this.isDarkMode);

            if (this.isDarkMode) {
                document.body.classList.add('dark-mode');
                toggleButton.textContent = '☀️';
                toggleButton.title = 'Modo Claro';
            } else {
                document.body.classList.remove('dark-mode');
                toggleButton.textContent = '🌙';
                toggleButton.title = 'Modo Oscuro';
            }
        });
    }
}

customElements.define("mi-modo-oscuro", ModoOscuro);
