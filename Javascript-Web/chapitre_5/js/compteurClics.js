let x =0;

function onClic() {
    x = x + 1;
    compteurClics.textContent = x;
};

function desactivate() {
    boutonElt.removeEventListener("click", onClic);
};

let boutonElt = document.getElementById("clic");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", onClic);


let desactivateCount = document.getElementById("desactiver");
//suppression de l'évènement "click"
desactivateCount.addEventListener("click", desactivate);



