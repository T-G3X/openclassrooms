// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

let selectedText;
let nombreFiltre;

document.getElementById("pays").addEventListener("input",function(e) {
    selectedText = selectedElt(listePays, e.target.value);
    nombreFiltre = selectedElt(listePays, e.target.value).length; 
    suppression();
    creation();
    function selectedElt(arr, requete) {
        return arr.filter(function (el) {
          return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
        })
    }
}) 


function creation() {
    for (i = 0; i< nombreFiltre; i++) {
        z = nombreFiltre;
        let suggest = document.getElementById("suggestions").appendChild(document.createElement("div"));
        suggest.id = "toto";
        document.getElementsByTagName("div")[i+1].setAttribute("class", "suggestion");
        suggest.appendChild(document.createTextNode(selectedText[i]));
    }
    
}
 

function suppression() {
    if (document.getElementById("toto") !== null){
        do {
            document.getElementById("toto").remove();
        } while (document.getElementById("toto") !== null)
    }
}

