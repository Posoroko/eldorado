# Plan du site

## Introduction

<span class="textHighlight">Une architecture claire et évolutive</span>

Ce plan présente l'architecture de base du site. Il définit la structure des pages mais ne constitue pas un parcours de navigation imposé. L'objectif est de proposer une organisation cohérente pour les moteurs de recherche.

## Navigation

La navigation sera ensuite conçue dans ces pages afin d'accéder directement aux contenus importants. Par exemple, la page /restaurant/menu sera accessible directement depuis la page d'accueil, sans qu'il soit nécessaire de passer par la page /restaurant.

## Future proof

Bien qu'il sera possible, plus tard, d'ajouter des pages comme `/boutique/disquaire`, il sera difficile de déplacer des pages existantes comme passer de `/restautant/mennu` à `/menus/restaurant`. <span class="textHighlight">  Il est donc important de définir une structure efficace et évolutive.</span>

::: info
Les segments d'URL indiquées dans le plan sont ajoutées à la suite du nom de domaine.

- `www.eldorado.bar/` pour la page d'accueil
- `www.eldorado.bar/restaurant/menu` pour le nenu
:::

## Plan du site

<span class="textHighlight">Structure des pages</span>

- **Accueil** `/`
  - **Restaurant** `/restaurant`
    - Menu du restaurant `/restaurant/menu`
  - **Bar** `/bar`
    - Carte du bar `/bar/menu`
  - **Concerts** `/concerts`
  - **La Poste Relais** `/la-poste-paule`
  - **Boutique** `/boutique` *(développement ultérieur)*
  - **À propos** `/a-propos`
  - **Agenda** `/agenda`
    - Événement `/agenda/[nom-de-l'événement]`
  - **La Gazette** `/gazette`
    - Article `/gazette/[nom-de-l'article]`
  - **Galerie** `/galerie`
    - Album photo ou vidéo `/galerie/[nom-de-l'album]`
  - **Informations pratiques** `/infos-pratiques`
  - **Horaires** `/horaires`
  - **Contact** `/contact`
  - **Newsletter** `/newsletter`
    - Préférences d'abonnement `/newsletter/preferences`
  - **Mentions légales** `/mentions-legales`
  - **Politique de confidentialité** `/politique-de-confidentialite`