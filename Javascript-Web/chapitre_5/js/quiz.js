// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];
for (x = 0; x < questions.length; x ++) {
        let y = x + 1;
        let questionElt = document.createElement("div");
        let titleElt = document.createElement("h3");
        let buttonElt = document.createElement("button");
        let lineReturnElt =  document.createElement("br");
        buttonElt.id = "button_" + x;
        buttonElt.textContent = "Afficher la réponse";
        questionElt.id = "question" + x;
        questionElt.textContent = questions[x].enonce;
        titleElt.textContent = "Question " + y + " :";
        document.getElementById("contenu").appendChild(questionElt);
        document.getElementById("contenu").appendChild(titleElt);
        document.getElementById("contenu").appendChild(questionElt);
        document.getElementById("question" + x).appendChild(lineReturnElt);
        document.getElementById("question" + x).appendChild(buttonElt);
         
    }
   
function clic0() {
        // suppression de l'affichage du bouton 
        this.style.display = 'none'; 
        // affichage de la réponse
        let reponseElt = document.createElement('div');
        reponseElt.id = "reponse_0";
        reponseElt.textContent = questions[0].reponse;
        document.getElementById('question0').appendChild(reponseElt);
}
    
function clic1() {
            // suppression de l'affichage du bouton 
            this.style.display = 'none'; 
            // affichage de la réponse
            let reponseElt = document.createElement('div');
            reponseElt.id = "reponse_1";
            reponseElt.textContent = questions[1].reponse;
            document.getElementById('question1').appendChild(reponseElt);
        
} 
    
function clic2() {
    // suppression de l'affichage du bouton
    this.style.display = 'none'; 
    // affichage de la réponse
    let reponseElt = document.createElement('div');
    reponseElt.id = "reponse_2";
    reponseElt.textContent = questions[2].reponse;
    document.getElementById('question2').appendChild(reponseElt);
}

    let bouton0Elt = document.getElementById("button_0");
    bouton0Elt.addEventListener("click", clic0, false)

    let bouton1Elt = document.getElementById("button_1");
    bouton1Elt.addEventListener("click", clic1,false)

    let bouton2Elt = document.getElementById("button_2");
    bouton2Elt.addEventListener("click", clic2, false)

    function hideshow() {
        document.getElementById('hidden-div').style.display = 'block'; 
        this.style.display = 'none';
    }