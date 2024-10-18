# Usa la imagen de Node.js
FROM node:20

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala todas las dependencias (incluyendo devDependencies)
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Compila el proyecto NestJS
RUN npm run build

# Elimina las dependencias de desarrollo para optimizar el tamaño de la imagen
RUN npm prune --production

# Expone el puerto que usará la aplicación (el puerto por defecto de NestJS es el 3000)
EXPOSE 3000

# Comando que ejecutará la aplicación
CMD ["npm", "run", "start:prod"]
