# Utilisez une image Node.js Alpine comme base
FROM node:lts-slim

# Créez et définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier package.json et package-lock.json (si existant)
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel l'application écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]