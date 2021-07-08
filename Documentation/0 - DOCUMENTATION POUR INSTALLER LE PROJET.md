# Documentation pour installer le projet


## Prérequis

1. Le lien de notre [GitHub GreenAnd-API](https://github.com/Greenand-MIAGE/Greenand-API).

1. Un logiciel d'édition de code/texte : **Visual Studio Code**

1. Avoir la dernière version de NODE.JS installé depuis le [site officiel](https://nodejs.org/fr/download/).

1. Un logiciel de Base de donnée : **MongoDB**

1. Un logiciel de Requêtage : **Postman**

## Étape 1 - Installation de l'environnement

Dans votre terminal d'éditeur de code ou dans un terminal Windows, tapez :
1. _git clone https://github.com/Greenand-MIAGE/Greenand-API --> récupère le projet Git à l'emplacement où vous vous situez.

1. _npm install -g npm_ --> installe NodeJS.

1. _npm install -g typescript_ --> installe TypeScript.

1. _npm install -g ts-node_ --> installe TypeScript (si la commande précédente ne marche pas).

1. Crée un compte PostMan (https://www.postman.com) et installer PostMan (https://www.postman.com/downloads/) 
    ![image](https://user-images.githubusercontent.com/52489318/124906236-21a78c00-dfe7-11eb-8fb2-b851ee75c75a.png)
    ![Capture d’écran 2021-07-08 à 12 23 40](https://user-images.githubusercontent.com/52489318/124906491-67645480-dfe7-11eb-8ea5-6259b8d37a24.png)

1. Crée un compte MongoDB (https://www.mongodb.com) et installer MongoDB Compass (https://www.mongodb.com/try/download/compass)
![Capture d’écran 2021-07-08 à 12 26 02](https://user-images.githubusercontent.com/52489318/124906955-e35e9c80-dfe7-11eb-9328-4500af971d7e.png)
![Capture d’écran 2021-07-08 à 12 28 12](https://user-images.githubusercontent.com/52489318/124907052-04bf8880-dfe8-11eb-8559-66005b9321c6.png)
![Capture d’écran 2021-07-08 à 12 31 28](https://user-images.githubusercontent.com/52489318/124907476-81526700-dfe8-11eb-9c8b-9c1872eb5eea.png)



## Étape 2 - Préparation

Dans votre terminal d'éditeur de code ou dans un terminal Windows, tapez :
1. _git checkout Project_ --> changer de branche vers Project.

1. _git pull_ --> récupère la dernière version de branche où vous vous situez.

Configuration du MongoDB Compass : 
1. Connecter vous sur le site MongoDB
1. Crée une base de donnée utilisateur en cliquant sur ces boutons (Database Access puis add new database user) : 
![Capture d’écran 2021-07-08 à 12 41 38](https://user-images.githubusercontent.com/52489318/124909135-63860180-dfea-11eb-815f-2eec4d419e3c.png)
1. Choissisez "Password", écrire un nom d'user, definir un mot de passe puis cliquer sur "Add User"  puis ouvrez l'application MongoDB Compass et connectez-vous :
![Capture d’écran 2021-07-08 à 12 46 41](https://user-images.githubusercontent.com/52489318/124909856-3be36900-dfeb-11eb-82da-bda2eac1d706.png)

Ouvrez l'application PostMan, puis connectez-vous : 
1. Crée un workspace et nommez la Greenand
![Capture d’écran 2021-07-08 à 12 57 46](https://user-images.githubusercontent.com/52489318/124910785-42261500-dfec-11eb-892e-d0a958d24fda.png)

## Étape 3 - Lancer l'API Greenand

Dans votre terminal d'éditeur de code ou dans un terminal Windows à la racine du projet, tapez :
1. _npm i_ --> récupère les dernières commandes de NodeJS et compile.

1. _npm run dev --> lance le serveur NodeJS. 
