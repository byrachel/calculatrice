
/************************/
/****** Variables *******/
/************************/

let operation;
let firstNumber;
let secondNumber;
let result;

/************************/
/****** Fonctions *******/
/************************/

function numbersChoice() {
	firstNumber = prompt('Quel est votre premier chiffre ?');
	secondNumber = prompt('Et le second chiffre ?');
}

/************************/
/******** Boucle ********/
/************************/

do {

	operation = prompt('Quelle opération souhaitez-vous réaliser ? \n (Saisir "stop" pour arrêter)');

	switch(operation) {

/******** Addition ********/

		case '+' :
			numbersChoice();
			result = parseInt(firstNumber) + parseInt(secondNumber);
			alert('Le résultat de ' + firstNumber + ' + ' + secondNumber + ' est : ' + result);
			break;

/******** Soustraction ********/

		case '-' :
			numbersChoice();
			result = parseInt(firstNumber) - parseInt(secondNumber);
			alert('Le résultat de ' + firstNumber + ' - ' + secondNumber + ' est : ' + result);
			break;

/******** Multiplication ********/

		case '*' :
			numbersChoice();
			result = parseInt(firstNumber) * parseInt(secondNumber);
			alert('Le résultat de ' + firstNumber + ' * ' + secondNumber + ' est : ' + result);
			break;

/******** Division ********/

		case '/' :
			numbersChoice();
			result = parseInt(firstNumber) / parseInt(secondNumber);
			alert('Le résultat de ' + firstNumber + ' / ' + secondNumber + ' est : ' + result);
			break;

/******** Quitter ********/

		case 'stop' :
			alert('A bientôt!');
			break;

/******** En cas de saisie incorrecte ********/

		default :
			alert('Erreur : Veuillez saisir uniquement des chiffres.');
			break;
		}
	}

	while(operation != 'stop');