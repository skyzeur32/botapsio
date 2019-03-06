const Commande = require("./commande");
const fs = require('fs');
module.exports = class Apprendre extends Commande{


	static match(message){
		if (message.content.startsWith("!apprendre"))
			return true;

	}


	static action(message){
		
		message.reply("Ecrivez la question suivie de la réponse que le bot doit donné séparé la question et la réponse avec " +
			"=>");
		message.reply("Exemple : Quelle est la hauteur du Mont Everest ? => 8 848 mètres");
		message.reply("C'est à vous !");
		fs.writeFile("../bdd.json", "tozzzz", (err) => {if (err) console.error(err);});//Permet d'écrir dans la bdd
	}
	

}
