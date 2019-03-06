const Commande = require('./commande');
module.exports = class Ping extends Commande{

	static match(message){
		if (message.content.startsWith("!ping"))
			return true;

	}


	static action(message){
		let recherche = message.content.split(' ');

		recherche.shift();
		message.reply("pong");
	}

}
