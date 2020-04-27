let ballon = document.getElementById("ballon");
let cadre = document.getElementById("cadre");
let vitesse = 4;
// Conversion en nombre du diamètre du ballon (valeur de la norme "XXpx" )
let largeurBloc = parseFloat(getComputedStyle(ballon).width);
//let animationId = null;


// Déplacement vers la droite
function deplacerBlocDroite() {
    let xBloc = parseFloat(getComputedStyle(ballon).left);
    // Conversion en nombre de la largeurdu cadre (valeur de la forme "XXpx")
    let xMaxRight = parseFloat(getComputedStyle(cadre).width);
    // console.log("déplacement vers la gauche " , xBloc);
    // console.log("largeur du bloc" ,largeurBloc);
    if (xBloc + largeurBloc <= xMaxRight) {
    // Déplacement du bloc
    ballon.style.left = (xBloc + vitesse) + "px";;
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBlocDroite);
    } else {
    // Annulation de l'animation
    // console.log("fin du déplacement vers la droite");
    requestAnimationFrame(deplacerBlocGauche);  

        }
} 

//Déplacement vers la gauche


function deplacerBlocGauche() {
    // console.log("appel de la fonction pour aller vers la gauche");
    let xBloc = parseFloat(getComputedStyle(ballon).right);
    // Conversion en nombre de la largseurdu cadre (valeur de la forme "XXpx")
    let xMaxLeft = parseFloat(getComputedStyle(cadre).width);
        //console.log("déplacement vers la droite " , xBloc);
        //console.log("largeur du bloc" ,largeurBloc);
        if ((xBloc + largeurBloc) >= -xMaxLeft && xBloc < 0 ) {
        // Déplacement du bloc
        //console.log("déplacement du bloc à gauche");
        ballon.style.left = - (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        requestAnimationFrame(deplacerBlocGauche);
        } else {
        // Annulation de l'animation
        //cancelAnimationFrame(deplacerBlocGauche); 
        requestAnimationFrame(deplacerBlocDroite);      
            }
    } 

// requestAnimationFrame(deplacerBlocGauche);
// requestAnimationFrame(deplacerBlocDroite); // début de l'animation

//Bouton démarrer
document.getElementById("demarrer").addEventListener("click", function() {
    document.getElementById("demarrer").disabled = true ;
    document.getElementById("arreter").disabled = false;
    //requestAnimationFrame(deplacerBlocDroite)
    requestAnimationFrame(deplacerBlocGauche); 
    console.log("démarrage")
})


document.getElementById("arreter").addEventListener("click", function() {
    document.getElementById("arreter").disabled = true;
    document.getElementById("demarrer").disabled = false;
    console.log(deplacerBlocDroite);
    cancelAnimationFrame(deplacerBlocGauche); 
    cancelAnimationFrame(deplacerBlocDroite);
    console.log("Arret");
})

