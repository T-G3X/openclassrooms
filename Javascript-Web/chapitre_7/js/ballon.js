let ballon = document.getElementById("ballon");
let cadre = document.getElementById("cadre");
let xBlocLeft = parseFloat(getComputedStyle(ballon).left);
let xBlocRight =  parseFloat(getComputedStyle(ballon).right);
let xMaxRight = parseFloat(getComputedStyle(cadre).width);
let vitesse = 6;
let animationD = null;
let animationG = null;
let largeurBloc = parseFloat(getComputedStyle(ballon).width);
let direction = 1;


// Déplacement vers la droite
function deplacerBlocD() {
    direction = 1;
    xBlocLeft = parseFloat(getComputedStyle(ballon).left);
    xBlocRight =  parseFloat(getComputedStyle(ballon).right);
    xMaxRight = parseFloat(getComputedStyle(cadre).width);
    if (xBlocLeft + largeurBloc <= xMaxRight) {
        ballon.style.left = (xBlocLeft + vitesse) + "px";
        animationD = requestAnimationFrame(deplacerBlocD);    
    } else { 
        cancelAnimationFrame(deplacerBlocD);
        animationG = requestAnimationFrame(deplacerBlocG);
    }  
}

// Déplacement vers la gauche
function deplacerBlocG(){
    direction = -1;
    xBlocLeft = parseFloat(getComputedStyle(ballon).left);
    xBlocRight =  parseFloat(getComputedStyle(ballon).right);
    xMaxRight = parseFloat(getComputedStyle(cadre).width);
       if (xBlocRight + largeurBloc >= - xMaxRight && xBlocRight<0) {
        
           ballon.style.left =  - (xBlocRight + vitesse) + "px";
           animationG = requestAnimationFrame(deplacerBlocG);
        } else {
        cancelAnimationFrame(animationG);
        animationD = requestAnimationFrame(deplacerBlocD);
        }
}

//  bouton démarrer
document.getElementById("demarrer").addEventListener("click", function() {
    document.getElementById("demarrer").disabled = true ;
    document.getElementById("arreter").disabled = false;
    if (direction === 1) {
        animationD = requestAnimationFrame(deplacerBlocD);
    } else if (direction === -1) {    
        animationG = requestAnimationFrame(deplacerBlocG);
           
   
    }
})

// bouton arrêt
document.getElementById("arreter").addEventListener("click", function() {
    document.getElementById("arreter").disabled = true;
    document.getElementById("demarrer").disabled = false;
    cancelAnimationFrame(animationD);
    cancelAnimationFrame(animationG);
})
