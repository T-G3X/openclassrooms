document.getElementById("contenu").insertAdjacentHTML("beforeBegin", "Informations sur l'élément :"); 
document.getElementById("contenu").insertAdjacentHTML("beforeBegin", "<ul>" + "<li id='hauteur'></li>" + "<li id='longueur'></li>"); 

let dimElt = document.getElementById("contenu");
let heightElt= "Hauteur : " + dimElt.offsetHeight + "px";
let widthElt = "Longueur : " + dimElt.offsetWidth + "px";
let heightText = document.createTextNode(heightElt);
let widthText = document.createTextNode(widthElt);
document.getElementById("hauteur").appendChild(heightText);
document.getElementById("longueur").appendChild(widthText);

