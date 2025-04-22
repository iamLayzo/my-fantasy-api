# Establece la imagen base
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install --legacy-peer-deps

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto de la aplicación (3000 en este caso, o el que definas en tu NestJS)
EXPOSE 3000

# Compila la aplicación
RUN npm run build

# Inicia la aplicación en modo de producción
CMD ["npm", "run", "start:prod"]
