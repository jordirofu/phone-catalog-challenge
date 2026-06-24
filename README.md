# Phone Catalog

Catálogo de móviles construido con React + Vite. Permite listar y buscar
teléfonos, consultar el detalle de cada uno y gestionar un carrito de compra.

## Stack

- **React 19** + **React Router** para la navegación.
- **Vite** como bundler y servidor de desarrollo.
- **Sass (SCSS)** para los estilos.
- **ESLint** + **Prettier** para linting y formato.

## Configuración

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Copia la plantilla de variables de entorno y rellena la API key:

   ```bash
   cp .env.example .env.local
   ```

   Edita `.env.local` y asigna a `VITE_PHONEAPI_KEY` la clave de la API
   (pídesela al autor del proyecto). Sin esta variable las llamadas a la API
   fallarán.

3. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## Scripts

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con HMR.              |
| `npm run build`   | Build de producción en `dist/`.              |
| `npm run preview` | Sirve localmente el build de producción.     |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto.            |
| `npm run format`  | Formatea `src/` con Prettier.                |

## Variables de entorno

| Variable            | Descripción                                |
| ------------------- | ------------------------------------------ |
| `VITE_PHONEAPI_KEY` | API key para la API de móviles (cabecera `x-api-key`). |
