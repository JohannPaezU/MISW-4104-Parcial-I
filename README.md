# MISW-4104 Parcial I

Esta es la solución al ejercicio práctico del parcial I de la materia de  "Conceptos básicos de ingeniería de software para la web" de la Maestría en Igeniería de Software.


## NurseryPlantsApp

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Prerequisitos
Para poder ejecutar este proyecto debes tener:

* [Angular](https://angular.io/)
* [Node.js](https://nodejs.org/en)

## Servidor de Desarrollo

Ejecute `ngserve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

## Construir el proyecto

Ejecute `ng build` para construir el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Correr pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

Se realizaron las respectivas correciones de las pruebas por defecto en "app.component" y "plant.service".
Funcionalidades probadas en el componente "plant-list-component":
* Verificar que exista el componente de la tabla que contiene la información.
* Verificar que exista un encabezado en la tabla.
* Verificar que existan 3 filas o elementos en la tabla.
* Verificar que existan 4 columnas en la tabla.
* Verificar que la información de la tabla se muestre correctamente con los datos aleatorios generados:
  * Los ids generados coinciden con la información mostrada en la columna correspondiente.
  * Los nombres comunes generados coinciden con la información mostrada en la columna correspondiente.
  * Los tipos generados coinciden con la información mostrada en la columna correspondiente.
  * Los climas generados coinciden con la información mostrada en la columna correspondiente.

![TestUnitariosParcial-I](https://github.com/JohannPaezU/MISW-4104-Parcial-I/assets/158114089/c4e38a75-4498-4499-b4a4-ac0926ee2b2f)

## Licencia
Desarrollado por **Johann Páez**.

Este programa es de uso gratuito, puede ser utilizado por cualquier persona.

Los términos de la licencia se pueden encontrar en el siguiente archivo. [License](LICENSE).
