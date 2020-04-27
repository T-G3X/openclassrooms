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
let g = document.createElement("dl");
g.setAttribute("id","toto");

document.getElementById('contenu').appendChild(g);

for (i=0; i< mots.length; i++) {
    let termeElt = document.createElement("strong");
    termeElt.textContent = mots[i].terme;
   
    document.getElementById('toto')
        .appendChild(document.createElement("dt"))
        .appendChild(document.createElement("strong"))
        .appendChild(document.createTextNode(termeElt.textContent));
    document.getElementById('toto').appendChild(document.createElement("dd")).appendChild(document.createTextNode(termeElt.textContent));
    
}
