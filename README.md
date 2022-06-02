![styles](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![styles](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![styles](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![styles](https://img.shields.io/badge/ARRAY-gray?style=for-the-badge&logo=json&logoColor=white)
# Aplicación Angular - Página simple de Heroes de Marvel

Proyecto de SPA sobre los heroes de Marvel, Elaborado en [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6, Typescript, Bootstrap 4, carga de datos desde array.

[DEMO](https://rgomez2978.github.io/angular-marvel-spa/)


## Instalación de Librerias
---

A continuación se indican las librerias necesarias para la ejecución del proyecto.

    npm install jquery --save-dev
    npm install @types/jquery --save-dev
    npm install -D @types/jquery --save-dev
    npm install jquery.easing --save-dev
    npm install animate.css --save-dev
    npm install bootstrap --save -exact
    npm install zone.js --save-dev
    ng add angular-cli-ghpages


## Levantar proyecto Angular
---

    ng serve
    ng serve -o


## Exportar proyecto - Build
---

Ejecute el comando `ng build` para exportar el proyecto. Al exportar el proyecto se almacenarán en el directorio `docs/`. Utilice el flag `--base-href` para exportar hacia produccion.

    ng build --base-href=https://rgomez2978.github.io/angular-marvel-spa/

## Exportar proyecto en rama githubpage
---

Ejecute el comando `ng deploy` para exportar el proyecto. Al exportar el proyecto se almacenarán en el directorio `docs/`. Utilice el flag `--base-href` para exportar hacia produccion.

    ng deploy --base-href=https://rgomez2978.github.io/angular-marvel-spa/


## Screenshots del proyecto