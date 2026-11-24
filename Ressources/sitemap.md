# Sitemap — Bistrot d'Eldorado

## 1. Arborescence

```text
/
├── /restaurant
│   └── /restaurant/menu
├── /bar
├── /concerts
│
├── /la-poste-paule
│
├── /boutique                 (à créer plus tard)
│
├── /a-propos
├── /agenda
│   └── /agenda/[slug]
├── /gazette
│   └── /gazette/[slug]
├── /galerie
│   └── /galerie/[slug]
│
├── /infos-pratiques
├── /contact
├── /horaires
|__ /newsletter
|   |__ /newsletter/preferences
│
├── /mentions-legales
└── /politique-de-confidentialite
```

## 2. Rôle des pages

### Accueil `/`
Présenter immédiatement l'identité du Bistrot et ses trois activités principales : restaurant, bar et concerts. Trois blocs ou cartes sous le Hero permettent d'accéder directement à ces pages.

### Activités

- `/restaurant` : présentation de la cuisine, des sandwichs, des viandes fumées et séchées maison, de la philosophie culinaire.
- `/restaurant/menu` : menu détaillé, descriptions et prix. Contenu HTML indexable, administrable depuis le CMS.
- `/bar` : présentation du bar, de son ambiance et de son offre.
- `/concerts` : présentation de l'activité musicale, de la programmation et de la vocation culturelle du lieu.

Ces trois activités sont des pages de premier niveau, indépendantes de `/a-propos`.

### Présentation du lieu

- `/a-propos` : histoire du bâtiment, identité du Bistrot, vocation sociale et culturelle, rôle dans la vie locale et ancrage en Centre-Bretagne.

Cette page présente le lieu dans son ensemble et renvoie vers les pages des trois activités.

### Événements

- `/agenda` : calendrier des événements à venir et éventuellement archives.
- `/agenda/[slug]` : page individuelle pour chaque événement daté, notamment les concerts.

La page `/concerts` présente l'activité permanente ; `/agenda` présente les événements concrets avec leurs dates et informations pratiques.

### Gazette

- `/gazette` : journal éditorial du Bistrot et de son territoire.
- `/gazette/[slug]` : articles individuels.

La Gazette ne se limite pas aux actualités. Elle accueille également des articles historiques, culturels, des rencontres, des portraits, des découvertes locales et des récits autour du Bistrot.

### Galerie

- `/galerie` : index des albums photo et vidéo, présentés chronologiquement.
- `/galerie/[slug]` : page individuelle de chaque album.

Pas de page individuelle pour chaque photo. Les images sont consultables dans leur album, avec éventuellement un affichage plein écran.

### Activités secondaires

- `/la-poste-paule` : page dédiée au point La Poste Relais, déjà en activité. Elle permet de cibler les recherches locales liées aux services postaux à Paule et dans les environs.
- `/boutique` : page à créer lorsque l'espace bric-à-brac / curiosités sera aménagé.

Ces deux activités sont présentées par des cartes plus petites sous les trois grandes cartes Restaurant, Bar et Concerts. Elles restent visibles sans diluer les trois piliers du Bistrot ni surcharger la navigation principale.

### Informations pratiques

- `/infos-pratiques` : page d'orientation regroupant les informations essentielles pour préparer une visite.

Elle présente notamment un aperçu des horaires, la localisation, le stationnement, les chiens acceptés, l'accessibilité et les possibilités pour les groupes. Elle renvoie vers les pages détaillées pertinentes.

- `/contact` : coordonnées, formulaire, téléphone, email et carte.
- `/horaires` : horaires détaillés du bar et du restaurant, jours de fermeture et éventuelles particularités.

Ces pages sont indépendantes dans l'URL. `/contact` et `/horaires` ne sont pas des sous-pages de `/infos-pratiques`.

### Pages légales

- `/mentions-legales`
- `/politique-de-confidentialite`

### Newsletter et gestion des abonnements

Créer un espace dédié à la newsletter de Jack, connecté à Zoho Campaigns via son API.

**Page `/newsletter`**
- Présenter la lettre, son contenu, sa fréquence et son esprit.
- Afficher un exemple visuel d'une newsletter réelle.
- Proposer l'inscription à la lettre mensuelle et aux alertes ponctuelles de concerts, avec des choix indépendants.
- Expliquer clairement l'utilisation des données personnelles et les modalités de désinscription.

**Page `/newsletter/preferences`**
- Permettre aux abonnés de retrouver et modifier leurs préférences sans créer de compte.
- L'utilisateur saisit son adresse email et reçoit un lien temporaire de vérification.
- Après vérification, il accède à ses abonnements et peut les modifier.
- Les changements sont synchronisés directement avec Zoho Campaigns.

**Intégration technique**
- Utiliser l'API officielle de Zoho Campaigns.
- Conserver Zoho comme outil central de gestion des contacts et d'envoi des newsletters.
- Effectuer les appels API côté serveur, sans exposer les identifiants Zoho.
- Prévoir une gestion sécurisée des inscriptions, des préférences et des désinscriptions.

L'objectif est de conserver les habitudes de travail de Jack dans Zoho tout en offrant aux lecteurs une expérience simple, transparente et intégrée au site du Bistrot.

## 3. Logique ayant conduit à cette architecture

L'architecture a été construite autour de trois principes :

**1. Donner une place claire aux activités principales**

Restaurant, bar et concerts sont trois activités distinctes et importantes. Elles disposent donc chacune de leur propre page, accessible directement depuis l'accueil.

**2. Séparer les contenus selon leur nature**

- Pages permanentes : présentation des activités et du lieu.
- Agenda : événements datés.
- Gazette : articles éditoriaux et historiques.
- Galerie : albums photo et vidéo.
- Informations pratiques : renseignements utiles aux visiteurs.

Cette séparation évite les doublons éditoriaux et facilite l'organisation à long terme.

**3. Garder une architecture simple et évolutive**

Les URLs sont courtes, descriptives et faciles à mémoriser. Les pages importantes restent indépendantes plutôt que d'être artificiellement imbriquées.

La profondeur d'une URL ne donne pas automatiquement un avantage SEO. La qualité des contenus, les liens internes, la pertinence et la cohérence de l'ensemble sont plus importantes.

## 4. Principes SEO et éditoriaux

- Chaque page doit répondre à une intention de recherche ou à un besoin réel du visiteur.
- Ne pas créer de pages artificielles pour multiplier les mots-clés ou les localités.
- Travailler naturellement l'ancrage géographique : Paule, Rostrenen, Carhaix, Centre-Bretagne, Kreiz Breizh et Côtes-d'Armor lorsque le contexte le justifie.
- Soigner les titres HTML, H1, descriptions, sous-titres, textes alternatifs des images et liens internes.
- Utiliser les données structurées Schema.org adaptées au contenu réel : Restaurant ou BarOrPub, BlogPosting, Event, BreadcrumbList, etc.
- Maintenir les horaires, coordonnées et informations pratiques à jour, idéalement depuis une source unique dans le CMS.
- Privilégier des contenus originaux, utiles et bien documentés plutôt que la quantité de pages.

## 5. Consignes d'évolution

Cette architecture constitue une base, pas une obligation de créer immédiatement toutes les pages.

Certaines pages pourront être ajoutées lorsque l'activité le justifiera, par exemple `/privatisation` si les demandes de groupes et d'événements privés deviennent une offre importante.

Ne pas créer de page dédiée à chaque plat, boisson, photo ou type de concert sans justification éditoriale ou fonctionnelle.

**Objectif général :** un site facile à visiter, facile à administrer et capable de s'enrichir pendant plusieurs années sans devoir repenser toute son architecture.