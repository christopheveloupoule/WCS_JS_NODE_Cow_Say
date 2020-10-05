const myInformations = require('./information.js');

myInformations();

const userName = 'Christophe Velou';
const campusName = 'WCS Toulouse';

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `I'm ${userName} from ${campusName}`,
}));



