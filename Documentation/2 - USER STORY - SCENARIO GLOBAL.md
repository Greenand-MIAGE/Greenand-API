# User Story - Scénario global


> **LÉGENDES**  
> :ballot_box_with_check: : fonctionnalités développées  
> :x: : fonctionnalités non développées

> ***Visiteur*** : personne qui n’est pas connectée (qu’il ait un compte ou pas).  
> ***Utilisateur non connecté*** : personne ayant un compte mais qui ne s’est pas encore authentifiée.  
> ***Utilisateur connecté*** : personne ayant un compte et étant connectée.


## Action 1 : En tant que visiteur, je peux accéder à la *Page d'accueil* 

* Le visiteur arrive sur une _Page d'accueil_ où il y a un header, un carrousel, des infos relatives au fonctionnement de l’application web et un footeur.
* Le visiteur clique sur le bouton de connexion ![boutonConnexion](https://user-images.githubusercontent.com/56674425/124838381-fee58b00-df86-11eb-9705-f613a408f450.png).
* Il arrive sur un formulaire (login @, mdp).

Il existe ensuite 2 cas de figure :
* **Il a déjà un compte**
   * Il renseigne ses identifiants et clique sur “**Se connecter**”.
   * Il est renvoyé sur la _Page d’accueil_.

* **Il n’a pas de compte**
   * Il clique sur “**Créer un compte**”. 
   * Il accède à un formulaire pour renseigner ses informations personnelles (nom*, prénom*, date de naissance*, numéro de téléphone*, adresse mail*, mdp*).
   * Il renseigne ses informations et valide son inscription en cliquant sur “**S’inscrire**”. 
   * Il est renvoyé vers la page de connexion afin de rentrer son adresse e-mail et son mot de passe. 
   * Il est renvoyé sur la _Page d’accueil_.
*\* informations obligatoires*
(passer de “**Se connecter**” à “**Créer un compte**” est possible depuis les formulaires)


## Action 2 : En tant qu’utilisateur, je peux accéder à mon profil et le modifier

* L’utilisateur clique sur “**Profil**”.
* Il accède à la Page profil où toutes ses informations sont affichées et plus bas un bouton “**Modifier**”.
* Il clique sur “**Modifier**”.
* Il accède à un formulaire où il peut modifier ses informations.
* Il clique sur “**Enregistrer les modifications**” pour les enregistrer.


## Action 3 : En tant qu’utilisateur, je peux naviguer entre les différentes pages de l’application web

* Via le Header, l’utilisateur peut s'il le souhaite accéder à l’ensemble des pages de l’application web.
* En cliquant sur le bouton ![boutonConnexion](https://user-images.githubusercontent.com/56674425/124838381-fee58b00-df86-11eb-9705-f613a408f450.png), un menu déroulant s’affiche et il clique sur le bouton qui lui convient.
* En cliquant sur “**Voir les offres**”, il est redirigé vers la page contenant la liste des offres.
* En cliquant sur "**Créer une annonce**”, il est redirigé vers le formulaire de création d’une annonce.


## Action 4 : En tant qu'utilisateur, je peux créer des terres

* L'utilisateur clique sur le bouton de connexion ![boutonConnexion](https://user-images.githubusercontent.com/56674425/124838381-fee58b00-df86-11eb-9705-f613a408f450.png).
* Un menu déroulant lui permet d’accéder à son profil en cliquant sur “**Mon profil**”.
* Il accède à une page profil où toutes ses informations sont affichées ainsi qu’un bouton en bas à gauche “**Ajouter une terre**”.
* Lorsqu’il clique dessus, un formulaire s’ouvre. 
* Il renseigne les informations sur le terrain : _adresse_, _commune_, _code postal_ et _surface_.
* Il clique sur “**Ajouter**”.


## Action 4.1 (optionnelle) : En tant qu'utilisateur, je peux accéder à ma liste d’annonce

* L'utilisateur clique sur le bouton de connexion ![boutonConnexion](https://user-images.githubusercontent.com/56674425/124838381-fee58b00-df86-11eb-9705-f613a408f450.png).
* Un menu déroulant lui permet d’accéder à son profil en cliquant sur “**Mon profil**”.
* Il accède à une page profil où toutes ses informations sont affichées ainsi qu’un bouton en bas à gauche “**Liste de mes annonces**”.
* Lorsqu’il clique dessus, une fenêtre avec la liste de ses annonces s’affiche.
* Il clique sur “**Fermer**” et il retourne sur sa page de profil.


## Action 4.2 (optionnelle) : En tant qu'utilisateur, je peux accéder à ma liste des terres

* L'utilisateur clique sur le bouton de connexion ![boutonConnexion](https://user-images.githubusercontent.com/56674425/124838381-fee58b00-df86-11eb-9705-f613a408f450.png). 
* Un menu déroulant lui permet d’accéder à son profil en cliquant sur “**Mon profil**”.
* Il accède à une page profil où toutes ses informations sont affichées ainsi qu’un bouton en bas à gauche “**Liste de mes terres**”.
* Lorsqu’il clique dessus, une fenêtre avec la liste de ses terres s’affiche.
* Il clique sur “**Fermer**” et  il retourne sur sa page de profil.


## Action 5 : En tant que visiteur ou utilisateur connecté, je peux accéder aux offres d’activités présentes sur le site

* Sur la _Page d’accueil_, via le _Header_, l’utilisateur peut accéder à la page des offres en cliquant sur “**Voir les offres**”.
* Une liste des annonces disponibles s’affiche.
* L'utilisateur peut scroller la page pour voir les annonces puis cliquer sur le bouton “**Voir l’annonce**” de l’annonce qui a suscité son intérêt.
* L’utilisateur sera donc redirigé vers une nouvelle page contenant l’intégralité de l’annonce et ses détails (photos, superficies, etc.).
* L’utilisateur peut réserver le créneau qui lui convient en cliquant sur le bouton “**Réserver**”.


## Action 6 : En tant qu’utilisateur, connecté je peux proposer des activités

* Via le _Header_, en cliquant sur “**Créer une annonce**” l’utilisateur peut ajouter une annonce d’une offre (activités, terrain).
* Il est redirigé vers un formulaire où il peut saisir toutes les informations relatives à son annonce (intitulé de l’offre, vos terrains, date de l'événement).
* Et cliquer sur “**Ajouter**” ce qui permet de publier son annonce parmi la liste des offres.


## Action 7 : En tant qu’utilisateur, connecté je peux me déconnecter

* Dans le _Header_, en cliquant sur le bouton, un menu déroulant s’affiche.
* En cliquant sur le bouton “**Se déconnecter**", il est redirigé vers la _Page d’accueil_ en étant déconnecté.