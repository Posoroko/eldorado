# Brief technique

## Introduction

<span class="textHighlight">Une architecture technique au service du projet</span>

Cette page présente les principaux choix techniques retenus pour la réalisation du site web du Bistrot d'El Dorado. Elle explique les technologies, les standards et les méthodes qui permettront de construire un site performant, accessible, évolutif et particulièrement efficace en matière de référencement naturel.

Le projet ne consiste pas simplement à créer une interface graphique et à y intégrer du contenu. Il s'agit de concevoir une véritable architecture web dans laquelle chaque élément occupe une fonction précise : structure HTML sémantique, données structurées Schema.org, accessibilité, rendu côté serveur (SSR), framework Nuxt et système de gestion de contenu Directus.

Ces différents éléments doivent être pensés ensemble et intégrés au bon niveau de l'architecture. Leur mise en œuvre doit notamment garantir que les contenus soient correctement interprétés par les moteurs de recherche, rapidement accessibles aux visiteurs et facilement administrables au quotidien.

Un site à fort potentiel SEO exige une attention particulière à sa construction technique. La qualité du référencement dépend non seulement des contenus publiés, mais aussi de la manière dont ils sont structurés, rendus, reliés entre eux et présentés aux moteurs de recherche.

L'objectif de ce brief est donc de définir les fondations techniques du projet et de préciser le rôle de chaque composant, sans entrer dans les détails d'implémentation.


## Choix techniques

Les choix techniques ont été guidés par trois priorités : garantir un excellent référencement naturel, faciliter la gestion quotidienne des contenus et permettre au site d'évoluer dans le temps.

### HTML sémantique
<span class="textHighlight">Le langage de base de tous les sites web.</span>

Le HTML constitue la structure fondamentale de toute page web. Le projet privilégiera un HTML sémantique, dans lequel chaque élément possède une fonction et une signification précises. Cette organisation facilite la compréhension des contenus par les navigateurs, les technologies d'assistance et les moteurs de recherche.

### Nuxt
<span class="textHighlight">Framework et rendu SSR</span>

Nuxt est le framework utilisé pour construire le site. Il facilite le développement, l'organisation des pages et l'évolution de l'architecture. Nuxt.js est un projet open-souce dirigé par des développeurs français.

### Directus
<span class="textHighlight">Headless CMS</span>

Directus est le système de gestion de contenu du projet. Contrairement à un CMS traditionnel qui impose généralement une structure de présentation, Directus permet de gérer les données indépendamment du site qui les utilise. Les contenus peuvent ainsi être organisés et exploités librement par Nuxt, tout en offrant une interface d'administration adaptée aux besoins du Bistrot.

### Accessibilité

Le web est devenu un outil essentiel du quotidien, utilisé par tous et dans des contextes très variés. Il est donc important de concevoir un site que chacun puisse consulter et utiliser facilement, quelles que soient ses capacités physiques, sensorielles ou cognitives.

L'accessibilité ne concerne pas uniquement les personnes malvoyantes ou utilisant des technologies d'assistance. Une personne ayant un bras immobilisé, naviguant avec une seule main, utilisant un téléphone en plein soleil ou simplement peu à l'aise avec certaines interactions peut également rencontrer des difficultés.

Cela implique de porter une attention particulière à des éléments qui bénéficient à tous : contrastes suffisants, textes lisibles, navigation intuitive, interactions accessibles au clavier et au toucher, défilement naturel et absence d'animations ou d'effets qui entravent la navigation.

L'objectif n'est pas seulement de rendre le site techniquement accessible, mais de proposer une expérience agréable, fluide et compréhensible pour le plus grand nombre.

Le développement suivra au mieux les recommandations **WAI-ARIA** du W3C afin de garantir une meilleure compatibilité avec les technologies d'assistance et les interfaces accessibles. [Consulter les recommandations WAI-ARIA](https://www.w3.org/WAI/ARIA/).

### Schema.org
<span class="textHighLight">Données structurées</span>

Le standard shcema.org sera utilisé pour structurer le contenu afin qu'il soit mis en valeur par les moteur de recherche.  Par exemple, les événements de l'agenda suivront la structure ** event ** qui le défini comme un événement avec une date, une heure, un lieu etc. Google peut ainsi le faire ressortir dans les résultats d'une recherche comme "que faire en centre-bretagne ce soir ?".

Cet aspect du développement n'est pas vu par les visiteurs. Il s'agit uniquement de données destinées au moteurs de recherche et aux bots ou crawlers.

## Lexique

<span class="textHighlight">Technologies et standards du Web</span>

### HTML
<span class="textHighlight">HyperText Markup Language</span>

Le langage qui définit la structure et le contenu d'une page web. Il permet d'organiser les textes, les images, les liens, les titres et les différents éléments d'une page.

### CSS
<span class="textHighlight">Cascading Style Sheets</span>

Le langage qui définit l'apparence d'un site : couleurs, typographies, dimensions, espacements, mises en page, animations et adaptations aux différentes tailles d'écran.

### JavaScript

Un langage de programmation qui permet d'ajouter des fonctionnalités et des interactions à un site web : menus dynamiques, formulaires interactifs, animations, mises à jour de contenu, etc.

### Framework

Un ensemble d'outils et de conventions qui facilite le développement d'une application ou d'un site web. Il fournit une structure de travail et des fonctionnalités réutilisables. Nuxt est un framework basé sur Vue.js.

### CMS
<span class="textHighlight">Content Management System</span>

