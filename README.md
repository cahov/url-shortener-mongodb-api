
# API de Acortador de URL

Esta API permite acortar URLs largas y redirigir a las URLs originales a través de los enlaces acortados, con persistencia en una base de datos Mongodb

## Endpoints

### Obtener la página de inicio

```
GET /
```

Este endpoint devuelve un mensaje de bienvenida "API url shortener".

### Acortar una URL

```
POST /short
```

Este endpoint permite acortar una URL larga proporcionada. Debe enviarse una solicitud POST con el siguiente cuerpo JSON:

```json
{
  "url": "https://ejemplo.com"
}
```

**Respuesta exitosa**:

- Código de estado: 201 Created
- Cuerpo de respuesta JSON:

```json
{
  "short_url": "https://base_url/r/acortamiento"
}
```

**Respuesta de error**:

- Código de estado: 400 Bad Request
- Cuerpo de respuesta JSON:

```json
{
  "error": "URL invalida"
}
```

### Redireccionar a la URL original

```
GET /r/link
```

Este endpoint redirecciona a la URL original correspondiente al enlace acortado proporcionado en el parámetro `link`.

**Respuesta exitosa**:

- Código de estado: 302 Found
- Redirección a la URL original

**Respuesta de error**:

- Código de estado: 404 Not Found
- Cuerpo de respuesta: "URL no encontrada"

## Variables de entorno

Deben configurarse las siguientes variables de entorno:
- `MONGODB_URI`: La url de conexion a la base de datos Mongodb.
- `PORT`: El puerto en el que se ejecuta el servidor puede modicarse en /src/config.js .
- `NODE_ENV`: El entorno de ejecución de la aplicación (development o production), de estar en development la respuesta con la url acortada incluira el puerto.



## Requisitos

- Node.js
- MongoDB

## Instalación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura las variables de entorno.
4. Ejecuta `npm start` para iniciar el servidor en modo produccion.
5. Ejecuta `npm run dev` para iniciar el servidor en modo desarrollo (con actualizacion automatica por nodemon).

