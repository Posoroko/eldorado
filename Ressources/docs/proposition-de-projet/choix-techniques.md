# Choix techniques

## Introduction

<span class="textHighlight">Une architecture technique au service du projet</span>

Cette page présente les principaux choix techniques retenus pour la réalisation du site web du Bistrot d'El Dorado. Elle explique les technologies, les standards et les méthodes qui permettront de construire un site performant, accessible, évolutif et particulièrement efficace en matière de référencement naturel.

Le projet ne consiste pas simplement à créer une interface graphique et à y intégrer du contenu. Il s'agit de concevoir une véritable architecture web dans laquelle chaque élément occupe une fonction précise : structure HTML sémantique, données structurées Schema.org, accessibilité, rendu côté serveur (SSR), framework Nuxt et système de gestion de contenu Directus.

Ces différents éléments doivent être pensés ensemble et intégrés au bon niveau de l'architecture. Leur mise en œuvre doit notamment garantir que les contenus soient correctement interprétés par les moteurs de recherche, rapidement accessibles aux visiteurs et facilement administrables au quotidien.

Un site à fort potentiel SEO exige une attention particulière à sa construction technique. La qualité du référencement dépend non seulement des contenus publiés, mais aussi de la manière dont ils sont structurés, rendus, reliés entre eux et présentés aux moteurs de recherche.

L'objectif de ce brief est donc de définir les fondations techniques du projet et de préciser le rôle de chaque composant, sans entrer dans les détails d'implémentation.


## Les technologies

Les choix techniques ont été guidés par trois priorités

1. garantir un excellent référencement naturel
2. faciliter la gestion quotidienne des contenus
3. permettre au site d'évoluer dans le temps.

### HTML sémantique
<span class="textHighlight">Le langage de base de tous les sites web.</span>

Le HTML constitue la structure fondamentale de toute page web. Le projet privilégiera un HTML sémantique, dans lequel chaque élément possède une fonction et une signification précises. Cette organisation facilite la compréhension des contenus par les navigateurs, les technologies d'assistance et les moteurs de recherche.

### Nuxt
<span class="textHighlight">Framework et rendu SSR</span>

Nuxt est le framework utilisé pour construire le site. Il facilite le développement, l'organisation des pages et l'évolution de l'architecture.

### Directus
<span class="textHighlight">Headless CMS</span>

Directus est le système de gestion de contenu du projet. Contrairement à un CMS traditionnel qui impose généralement une structure de présentation, Directus permet de gérer les données indépendamment du site qui les utilise. Les contenus peuvent ainsi être organisés et exploités librement, tout en offrant une interface d'administration adaptée aux besoins du Bistrot.

### Netlify
<span class="textHighlight">Hébergement du site</span>
Une plateforme très performante permettant d'héberger des applications web modernes. 

### Posoroko Cloud
<span class="textHighlight">Hébergement du CMS Directus</span>
Studio Posoroko héberge les instance Directus de ses client. LA meilleure méthode pour rester en contrôle et maîtriser le budget dédié à l'hébergement.

### Accessibilité
<span class="textHighlight">Une interface accessible à tous</span>

Le web est devenu un outil essentiel du quotidien, utilisé par tous et dans des contextes très variés. Il est donc important de concevoir un site que chacun puisse consulter et utiliser facilement, quelles que soient ses capacités physiques, sensorielles ou cognitives.

L'accessibilité ne concerne pas uniquement les personnes malvoyantes ou utilisant des technologies d'assistance. Une personne ayant un bras immobilisé, naviguant avec une seule main, utilisant un téléphone en plein soleil ou simplement peu à l'aise avec certaines interactions peut également rencontrer des difficultés.

Cela implique de porter une attention particulière à des éléments qui bénéficient à tous : contrastes suffisants, textes lisibles, navigation intuitive, interactions accessibles au clavier et au toucher, défilement naturel et absence d'animations ou d'effets qui entravent la navigation.

L'objectif n'est pas seulement de rendre le site techniquement accessible, mais de proposer une expérience agréable, fluide et compréhensible pour le plus grand nombre.

Le développement suivra au mieux les recommandations **WAI-ARIA** du W3C afin de garantir une meilleure compatibilité avec les technologies d'assistance et les interfaces accessibles. [Consulter les recommandations WAI-ARIA](https://www.w3.org/WAI/ARIA/).

### Schema.org
<span class="textHighlight">Données structurées</span>

Le standard Shcema.org sera utilisé pour structurer le contenu afin qu'il soit mis en valeur par les moteurs de recherche.  Par exemple, les événements de l'agenda suivront la structure ** event ** qui le défini comme un événement avec une date, une heure, un lieu etc. Google peut ainsi le faire ressortir dans les résultats d'une recherche comme "que faire en centre-bretagne ce soir ?".

Cet aspect du développement n'est pas vu par les visiteurs. Il s'agit uniquement de données destinées au moteurs de recherche et aux bots ou crawlers.

::: info
Google défini la plupart des standard et bonnes pratique en matière de référencement et les choix technique sont basé principalement sur ce système. 

Bien comprendre le fonctionnement de Google permet de bien comprendre les enjeux et les objectifs d'un projet comme le notre.

consulter l'article Google du [lexique](/lexique) qui explique le fonctionnement du plus important moteur de recherche.
:::

