# Portafolio de certificados — Jair Arias

Sitio web personal para presentar certificados de cursos y formación profesional, listo para publicar con GitHub Pages.

## Publicación

1. Inicia sesión en GitHub con la cuenta `JairArias20`.
2. Crea un repositorio llamado `certificados` (o el nombre que prefieras). Para esta guía, usa `certificados`.
3. Selecciona **Public**.
4. En **Add file → Upload files**, sube el contenido de esta carpeta: `index.html`, `styles.css`, `script.js`, `README.md` y la carpeta `certificados`.
5. Pulsa **Commit changes** para guardar los archivos en la rama principal.
6. Ve a **Settings → Pages**.
7. En **Build and deployment**, deja **Deploy from a branch**.
8. En **Branch**, elige `main` y en la carpeta elige `/(root)`. Pulsa **Save**.
9. Espera unos minutos y revisa la dirección que aparece en esa sección.

Si el repositorio se llama `certificados`, la URL esperada será:
https://jairarias20.github.io/certificados/

Si el nombre del repositorio es distinto, la ruta final también será distinta. Usa siempre la URL que GitHub muestre en **Settings → Pages**.

## Agregar certificados

1. Sube los PDFs a la carpeta `certificados`.
2. En `index.html`, busca las tarjetas `<article class="certificate-card"...>`.
3. Actualiza el título, institución, año, categoría y enlace del PDF.
4. Para un archivo llamado `excel-avanzado.pdf`, el enlace será `certificados/excel-avanzado.pdf`.
5. Para añadir otra tarjeta, duplica un bloque `<article class="certificate-card"...>` completo.

Categorías disponibles: `mantenimiento`, `software` y `gestion`.

## Perfil

El nombre, la descripción profesional y el enlace de LinkedIn ya están personalizados para Jair Arias. Revisa el texto antes de publicar.

## Privacidad

El repositorio y los certificados publicados serán accesibles públicamente. Asegúrate de que los documentos no expongan datos personales que no quieras compartir, como DNI, domicilio o códigos privados.
