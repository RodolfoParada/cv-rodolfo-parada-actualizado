// js/proyectos-init.js
// Esta función inicializa la vista de proyectos. Exponerla en window para llamarla desde el router.
window.initializeProyectosView = function initializeProyectosView() {
    // Seguridad: si no está el contenedor, salir sin errores
    const tabsContainer = document.getElementById('categoriaTabs');
    const componentes = document.querySelectorAll("#contenedorCategoria .proyecto");

    if (!tabsContainer || componentes.length === 0) return;

    const botones = document.querySelectorAll("#categoriaTabs .nav-link");

    botones.forEach((btn) => {
        btn.addEventListener("click", () => {
            botones.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const categoria = btn.dataset.categoria;
            componentes.forEach((comp) => {
                comp.style.display =
                    comp.tagName.toLowerCase() === `proyecto-${categoria}`
                        ? "block"
                        : "none";
            });
        });
    });

    // Carrusel (scroll)
    const scrollAmount = 150;
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    if (scrollLeftBtn) scrollLeftBtn.addEventListener('click', () => {
        tabsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    if (scrollRightBtn) scrollRightBtn.addEventListener('click', () => {
        tabsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // (Opcional) Si quieres ejecutar alguna cosa extra al cargar:
    // ejemplo: asegurar primera pestaña activa y componente mostrado
    const activo = document.querySelector("#categoriaTabs .nav-link.active") || botones[0];
    if (activo) activo.click();
};
