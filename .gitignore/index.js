const Discord = require('discord.js');
var fs = require('fs');
readline = require('readline');
const myBot = new Discord.Client();
const Google = require('./commandes/google');
const Ping = require('./commandes/ping');
const Apprendre = require('./commandes/apprendre');
myBot.login('NTI2MDI3NDcyODk5MTQ1NzI5.Dv_mPw.0CV8I50RAJ2awaomzgzN7zPZ4RY');

myBot.on('ready', function() {
	//myBot.user.setAvatar('./avatar.png').catch(console.error)
	//myBot.user.setGame('Red Dead redemption 2').catch(console.error)
});

myBot.on('guildMemberAdd', function(member) {
	member.createDM().then(function(channel){
		return channel.send('Bienvenue sur le channel ' + member.displayName)
	}).catch(console.error)
});

myBot.on('message', function(data) {

	

	var chaine = "";
	var position = -1;
	var reponse = false;
	Apprendre.parse(data)
	Google.parse(data);
	Ping.parse(data);
	// Ecriture des question dans le fichier bdd.json
	chaine = data.content;
	position = chaine.indexOf('write');
	var text;
	if(position != -1){
		var ws = fs.createWriteStream('bdd.json'); 

		ws.write(chaine); 

		//text = "";
		//text = fs.readFileSync('./bdd.json','utf8'); // recupere le contenu avant ecriture pour ne pas l'écraser
		//text += chaine + "\n";
		//fs.writeFile("./bdd.json", text, (err) => {if (err) console.error(err);});//Permet d'écrir dans la bdd
		//text = " ";
		//fs.close();
	}

	chaine = data.content;
	position = chaine.indexOf('read');
	if(position != -1){
		data.channel.send("Lecture");
		/*var tmp = fs.readFileSync('./bdd.json','utf8');
		data.channel.send(tmp);
	
		fs.close();*/
		
	}



	chaine = data.content;
	position = chaine.indexOf('Qui est tu ?');
	if(position != -1){
		data.channel.send('Je suis Chuck Norris');
		data.channel.send('Non je rigole, je suis Redouanne Faid');
		reponse = true;
	}
	
	chaine = data.content;
	position = chaine.indexOf('Tu vas bien ?');
	if(position != -1){
		data.channel.send('Oui très bien merci et toi ?');
		reponse = true;
	}
	chaine = data.content;
	position = chaine.indexOf('Ca va ?');
	if(position != -1){
		data.channel.send('Oui très bien merci et toi ?');
		reponse = true;
	}
	
	chaine = data.content;
	position = chaine.indexOf('Ca va merci');
	if(position != -1){
		data.channel.send('Parfait Que veux tu faire ?');
			reponse = true;
	}
			

	chaine = data.content;
	position = chaine.indexOf("recherche google");
	if(position != -1){
		data.channel.send('Ok, tape la commande !google et ecrit à la suite ce que tu veux que je recherche');
		reponse = true;
	}
		

	chaine = data.content;
	position = chaine.indexOf('Merci');
	if(position != -1){
		data.channel.send("Pas de soucis, content d'avoir pu t'aidé ! ")
		reponse = true;

	}

	chaine = data.content;
	position = chaine.indexOf('rien');
	if(position != -1){
		data.channel.send("Bah alors pourquoi tu me dérange !!!" + " :triumph: ");
		reponse = true;
	}

	chaine = data.content;
	position = chaine.indexOf('change de tête');
	if(position != -1){
		//myBot.user.setAvatar('./avatar.jpg').catch(console.error);
		data.channel.send("Eh voilà ma tête à était changé, si ma tête n'a pas été changé remplace la photo que tu veux avec avatar.png dans le dossier bot");
	}



/*	var rd = readline.createInterface({
	    input: fs.createReadStream('./bdd.json'),
	    output: process.stdout,
	    console: false
	});

	rd.on('line', function(line) {
	    chaine = data.content;
	    position = chaine.indexOf(line);
	    if(position != -1){
	    	data.channel.send(line);
	    }
	});
*/
	chaine = "";

	
		

});
