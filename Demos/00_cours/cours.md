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
ng g c dossier/nom-composant --skip-tests
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

## Les pipes 

Les pipes sont des fonctions qui prennent une valeur en entrée, et ressort la valeur transformée
Il y a des pipes pour le textes `uppercase, lowercase, titlecase`
Il y a des pipes de type number
    - Le nombre minimum de chiffres avant la virgule
    - Le nombre minimum de chiffres après la virgule
    - Le nombre maximum de chiffres après la virgule

On peut créer un pipe personnalisé avec la commande :

```bash
ng g pipe nompipe
```

## Les formulaire

2 types en Angular :

- Template Driven Form
- Reactive forms

Dans le formulaire réactives, on peut retrouver 3 classes principales pour représenter les données :

- FormControl pour les données simple (boolean, string, number)
- FormGroup pour les objets
- FormArray pour les tableaux

## Cycle de vie

- OnChange
    - Se lance quand l'@Input change. Ne se lance pas si pas d'inputs
    - Pour réagir aux modifications d'un input
    - On reçoit la valeur précédente, la nouvelle valeur, et si c'est le premier changement

- OnInit :
    - Pour agir quand le composant est prêt => Faire des requêtes HTTP
    - Récupérer des données

- OnDestroy :
    - Se lance quand on quitte le composant
    - Pour couper les streams, souscriptions ect..