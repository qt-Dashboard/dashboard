
function getIcon(categorie1, categorie2, categorie3) {
	if (categorie3 === "Coiffeurs") {
		return "saloon.png";
	} else if (categorie3 === "Caf\u00e9s-Bars-Brasseries") {
		return  "bars.png";
	} else if (categorie3 === "Habillement") {
		return  "clothings.png";
	} else if (categorie3 === "Bijouteries") {
		return  "jewelry.png";
	} else if (categorie3 === "Ameublement-D\u00e9coration") {
		return  "furniture-stores.png";
	} else if (categorie3 === "Librairies-Papeteries-Presse") {
		return  "libraries.png";
	} else if (categorie3 === "Cadeaux ou jouets") {
		return  "gifts-flowers.png";
	} else if (categorie3 === "Agences de voyages") {
		return  "travel.png";
	} else if (categorie3 === "Epiceries, sup\u00e9rettes et grande distribution") {
		return  "shopping.png";
	} else if (categorie3 === "Aide \u00e0 l'emploi et d\u00e9veloppement \u00e9conomique") {
		return  "employment.png";
	} else if (categorie3 === "Musique") {
		return  "musical-instruments.png";
	} else if (categorie3 === "Arbres remarquables") {
		return  "marker-new1_12.png";
	} else if (categorie3 === "Bureaux de vote") {
		return  "government.png";
	} else if (categorie3 === "Sculptures de m\u00e9tal") {
		return  "museums.png";
	} else if (categorie3 === "Equipements sportifs, accès réservé") {
		return  "sporting-goods.png";
	} else if (categorie3 === "Parcs") {
		return  "parks.png";
	} else if (categorie3 === "Restauration-Bars-Tabacs") {
		return  "restaurants.png";
	} else if (categorie3 === "Agences immobilières") {
		return  "real-estate.png";
	} else if (categorie3 === "Animalerie-Toilettage") {
		return  "pets.png";
	} else if (categorie3 === "Stations services-Lavage") {
		return  "automotive.png";
	} else if (categorie3 === "Marchés") {
		return  "miscellaneous-for-sale.png";
	} else if (categorie3 === "Centres, cliniques et hôpitaux") {
		return  "health-medical.png";
	} else if (categorie3 === "Pharmacies") {
		return  "medical.png";
	} else if (categorie3 === "Parkings voitures sous-sol") {
		return  "automotive.png";
	}
	
	if (categorie2 === "Entreprises TIC + de 50 salari\u00e9s") {
		return  "professional.png";
	} else if (categorie2 === "Education") {
		return  "schools.png";
	} else if (categorie2 === "Transports") {
		return  "transport.png";
	} else if (categorie2 === "Hôtels et chambres d'hôtes") {
		return  "hotels.png";
	} else if (categorie2 === "Petite Enfance") {
		return  "play-schools.png";
	} else if (categorie3 === "Cyber cité") {
		return  "internet.png";
	}
	
	return "default.png";
}