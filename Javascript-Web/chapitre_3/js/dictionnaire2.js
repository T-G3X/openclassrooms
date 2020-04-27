// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
let dlElt = document.createElement("dl");

mots.forEach(function (mot) {
    let dtElt = document.createElement("dt");
    let strongElt = document.createElement("strong");
    //strongElt.textContent = mot.terme;
    let emElt = document.createElement("em");
    // emElt.textContent = mot.terme
    emElt.textContent = mot.terme
    let ddElt = document.createElement('dd');
    ddElt.textContent = mot.definition;

    strongElt.appendChild(emElt);
    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
});

document.getElementById("contenu").appendChild(dlElt); // Ajout de la liste à la page
  