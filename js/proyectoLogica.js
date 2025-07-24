class proyectoLogica extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="mb-5">
        <h2>Proyectos Lógica</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">Proyecto Lógica</h5>
                <p class="card-text">Aplicación que simula la interfaz de Netflix con HTML, CSS y JS.</p>
              </div>
            </div>
          </div>
          <!-- Agrega más tarjetas aquí -->
          
        </div>
      </section>
    `;
  }
}

customElements.define('proyecto-logica', proyectoLogica);
