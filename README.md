# Encriptador de Mensajes

## Descripción

Esta es una aplicación web simple que encripta y desencripta textos, permitiéndote intercambiar mensajes secretos con otras personas que conozcan el método de encriptación utilizado.

## Llaves de Encriptación

- La letra "e" se convierte en "enter"
- La letra "i" se convierte en "imes"
- La letra "a" se convierte en "ai"
- La letra "o" se convierte en "ober"
- La letra "u" se convierte en "ufat"

Por ejemplo:
- "gato" se convierte en "gaitober"
- "gaitober" se convierte en "gato"

## Requisitos

- La aplicación solo funciona con letras minúsculas.
- No deben utilizarse letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra a su versión encriptada y devolver una palabra encriptada a su versión original.

## Características

- **Encriptar**: Convierte un texto de entrada a su versión encriptada.
- **Desencriptar**: Convierte un texto encriptado a su versión original.
- **Copiar**: Copia el texto encriptado o desencriptado al portapapeles.

## Instrucciones

1. Ingresa el texto que deseas cifrar o descifrar en el área de texto.
2. Presiona el botón "Cifrar" para encriptar el texto o "Descifrar" para desencriptarlo.
3. El resultado se mostrará en la pantalla.
4. Puedes copiar el resultado utilizando el botón "Copiar".

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos y directorios:


### `index.html`

Contiene la estructura HTML de la aplicación.

### `styles/styles.css`

Contiene los estilos CSS para la aplicación.

### `javascript/logic.js`

Contiene el código JavaScript que maneja la lógica de encriptar, desencriptar y copiar el texto.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/encriptador-de-mensajes.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd encriptador-de-mensajes
    ```
3. Abre el archivo `index.html` en tu navegador web preferido.

## Uso

1. Abre el archivo `index.html` en tu navegador web.
2. Sigue las instrucciones proporcionadas en la sección de Instrucciones.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama con tus cambios:
    ```sh
    git checkout -b my-feature-branch
    ```
3. Realiza tus cambios y haz commit:
    ```sh
    git commit -m 'Agregar nueva característica'
    ```
4. Sube tus cambios a tu fork:
    ```sh
    git push origin my-feature-branch
    ```
5. Crea un Pull Request explicando tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo [LICENSE](LICENSE).

---

¡Gracias por usar el Encriptador de Mensajes! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.
