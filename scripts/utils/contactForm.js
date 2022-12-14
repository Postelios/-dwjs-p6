// Ouverture du formulaire et recupération des données dans la console 

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";

  const form = document.querySelector("form");
  const firstName = document.querySelector('#firstName');
  firstName.focus();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let fields = document.querySelectorAll("input");
    let response = "Form information: \n";

    fields.forEach((i) => {
      response += `${i.name}: ${i.value} \n`;
    });
    console.log(response);
    form.reset();
    closeModal();
  });
}


// Fermeture du formulaire 

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}


// Accesibilité du formulaire avec le clavier

function focusForm() {
  const form = document.querySelector("form");
  const focusableElements = '.close-modal,input,textarea,.submit_button';
  const firstFocusableElement = document.querySelectorAll(focusableElements)[0];
  // Focus du 1er element
  console.log(firstFocusableElement);
  const focusableContent = document.querySelectorAll(focusableElements);
  console.log(focusableContent);
  // Focus du dernier element
  const lastFocusableElement = focusableContent[focusableContent.length - 1];
  console.log(lastFocusableElement);

  // On ecoute les touches du clavier
  form.addEventListener('keydown', function (e) {
    
    let isTabPressed = e.key === 'Tab';
    console.log(isTabPressed, 'key');

    // Ferme le formulaire avec la touche Echap
    if (e.key == "Escape") {
      closeModal();
    }

    // Touche entrée valide uniquement pour la croix et le button submit
       if (e.target != lastFocusableElement && e.target != firstFocusableElement && e.key == 'Enter') {
       e.preventDefault();
     }

    // Fin de l'execution si touche différent de Tab
    if (!isTabPressed) {
      return;
    }

    //  Touche du clavier Tab
    if (KeyboardEvent == "Tab") { 
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // Ajout du focus pour le dernier élément
      }
      
    } else { 
      if (document.activeElement === lastFocusableElement) { 
        firstFocusableElement.focus(); // Ajout du focus pour le premier élément 
        e.preventDefault();
      }
    }
  });
};














