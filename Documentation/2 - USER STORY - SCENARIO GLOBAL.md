# User Story - Scénario global


> **LÉGENDES**  
> :ballot_box_with_check: : fonctionnalités développées  
> :x: : fonctionnalités non développées

> ***Visiteur*** : personne qui n’est pas connectée (qu’il ait un compte ou pas).  
> ***Utilisateur non connecté*** : personne ayant un compte mais qui ne s’est pas encore authentifiée.  
> ***Utilisateur connecté*** : personne ayant un compte et étant connectée.


## Action 1 : En tant que visiteur je peux accéder à la *Page d'accueil* 

* Le visiteur arrive sur une *Page d'accueil* où il y a un header, un carrousel, une barre de recherche pour les annonces et un footeur.


## Action 2 : En tant que visiteur je peux me connecter 

* Le visiteur clique sur le bouton “**Connexion**”.
* Il arrive sur un formulaire (@, mdp).

Il existe ensuite 2 cas de figure (aller-retour possible) :
* **Il a déjà un compte :** 
   * Il renseigne ses identifiants et clique sur “**Se connecter”**.
   * Il est renvoyé sur la *Page d’accueil*.

* **Il n’a pas de compte :** 
   * Il clique sur **“Créer un compte”**. 
   * Il accède à un formulaire pour renseigner ses informations personnelles (bio, nom\*, prénom\*, date de naissance\*, numéro de téléphone\*, adresse mail\*, mdp\*).
   * Il renseigne ses informations et valide son inscription en cliquant sur **“S’inscrire”**.
   * Il est renvoyé sur la *Page d’accueil*.

*\* informations obligatoires*


## Action 3 : En tant qu’utilisateur je peux accéder à mon profil et le modifier 

* L’utilisateur clique sur **“Profil”**.
* Il accède à la *Page profil* où toutes ses informations sont affichées et plus bas un bouton **“Modifier”**.
* Il clique sur **“Modifier”**. 
* Il accède à un formulaire où il peut modifier ses informations.
* Il clique sur **“Enregistrer les modifications”** pour les enregistrer.


## Action 4 : En tant qu'utilisateur je peux créer des terres 

* L'utilisateur clique sur profil. 
* Il accède à une page profil où toutes ses informations sont affichées et plus bas un bloc terrain.
* Il clique sur **“Ajouter un terrain”**.
* Un formulaire s’ouvre. 
* Il renseigne les informations sur le terrain : adresse, commune, cp, surface.
* Il clique sur **“Enregistrer”**. 


## Action 5 : En tant que visiteur ou utilisateur connecté je peux rechercher une activité 

* Sur la *Page d’accueil*, l'utilisateur fait des recherches à partir d’une **barre de recherche** [critère de recherche: communes\*(au moins une), date, nombre de participants (un par défaut), catégories d’activité] (modèle de blablacar).

*\* informations obligatoires*

* Une liste des annonces correspondant aux critères renseignés s’affiche par ordre chronologique.
* L'utilisateur peut scroller la page pour voir les annonces puis cliquer sur celle qui l'intéresse. 
* Lorsqu’il clique sur une annonce, il accède à plus de détails (photos, superficies, etc.) et aux créneaux disponibles.
* L’utilisateur peut réserver le **“Créneaux”** qui lui convient en cliquant dessus.


Il existe 2 cas de figures :
* **Utilisateur déjà connecté** 
   * Un récapitulatif de la réservation s’affiche avec un bouton **“Confirmer la réservation”**. 
   * L'utilisateur clique sur **“Confirmer la réservation”**.
   * Retour à la **Page d'accueil*.  

* **Visiteur** 
   * Redirection vers la page de connexion.
   * Retour vers l'*action 2*.


## Action 6 : En tant qu’utilisateur connecté je peux proposer des activités 

* L’utilisateur clique sur **“Proposer une activité”**. 

Il existe 2 cas de figure : 
* **L’utilisateur n’a pas de terrain déjà enregistré :** 
   * Message : “Veuillez accéder au profil pour ajouter un terrain.”.

* **L’utilisateur a déjà des terrains enregistrés :**
   * Il accède à un formulaire où il peut remplir les informations sur l’activité : 
      * Label, description, clients max.
      * Menu déroulant pour la catégorie.
      * Menu déroulant pour sélectionner le terrain.
      * Disponibilités.
   * Il peut ajouter des photos.
   * Il clique sur **“Enregistrer”**.
   * Il est renvoyé à la *Page d’accueil*.


## Action 7 : En tant qu’utilisateur connecté je peux me déconnecter 

* L’utilisateur clique sur le bouton **“déconnexion”** en haut à droite. 

![PrototypeDePageDeConnexion](https://user-images.githubusercontent.com/56674425/124616191-2a2c8500-de76-11eb-9e92-71491e7f5939.png)