# Carwash Services API

API para gestión de servicios del sistema CarwashFreaks.

## 🚀 Despliegue en Render

### Prerrequisitos
- Cuenta en [Render](https://render.com)
- Base de datos MongoDB Atlas configurada
- Variables de entorno configuradas

### Pasos para despliegue

1. **Conecta tu repositorio a Render:**
   - Ve a [Render Dashboard](https://dashboard.render.com/)
   - Haz clic en "New +" → "Web Service"
   - Conecta tu repositorio de GitHub

2. **Configuración del servicio:**
   - **Name:** `carwash-services-api`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

3. **Variables de entorno requeridas:**
   ```
   NODE_ENV=production
   PORT=10000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/carwash_services
   GATEWAY_API_URL=https://tu-gateway-api-domain.com
   JWT_SECRET=tu_jwt_secret_super_seguro_aqui
   ```

4. **Configuración adicional:**
   - **Plan:** Free (para empezar)
   - **Auto-Deploy:** Yes (para deploys automáticos)

### 📋 Variables de entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NODE_ENV` | Entorno de ejecución | `production` |
| `PORT` | Puerto del servidor | `10000` |
| `MONGO_URI` | URI de conexión a MongoDB | `mongodb+srv://...` |
| `GATEWAY_API_URL` | URL del gateway API para CORS | `https://gateway.com` |
| `JWT_SECRET` | Secreto para JWT | `secreto_super_seguro` |

### 🔧 Configuración de MongoDB Atlas

1. Crea un cluster en [MongoDB Atlas](https://cloud.mongodb.com)
2. Configura las reglas de firewall para permitir conexiones desde cualquier IP (0.0.0.0/0)
3. Crea un usuario de base de datos
4. Obtén la connection string y úsala en `MONGO_URI`

### 🚦 Arquitectura de microservicios

Este API está diseñado para funcionar como parte de una arquitectura de microservicios, donde:
- Solo acepta requests del Gateway API centralizado
- El Gateway maneja la autenticación y enrutamiento
- Proporciona endpoints específicos para gestión de servicios

### 📝 Endpoints disponibles

- `/api/services/*` - Endpoints de servicios (solo accesibles desde el Gateway)

### 🛠️ Desarrollo local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar en modo producción
npm start
```

### 📦 Dependencias principales

- **Express** - Framework web
- **Mongoose** - ODM para MongoDB
- **Helmet** - Seguridad HTTP
- **CORS** - Configuración de CORS
- **Rate Limiting** - Limitación de requests
- **Joi** - Validación de datos

### 🔒 Consideraciones de seguridad

- ✅ Helmet configurado para headers de seguridad
- ✅ CORS configurado apropiadamente
- ✅ Rate limiting implementado
- ✅ Variables de entorno para datos sensibles
- ✅ Validación de entrada con Joi

### 📞 Soporte

En caso de problemas durante el despliegue, verifica:
1. Todas las variables de entorno estén configuradas
2. La conexión a MongoDB Atlas sea válida
3. Los logs de Render para errores específicos