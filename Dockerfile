FROM node:14
# Créez un répertoire pour l'application.
WORKDIR /TP01

# Copie d'abord le fichier package.json et installe les dépendances.
COPY package*.json ./
RUN npm install

# Copie le reste du code source et transpile l'application.
COPY . .
RUN npx tsc

#Creation de l'utilisateur sans privilège
RUN adduser kevin

# l'Utilisateur spécifique pour l'exécution de l'application.
USER kevin

# Commande de démarrage de l'application.
CMD ["node","./build/index.js"]