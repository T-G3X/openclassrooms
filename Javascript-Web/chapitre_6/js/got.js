// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

for (i=0; i<maisons.length; i++) {
    let identification = document.createElement("option");
    let a = maisons[i].code;
        document.getElementById("maison").appendChild(identification);
        identification.setAttribute("value",a);
        identification.id = maisons[i].code;
        identification.textContent = maisons[i].nom;
}

console.log(document.getElementById("pays");
document.getElementById("maison").addEventListener("change", function (e) {
    if (document.getElementById("personnages") != null) {
        do {
            let el = document.getElementById("personnages");
            el.remove();
        } while (document.getElementById("personnages") != null);
    }
    let nombrePersonnages = getPersonnages(e.target.value).length;
    for (i = 0 ; i < nombrePersonnages; i++){
        let resultat = document.createElement("li");
        document.getElementById("persos").appendChild(resultat).appendChild(document.createTextNode(getPersonnages(e.target.value)[i]));
        resultat.id = "personnages";
    }
});
