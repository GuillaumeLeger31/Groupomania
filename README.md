# Création d'un réseau social d'entreprise pour Groupomania. (projet OpenClassrooms)

## prérequis

* Installer Node.js
* Installer Vue.js
* Installer MySQL


## Installation et démarrage du Backend

* Ouvrez votre terminal
* Allez dans le dossier backend : `cd API_Groupomania\api` .
* Installez toutes les dépendances du projet : `npm install`.
* Démarrez le serveur Node.js : `nodemon server`.


## Installation et démarrage de la BDD MySQL

* Ouvrez votre terminal
* Connectez-vous à MySQL : `mysql -h localhost -u root -p`.
* Créez une base de données nommé `groupomania`.
* Executez ensuite dans le backend la commande `sequelize db:migrate`.


## Installation et démarrage du Frontend

* Ouvrez votre terminal
* Allez dans le dossier frontend : `cd VUE_Groupomania\app` .
* Installez toutes les dépendances du projet : `npm install`.
* Démarrez l'application : `npm run serve`.

## Testez l'application
* Ouvrez votre navigateur et allez sur : `http://localhost:8080/`.
