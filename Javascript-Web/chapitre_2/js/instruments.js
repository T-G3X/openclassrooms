function infosLiens() {
	let link = document.getElementsByTagName("a");
	let numberOfLink = link.length;
	let lastLink = (link.length - 1)
	console.log(numberOfLink);
	if (numberOfLink > 0){
		console.log(link[0].getAttribute("href"));
		console.log(link[lastLink].getAttribute("href"));
	}	
}
function possede(instrument, type) {
	if (document.getElementById(instrument) === null) {
	console.log("Aucun élément ne possède l'identifiant " + instrument);
	} else {
	console.log(document.getElementById(instrument).classList.contains(type));
	}
}
infosLiens();
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur