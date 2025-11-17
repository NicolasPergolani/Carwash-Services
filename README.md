# Carwash Services API

## Descripción

Esta es la API de servicios para el sistema **CarwashFreaks**, una plataforma para la gestión de servicios de lavado de autos. Permite crear, leer, actualizar y eliminar servicios disponibles en el sistema, con autenticación JWT y autorización basada en roles (administrador).

La API está construida con Node.js y Express, utilizando MongoDB como base de datos. Está desplegada en Render y cuenta con un workflow de GitHub Actions que mantiene la instancia activa mediante pings periódicos.

## Tecnologías

- **Backend:** Node.js, Express.js
- **Base de datos:** MongoDB con Mongoose
- **Despliegue:** Render
- **CI/CD:** GitHub Actions (para mantener la API activa)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/NicolasPergolani/Carwash-Services.git
   cd Carwash-Services/services-api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` basado en `.env.example`:
   ```env
   PORT=
   MONGODB_URI=tu_mongodb_uri
   JWT_SECRET=tu_jwt_secret
   NODE_ENV=development
   ```

4. Ejecuta el servidor:
   ```bash
   npm run dev  # Para desarrollo con nodemon
   npm start    # Para producción
   ```

## Endpoints Principales

La API expone los siguientes endpoints para la gestión de servicios:

### Servicios

- **GET /api/services**  
- **POST /api/services**  
- **PUT /api/services/:id** 
- **DELETE /api/services/:id**  

### Modelo de Servicio

Cada servicio tiene la siguiente estructura:

```json
{
  "name": "Lavado Básico",
  "description": "Lavado exterior completo",
  "price": 15.99,
  "duration": 30,
  "features": ["Lavado exterior", "Secado"],
  "isActive": true,
  "image": "url_de_imagen",
  "createdAt": "2025-11-16T..."
}
```

## Despliegue

La API está desplegada en Render: [https://carwash-services.onrender.com/](https://carwash-services.onrender.com/)

Para mantener la instancia activa (ya que Render duerme las apps gratuitas), se ha configurado un workflow de GitHub Actions que hace ping cada 5 minutos.

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

ISC
