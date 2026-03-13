# Tripleten web_project_around
Página: https://dafpineda.github.io/web_project_around/
# Descripción

Este proyecto consiste en una aplicación web interactiva donde los usuarios pueden gestionar un perfil y una colección de tarjetas con imágenes.
La aplicación implementa buenas prácticas de desarrollo frontend como manipulación del DOM, modularización del código y consumo de una API externa. Además, utiliza una arquitectura basada en clases para organizar la lógica de la aplicación.
El diseño fue proporcionado previamente y se implementó siguiendo principios de maquetación responsive, permitiendo su correcta visualización en dispositivos móviles, tabletas y escritorio.

# Funcionalidades
* Edición de la foto de perfil con solo un link
* Edición del nombre y descripción del usuario
* Agregar más cartas con un titúlo y un link
* Interacción con las imagenes
* Dar like y dislike
* Borrar elementos

Todas estas acciones son persistentes, ya que la información se guarda y se gestiona mediante una API externa, además de incluir validaciones de formulario para evitar el envío de datos inválidos.

# Tecnologías 

* HTML5 para la estructura de la página.
* CSS3 para estilos y diseño responsivo.
* JavaScript (ES6+) para la lógica de la aplicación.
* Fetch API para la comunicación con el servidor.
* Git y GitHub para control de versiones.

# Arquitectura del proyecto
El proyecto está organizado utilizando programación orientada a objetos (OOP).

Algunas características de la arquitectura incluyen:
* Separación de responsabilidades mediante clases.
* Uso de un archivo constants.js para centralizar selectores y configuraciones.
* Manejo de la comunicación con el servidor mediante una clase Api.
* Creación y renderizado de tarjetas utilizando clases independientes.
* Uso de herencia entre clases para reutilizar lógica en componentes como formularios y popups.