# Exercice 01:

- Créer un nouveau projet Angular
- Créer un composant "counter"
- Intégrer le composant dans app
- Le composant counter doit afficher un compteur
  - qui commence à 0
  - qui est rouge si impair, et vert si pair
  - qui s'incrémente ou se décrémente grâce à 2 boutons

# Exercice 02:

- Créer un nouveau composant "series"
- Créer la route du composant + la route du composant counter
- Créer une barre de navigation
- Dans séries, créer une liste de séries en dur
- Afficher la liste
- Afficher un message si la liste est vide
- Ajouter un bouton de suppression sur chaque élément de la liste.

# Exercice 03:

- Créer un pipe personnalisé qui prend en paramétre un tableau, et un string 'order' ('asc', 'desc')
- Utiliser ce pipe sur le tableau des séries pour le trier par ordre alphabétique.
- ajouter 2 boutons pour modifier l'ordre du tableau (asc, desc)

# Exercice 04:

- Créer un composant librairie, et sa route
- Dans ce composant, afficher une liste de livres
  - title
  - author
  - isRead
- Quand les livres sont lus, on affiche un emoji à côté du titre ou une phrase
- Ajouter un bouton pour marquer un livre comme lu / pas lu

# Exercice 05:

- Dans le composant librairie, créer un formulaire pour créer un livre.
- Le titre et l'auteur sont obligatoire
- Par défaut, la valeur de isRead est false
- Ajouter le nouveau livre à la liste précédente.

# Exercice 06:

- Créer un nouveau composant et sa route
- Dans ce composant, créer un formulaire réactif pour créer un pokemon:
  - nom
  - description
  - liste de types
  - liste d'attaques
    - nom
    - description
    - dégats
  - zone
    - nom
    - region

# Exercice 7

- Reprendre les pokemons
- Créer un composant pokemon-card, ce composant prendra un pokemon via les props et affichera une carte de de pokemon
- Afficher ensuite grace à une boucle tous les pokemons de la liste.

## Exercice 8

Créer un bouton dans le pokemon-card permettant de supprimer un pokemon

- Le bouton doit envoyer un événement au parent
- Le parent doit récupérer cet événement pour supprimer le pokemon de la liste

## Exercice 9

Créer un pokedexService

- Contient un tableau de pokemons
- Deux méthodes pour ajouter et supprimer du tableau

- Dans pokemonCard Ajouter un bouton pour ajouter au podedex
- Dans un composant Pokedex afficher la liste des pokemons
