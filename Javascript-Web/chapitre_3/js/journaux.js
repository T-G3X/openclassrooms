// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
let id = document.getElementById('contenu');

for (i = 0; i < journaux.length; i++) {
    let lienElt = document.createElement("a");
    lienElt.textContent = journaux[i];
    lienElt.href = "http://dgjdg.html";
    document.getElementById('contenu').appendChild(lienElt);   
    document.getElementById('contenu').appendChild(document.createElement("br"));
}