Un système de gestion de contenu permettant de créer, modifier et organiser les informations d'un site sans intervenir directement dans son code. Il fournit généralement une interface d'administration.

### Headless CMS

Un CMS qui sépare la gestion des contenus de leur présentation. Les données sont administrées dans le CMS, puis transmises au site par une API. Cette séparation permet de choisir librement la manière dont les contenus sont affichés et exploités.

### Accessibilité

L'ensemble des principes et techniques permettant à tous les utilisateurs d'accéder à un site et de l'utiliser, quelles que soient leurs capacités ou leurs conditions de navigation. Elle concerne notamment la lisibilité, les contrastes, la navigation au clavier, les interactions et la compatibilité avec les technologies d'assistance.

<span class="textHighlight">Fonctionnement des moteurs de recherche</span>

### Crawler
<span class="textHighlight">Robot d'exploration</span>

Un type de bot chargé de parcourir les pages web en suivant les liens d'une page à l'autre. Il découvre ainsi de nouvelles pages et détecte les modifications apportées aux pages existantes.

Google utilise notamment un crawler appelé Googlebot.

### Référencement

Le processus par lequel les pages d'un site sont découvertes, analysées et éventuellement intégrées à l'index d'un moteur de recherche. Dans le langage courant, le terme désigne également leur présence et leur positionnement dans les résultats.

### SEO
<span class="textHighlight">Search Engine Optimization</span>

L'ensemble des techniques visant à améliorer la visibilité d'un site dans les résultats naturels des moteurs de recherche, c'est-à-dire les résultats qui ne sont pas des annonces publicitaires.

Le SEO concerne notamment la qualité des contenus, leur organisation, la structure technique du site, les liens entre les pages et les liens provenant d'autres sites.

### Lien entrant
<span class="textHighlight">Backlink</span>

Un lien placé sur un autre site web et qui pointe vers une page de ton site. Les moteurs de recherche peuvent considérer ces liens comme des signes de recommandation ou de reconnaissance.

### Google
<span class="textHighlight">Comment fonctionne Google ? Exploration, indexation et classement</span>

Google ne constitue pas une simple liste de sites web. Il parcourt continuellement le Web, analyse les pages découvertes et construit un immense index dans lequel il conserve les informations qu'il juge utiles.

Lorsqu'un internaute effectue une recherche, Google sélectionne et classe les pages de son index en fonction de leur pertinence par rapport à la requête.

Ce fonctionnement repose sur plusieurs étapes.

**1. La découverte et l'exploration**

Google utilise ses robots, notamment Googlebot, pour parcourir le Web. Ils suivent les liens présents sur les pages afin de découvrir de nouveaux contenus et de revenir régulièrement sur les pages déjà connues.

Une page peut être découverte grâce à un lien provenant d'un autre site, à un lien interne ou à un sitemap XML fourni par le site.

**2. L'analyse et l'indexation**

Google analyse les pages découvertes afin d'en comprendre le contenu et la structure. Il prend notamment en compte les textes, les titres, les liens, les images et les informations structurées.

Les pages jugées suffisamment pertinentes et accessibles peuvent être ajoutées à son index. Cet index constitue la base de données dans laquelle Google recherche les pages susceptibles de répondre aux requêtes des internautes.

Une page explorée n'est donc pas nécessairement indexée. Et une page indexée n'est pas nécessairement bien positionnée.

**3. Le classement des résultats**

Lorsqu'une personne effectue une recherche, Google cherche les pages les plus susceptibles de répondre à son besoin. Il utilise de nombreux systèmes et signaux pour déterminer leur ordre d'affichage.

Parmi les éléments pris en compte :

- **La pertinence du contenu :** le sujet de la page correspond-il à la recherche ? Les informations répondent-elles réellement à la question ou au besoin de l'internaute ?
- **La qualité et la fiabilité :** le contenu est-il utile, précis et digne de confiance ? La réputation de la source et les références disponibles peuvent également entrer en jeu.
- **La popularité et les liens :** d'autres sites reconnus font-ils référence à cette page ou à ce site ? Les liens entrants peuvent contribuer à évaluer sa notoriété et son autorité.
- **Le contexte de recherche :** la localisation de l'internaute, la formulation de sa recherche et son intention influencent les résultats proposés.
- **L'expérience utilisateur :** la page est-elle accessible, rapide, sécurisée et utilisable dans de bonnes conditions, notamment sur mobile ?

Ces éléments ne constituent pas une simple liste de points à cocher. Google utilise des centaines de signaux et différents systèmes de classement qui cherchent à évaluer les pages dans leur contexte.

**4. Un classement différent selon la recherche**

Le classement n'est pas une position fixe attribuée une fois pour toutes à un site. Il est calculé pour chaque recherche et peut varier selon les termes utilisés, la localisation de l'internaute, la concurrence et l'évolution des contenus disponibles.

Un même établissement peut ainsi apparaître très haut dans les résultats pour une recherche précise, mais beaucoup plus bas pour une autre.

Il faut également distinguer les résultats naturels des annonces publicitaires. Les annonces peuvent apparaître au-dessus des résultats naturels, mais elles ne constituent pas un meilleur référencement : elles correspondent à un système publicitaire distinct.

**En résumé :** Google cherche à proposer, pour chaque recherche, les pages les plus pertinentes et les plus fiables qu'il connaît. La visibilité d'un site dépend donc à la fois de sa capacité à être découvert et compris par le moteur, et de la qualité de sa réponse aux besoins des internautes.

Documentation officielle : https://developers.google.com/search/docs/fundamentals/how-search-works
