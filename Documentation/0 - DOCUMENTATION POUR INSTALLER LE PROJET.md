# Documentation pour installer le projet


## Prérequis

1. Le lien de notre [GitHub GreenAnd-API](https://github.com/Greenand-MIAGE/Greenand-API).

1. Le lien de notre [GitHub GreenAnd-FRONT](https://github.com/Greenand-MIAGE/Greenand-FRONT).

1. Un logiciel d'édition de code/texte : **Visual Studio Code**.

1. Avoir la dernière version de NODE.JS installé depuis le [site officiel](https://nodejs.org/fr/download/).

1. Un logiciel de Base de donnée : **MongoDB**.

1. Un logiciel de Requêtage : **Postman**.


## Étape 1 - Installation de l'environnement

1. Créer un compte _PostMan_ et installer _PostMan_ depuis le [site officiel](https://www.postman.com/downloads/) :

![PostManDdl](https://user-images.githubusercontent.com/52489318/124906491-67645480-dfe7-11eb-8ea5-6259b8d37a24.png)

1. Créer un compte _MongoDB_ et installer la dernière **version stable** de _MongoDB Compass_ depuis le [site officiel](https://www.mongodb.com/try/download/compass) : 

![MongoDBCompassDdl/VersionStable](https://user-images.githubusercontent.com/52489318/124907476-81526700-dfe8-11eb-9c8b-9c1872eb5eea.png)


## Étape 2 - Préparation du code

Dans votre terminal d'éditeur de code ou dans un terminal Windows, tapez :
1. _git clone https://github.com/Greenand-MIAGE/Greenand-API --> récupère le projet Git à l'emplacement où vous vous situez.

1. _git clone https://github.com/Greenand-MIAGE/Greenand-FRONT  --> récupère le projet Git à l'emplacement où vous vous situez.

1. _npm install -g npm_ --> installe NodeJS.

1. _npm install -g typescript_ --> installe TypeScript.

1. _npm install -g ts-node_ --> installe TypeScript (si la commande précédente ne marche pas).


## Étape 3 - Mise en place de votre git

Dans votre terminal d'éditeur de code ou dans un terminal Windows, tapez :
1. _git checkout Project_ --> changer de branche vers Project.

1. _git pull_ --> récupère la dernière version de branche où vous vous situez (à faire sur les 2 projets).

## Étape 4 - Configuration du MongoDB Compass

1. Connectez-vous sur le site MongoDB.

1. Créez une base de donnée utilisateur en cliquant sur ces boutons : 
    1. `Database Access`
    1. `ADD NEW DATABASE USER`
![CréationBaseMongoDB](https://user-images.githubusercontent.com/52489318/124909135-63860180-dfea-11eb-815f-2eec4d419e3c.png)

1. Choisissez :
    1. `Password`
    1. Écrire un nom d'user
    1. Définir un mot de passe
    1. Cliquez sur `Add User`
    1. Ouvrez l'application **MongoDB Compass** et connectez-vous :
![ConfigurationBaseMongoDB](https://user-images.githubusercontent.com/52489318/124909856-3be36900-dfeb-11eb-82da-bda2eac1d706.png)

1. Ouvrez l'application **PostMan**, puis connectez-vous : 
    1. Créez ensuite un workspace
    1. Nommez-la **Greenand**
![ConfigurationPostMan](https://user-images.githubusercontent.com/52489318/124910785-42261500-dfec-11eb-892e-d0a958d24fda.png)


## Étape 5 - Lancer le site Greenand

Dans votre terminal d'éditeur de code ou dans un terminal Windows à la racine du projet API, tapez :
* _npm i_ --> récupère les dernières commandes de NodeJS et compile.
* _npm run dev_ --> lance le serveur NodeJS. 

Dans votre terminal d'éditeur de code ou dans un terminal Windows à la racine du projet FRONT, tapez :
* _npm i_ --> récupère les dernières commandes de NodeJS et compile.
* _npm start_ --> lance la partie client du site


## Étape 6 - Fermer le site Greenand


1. Pour arrêter le serveur, appuyez sur les touches : `Ctrl + C` et confirmez avec la touche **"o"**.

1. Enfin, fermez tous vos terminaux avec en tapant **"exit"**.