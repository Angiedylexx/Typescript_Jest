[![Author][author-shield]][author-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Angiedylexx/Typescript_Jest">
  </a>
<h3 align="center"> TypeScript_Jest </h3>  
  <p align="center">
    Este proyecto implementa una API REST para administrar entradas de películas en una base de datos, enfatizando la funcionalidad sólida, la calidad del código y las pruebas unitarias exhaustivas. con tecnologías como Jest, Express.js, Sequelize.
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#functionalities">Funcionalidades</a></li>
        <li><a href="#database">Base de datos</a></li>
        <li><a href="#database">Testeo</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Guia de inicial</a>
      <ul>
        <li><a href="#prerequisites">Prerequisitos</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contactos</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Acerca del Proyecto

La API aprovecha las siguientes tecnologías clave:

[![TypeScript](https://shields.io/badge/TypeScript-%23007ACC?style=for-the-badge&logo=typescript&color=white&style=border-color:#007ACC&width=40&height=40)](https://www.typescriptlang.org/)
[![Jest](https://shields.io/badge/Jest-%23C21325?style=for-the-badge&logo=jest&color=white&style=border-color:#C21325&background=#2F4F4F&width=40&height=40)](https://jestjs.io/)
[![Postgres](https://shields.io/badge/Postgres-%23336791?style=for-the-badge&logo=postgresql&color=white&style=border-color:#336791&width=40&height=40)](https://www.postgresql.org/)
[![Express](https://shields.io/badge/Express-%234782C8?style=for-the-badge&logo=express&color=white&style=border-color:#4782C8&width=40&height=40)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%233399FF?style=for-the-badge&logo=Node.js&color=white&style=border-color:#3399FF&width=40&height=40)](https://nodejs.org/es/)
[![NPM](https://img.shields.io/badge/NPM-%23EA4335?style=for-the-badge&logo=NPM&color=white&style=border-color:#EA4335&width=40&height=40)](https://www.npmjs.com/)

### Funcionalidades

- ✍️ Crear película:

Acepta una solicitud POST con detalles de la película en el cuerpo de la solicitud.
Valida los campos obligatorios: título, género, duración, sala de proyección y programación.
Crea una nueva entrada de película en la base de datos usando Sequelize.
Devuelve una respuesta JSON con los datos de la película creada en caso de éxito (código de estado 201) o un mensaje de error con el código de estado 400 para una entrada no válida.

- 📋 Visualizar las movies:

Acepta una solicitud GET con pageRequired parámetro de consulta opcional para paginación.
Recupera una lista paginada de películas de la base de datos, ordenadas por año en orden descendente.
Devuelve una respuesta JSON con películas recuperadas, información de paginación (página actual, páginas totales y películas totales) o un mensaje de error con el código de estado apropiado (404 o 500) para diferentes condiciones de error.

- ⚙️ Actualizar la movie:

Acepta una solicitud PATCH con ID de película en la URL de la solicitud y detalles actualizados en el cuerpo de la solicitud.
Valida que se proporcione al menos un campo para actualización.
Actualiza solo los campos especificados mediante asignación selectiva.
Devuelve una respuesta JSON con los datos de la película actualizados en caso de éxito (código de estado 200) o un mensaje de error con el código de estado apropiado (400, 404 o 500) para varios escenarios de error.

- ❌ Eliminar la movie:

Acepta una solicitud DELETE con ID de película en la URL de solicitud.
Valida el formato de ID proporcionado (presencia y valor numérico).
Recupera la película identificada por el ID de la base de datos.
Elimina la entrada de la película de la base de datos.
Devuelve una respuesta JSON con un mensaje de éxito y el título de la película eliminada en caso de éxito (código de estado 200) o un mensaje de error con un código de estado (400, 404 o 500) para varios escenarios de error. 

### Base de datos

- Conexión con PostgreSQL como base de datos: Se utilizó una base relacional para almacenar y gestionar la información de la movie, y Sequelize como ORM📊.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

### Testeo

- Jest y Supertest: Se utilizó Jest para realizar pruebas automatizadas a cada una de las API´s, abarcando la creación, actualización, visualización y eliminación de películas. 

Se estableció una cobertura de código del 80% como objetivo, lo que significa que al menos el 80% de las ramas, funciones y líneas de código a nivel global están siendo testeadas. Dentro de la configuración también se ignoran ciertos patrones de archivos para la cobertura (módulos externos, routers, pruebas, entres otros).

Comprobaciones:

✅ Se verifica que las respuestas sean las esperadas en cada caso (códigos de estado, contenido del cuerpo de la respuesta).

✅ Se comprueba que se manejan correctamente los errores (validación, datos incompletos, ID inexistente, etc.).

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- GETTING STARTED -->
## Guia de inicial

Para poner en funcionamiento una copia local, sigue estos sencillos pasos.

### Prerequisitos

Asegúrate de tener instalados los siguientes elementos antes de comenzar

- [Node.js] (https://nodejs.org/) (versión 20.11.1)
- [PostgreSQL] (https://www.postgresql.org/)

También necesitarás las credenciales de la base de datos que desees implementar  [Documentación_PostgreSQL] (https://www.postgresql.org/).

### Instalacion

1. Clonar el repositorio
   ```sh
   git clone https://github.com/Angiedylexx/Typescript_Jest
   ```
2. Ve al directorio del proyecto
   ```sh
   cd TYPESCRIPT_JEST
   ```
3. Instalar paquetes NPM
   ```sh
   npm install
   ```
4. Crea un archivo ".env" en la raíz del proyecto y configura las variables de entorno necesarias. Puedes consultar el archivo ".env.sample" para obtener un ejemplo de como configurar estas variables.
   
5. Compila el código TypeScript:
   ```sh
   npm run tsc
   ```

6. Ejecuta la aplicación:

Puedes iniciar la aplicación de una de las siguientes maneras, importante haber compilado con anterioridad el código TypeScript

A. Usando npm (Recomendado para entorno de producción):
   ```sh
   npm start
   ```
B. Usando Node.js directamente 
   ```sh
   node index.js
   ```
La aplicación debería estar en funcionamiento en http://localhost:3000, o en el puerto que hubieras dispuesto en tus variables de entorno.

6. Ejecuta los test unitarios:
    ```sh
    npm test
    ```
Nota:Se ha establecido una cobertura de código del 80% como objetivo de configuración. 

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- CONTACT -->
## Contactos

**Autor (Angie Carolina Reyes)**

- [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5?logo=linkedin&color=0077B5)](https://www.linkedin.com/in/carolinarbackendingenieriamecanica/)
- [![Correo electrónico](https://img.shields.io/badge/Correo%20electrónico-%230077B5?logo=gmail&color=0077B5)](mailto:angiedylexx@gmail.com)
- [![GitHub](https://img.shields.io/badge/GitHub-%230077B5?logo=github&color=0077B5)](https://github.com/Angiedylexx)

Enlace del proyecto: [https://github.com/Angiedylexx/Typescript_Jest](https://github.com/Angiedylexx/Typescript_Jest)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[author-shield]: https://img.shields.io/badge/author-AngieReyes-brightgreen.svg?style=for-the-badge
[author-url]: https://github.com/Angiedylexx