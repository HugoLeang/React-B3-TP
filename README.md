# Application React

## Signup - Signin

L'application possède un système d'inscription et de connection qui permet de vérifier si l'utilisateur existe dans le local storage.

### Utilisation de cookie pour garder une trace la connection

Au moment de se connecter l'application sauvegarde un cookie sur la navigateur avec comme donnée l'email.
Quand l'utilisateur se retrouvera sur le chemin "/" et qu'il possède un cookie qui atteste qu'il s'est connecté à l'app. L'utilisateur est redirigé vers le dashboard.

## Routage

L'application possède le package de routage `react-router-dom` qui permet de naviguer à travers les pages de l'application.

### Protection des routes

Le dashboard de l'application est protégé. Pour y accéder l'utilisateur doit se connecter avec un accès existant sur le local storage.
Si l'utilisateur essaye de forcer la connection via l'URL du navigateur, la page vérifira que le cookie de connexion est bien présent. Sinon il est redirigé vers la page de login.

## Dashboard

Le dashboard est la page que peut accèder l'utilisateur une fois connecté.
Au sein de cette page deux composants présents et font des appels à des API extérieurs pour pouvoir présenter des informations à l'utilisateur.

### Structuration VIEW - COMPONENT - SERVICE

Durant le développement, l'application est structuré en trois partie:

- View: Conteneurs de composant qui permet d'injecter n'importe quel composants.
- Component: Morceau de code réutilisable et indépendant injectable sur n'importe quelle View.
- Service: Code qui permet d'intéragir avec les API et contient du code réutilisable qui à uniquement pour but d'être fonctionnel.

### Composant Card Displayer

Le Card displayer est un composant qui permet d'afficher une carte avec:

- Illustration
- Nom
- Type
- Description
  On peut renseigner des données directement si on veut afficher une carte spécifique ou bien ne passer aucun props.
  Dans le cas où aucun props est renseigné, le composant affiche une carte au hasard.

Ce composant fait appel à un API externe Scryfall pour obtenir une carte aléatoire.

### Composant Set Table Displayer

Ce composant à pour but d'afficher les nouvelles extension sorties datant de moins d'un an et à venir.

Elle fait appel à une API externe pour récupérer toutes les extensions sorties et les tri en fonction de leurs dates de sorties.
Une fois cette opération faite: Elle les affiches sous un format de tableau.

## Création d'un hook custom

Pour facilier la création d'un formulaire et de réutiliser les fonctionnalités déjà écrite pour gérer les champs d'un formulaire, l'application possède un hook customisé pour gérer la validation grâce aux expressions régulières.
