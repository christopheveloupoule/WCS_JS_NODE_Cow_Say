const userName = 'Christophe Velou';
const campusName = 'WCS Toulouse';


const myInfos = () => {
    console.log(`Hi my name is ${userName} from ${campusName}`);
};

module.exports = myInfos;

// or cowsay.think()

/*Créer un fichier appelé informatio
Créer un objet avec ton nom et ton campus
Exporte l'objet en utilisant module.exports
Dans index.js, importer l'objet depuis information.
Installe le module cowsay npm install cowsay et lis la documentation sur comment l'utiliser
Exécute ton fichier et assure-toi que nous pouvons voir la vache avec le message
Assure-toi que tu as un fichier .gitignore et télécharge ton projet sur GitHub. Partage le lien du repo comme solution du défi*/