let boutonElt = document.getElementById("submito");
let text ="";
let mdpass1;
let mdpass2;
let regexMdp;
let resultLength1;
let testLongueur;
// contrôle de la longueur du mot de passe initial (mini 6 caratères) et contenance de chiffre
document.getElementById("mdp1").addEventListener("input", function(e) {
    mdpass1 = e.target.value;
    regexMdp = /\d/;
    resultLength1 = mdpass1.length;
    testLongueur = (!regexMdp.test(mdpass1));
})
document.getElementById("mdp2").addEventListener("input", function(e) {
    mdpass2 = e.target.value;
})

function testPassword(){
    if (resultLength1 >= 6 && testLongueur === false && mdpass1 === mdpass2) {
        text = "mot de passe valide";
    } else if (resultLength1 >=6 && testLongueur === false && mdpass1 != mdpass2) {
        text = "les mots de passe sont différents !";
    } else if (resultLength1 >= 6 && testLongueur === true) {
        text = "le mot de passe doit comporter au moins un chiffre !"
    } else {
        text =  "le mot de passe est trop court ! ( 6 caratères mini)"
    }
}


function showText() {
    document.getElementsByTagName("infoMdp").innerText = "";
    if (document.getElementById("infoMdp").innerText === "") {
        testPassword();
    } else {
        document.getElementById("infoMdp").innerText = "";
        testPassword();
    }
    document.getElementById("infoMdp").appendChild(document.createTextNode(text));
}

boutonElt.addEventListener("click", showText);

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
})
    
