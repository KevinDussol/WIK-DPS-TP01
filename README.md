
Prérequis : avoir Node.js et VsCode d'installer

Le serveur web est basé sur TypeScript en localhost.
Le fichier de configuration en TypeScript est sur index.ts dans le dossier src.

-
dans la cmd sur VsCode :

Pour pouvoir transpilé le code du fichier index.ts sur le dossier build en index.js il faut utiliser la commande : npx tsc

Et pour lancer le serveur il faut utiliser la commande:
node build/index.js

-
cmd windows : 
Pour vérifier que ça marche une fois le serveur lancé on utilise la commande : curl http://127.0.0.1:3000/ping -v 
PS : (on utilise le port 3000 car c'est celui prédéfini dans le code si aucune variable d'environnement n'est défini )


----------------------

pour changer le port du serveur sur Windows on va dans Modifier les variable d'environnement système > Variables d'environnement... > Nouvelle... > Spécifier dans Nom de la Variable : PING_LISTEN_PORT > Spécifier dans Valeur de la variable : le numéro de port exemple "8080".

Le port sera changé quand VsCode sera redémarré puis on utilise la commande dans le terminal VsCode : node build/index.js 
PS : Dans la console le port utilisé sera afficher quand le serveur sera lancé.