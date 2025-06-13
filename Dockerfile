# Etapa 1: Build de la aplicación React
FROM node:18 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copia el build a la carpeta por defecto que Nginx sirve
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Opcional: reemplaza el archivo de configuración de Nginx si necesitas rutas personalizadas
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]