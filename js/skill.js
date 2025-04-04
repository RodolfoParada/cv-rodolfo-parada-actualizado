document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-bs-target');
      document.querySelectorAll('.accordion-text').forEach(text => {
        // Ocultar todos los textos
        text.style.display = 'none';
      });
      // Mostrar el texto correspondiente
      const textElement = document.querySelector(target.replace('#collapse', '#accordionText'));
      if (textElement) {
        textElement.style.display = 'block';
      }
    });
  });



   document.addEventListener("DOMContentLoaded", function() {
     // Selecciona todos los botones de acordeón
     const accordionButtons = document.getElementById(".button-accordion");

     accordionButtons.forEach(button => {
         button.addEventListener("click", function() {
             const target = document.querySelector(this.getAttribute("data-bs-target"));

             if (target) {
                 if (target.classList.contains("show")) {
                     target.classList.remove("show");
                 } else {
                     document.querySelectorAll(".accordion-collapse").forEach(collapse => collapse.classList.remove("show"));
                     target.classList.add("show");
                 }
             }
         });
     });
 });


  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-button');
    const contents = document.querySelectorAll('.accordion-text');

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        // Ocultar todos los textos
        contents.forEach(content => content.style.display = 'none');

        // Mostrar solo el que corresponde
        const targetId = ['accordionTextOne', 'accordionTextTwo', 'accordionTextThree'][index];
        const target = document.getElementById(targetId);
        if (target) {
          target.style.display = 'block';
        }
      });
    });

    // Mostrar solo el primero por defecto
    contents.forEach((content, i) => {
      content.style.display = i === 0 ? 'block' : 'none';
    });
  });


  

