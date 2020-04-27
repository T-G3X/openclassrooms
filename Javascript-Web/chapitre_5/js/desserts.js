let nomDessert ="";
function clic() {
nomDessert = window.prompt("Entrez le nom d'un dessert");
document.getElementById("desserts").insertAdjacentHTML("afterBegin", "<li id= dessert>" + nomDessert);
let donnee = document.getElementById("dessert");
console.log(donnee.textContent);
donnee.onclick = function() {
    donnee.removeChild(donnee.childNodes[0]);
    donnee.remove("li");
    nomDessert = window.prompt("Entrez le nom du nouveau dessert");
document.getElementById("desserts").insertAdjacentHTML("afterBegin", "<li id= dessert>" + nomDessert);
}
}

var boutonElt = document.querySelector("button");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic)

document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});
