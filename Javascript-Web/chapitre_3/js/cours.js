var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément
var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément
var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, 
    document.getElementById("php"));
// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterbegin", 
    '<li id="javascript">JavaScript</li>');
    var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));
// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));
document.getElementById('contenu').insertAdjacentHTML("beforeend", 
'<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète');