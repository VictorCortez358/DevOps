# Imagen de Nodejs
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json y los archivos 
COPY package*.json ./
COPY server.js ./
COPY index.html ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "start"]
