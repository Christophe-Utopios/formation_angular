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

## le router

Pour créer des routes, on les définits dans le fichier app.routes.ts sous la forme d'un objet qui contient un path, et le composant.

```ts
export const routes = [
    {path: "", component: HomeComponent},
    {path: "contact", component: ContactComponent}
    ]
```

On peut ensuite créer des liens vers ces routes avec des balises <a>, et l'attribut `routerLink`

```angular2html
<a routerLink="/">Home</a>
```