# Efecto de Swipe usando Swipper.js

Este proyecto es una aplicación sencilla en **React** con **TypeScript** que implementa un efecto de swipe utilizando la librería **Swiper.js**. Las películas se obtienen de la **API** de **The Movie Database (TMDB)** y se muestran en forma de tarjetas con un fondo dinámico que cambia según la película seleccionada.

![web-app](https://github.com/sotoflore/Efecto-de-Swipe-con-Swiper.js-en-React-TypeScript/blob/main/public/web-app.png)

## Características
- **Swiper.js**: Utiliza el **efecto "cards"** de Swiper.js para deslizar tarjetas de películas.
- **Axios**: Hace peticiones HTTP a la API de TMDB para obtener las películas populares.
- C**ambio de fondo dinámico**: El fondo de la aplicación cambia automáticamente al deslizar entre películas, mostrando la imagen de fondo correspondiente a la película seleccionada.

## Tecnologías utilizadas
- **React y TypeScript**: Biblioteca para construir interfaces de usuario.
- **Swiper.js**: Librería para crear efectos de deslizamiento y carruseles.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **TMDB API**: Fuente de datos de películas populares.

## Personalización
Puedes modificar el número de películas mostradas editando la línea s**`etMovies(response.data.results.slice(0, 10));`** en el archivo **`App.tsx`**.
Para cambiar el estilo, puedes ajustar las **clases CSS** y las propiedades de estilo inline del contenedor y las tarjetas.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/sotoflore/Efecto-de-Swipe-con-Swiper.js-en-React-TypeScript.git
    ```
2. Entra en el directorio del proyecto:
    ```bash
    cd Administrador-Pacientes-Con-Zustand-y-React-Hook-Form
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Configura tu clave de API de TMDB:
    Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
    ```
    VITE_API_KEY=tu_clave_de_api_tmdb
    ```

5. Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```

6. Abre la aplicación en tu navegador en la dirección [http://localhost:5173](http://localhost:5173) por vite.js.
