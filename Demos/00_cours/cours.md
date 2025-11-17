# Angular

## Installation de Angular

```bash
npm install -g @angular/cli
```

## Créer un projet 

```bash
ng new nomduprojet
```

## Récupérer un projet existant :

Installer les dépendances avec `npm i` ou `npm install`

## Lancer le projet

On lance le serveur avec la commande `npm start` ou `ng serve`

## Créer un nouveau composant

```bash
ng g c dossier/nom-composant
```

## L'interpolation

C'est le fait d'interpréter du ts dans le template. Pour ça, on utilise les balises `{{}}`
On peut afficher n'importe quelle expressions tant qu'elle retourne quelque chose.

## Data Binding

Permet d'interpréter du ts dans les attributs HTML.
On peut interpréter du ts dans n'importe quel attribut HTML à condition de mettre l'attribut entre crochets.