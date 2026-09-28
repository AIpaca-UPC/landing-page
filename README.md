# Rumbo — Landing Page

Landing Page de **Rumbo** para el curso **1ASI0730 Aplicaciones Web** (NRC 8137, ciclo 2026-20).

Esta primera versión toma como base la propuesta visual desarrollada previamente para Rumbo y la adapta al alcance actual del proyecto de Aplicaciones Web.

## Alcance AV1

La Landing Page cubre las User Stories de AV1:

- **US31:** Conocer la propuesta de valor de Rumbo.
- **US32:** Identificar beneficios por segmento e ingresar a la experiencia de Rumbo.
- **US33:** Consultar el contenido en inglés o español.
- **US34:** Consultar Terms of Service y Privacy Policy.
- **US35:** Resolver dudas mediante FAQ y contacto.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Responsive Web Design
- Internationalization con `en_US` y `es_419`
- Accessibility con HTML semántico y atributos ARIA

El idioma predeterminado es inglés y la preferencia de idioma se conserva durante la sesión.

## Estructura

- `index.html`: Landing Page.
- `css/styles.css`: estilos responsive.
- `js/app.js`: navegación, FAQ, selector de idioma y validación de contacto.
- `terms.html`: Terms of Service.
- `privacy.html`: Privacy Policy.

## Control de versiones

Se utiliza GitFlow con `main`, `develop` y ramas `feature/*`. Los commits siguen Conventional Commits y las versiones publicadas seguirán Semantic Versioning.

## Repositorios relacionados

- Project Report: https://github.com/AIpaca-UPC/web-applications-project-report
- Frontend Web Application: https://github.com/AIpaca-UPC/web-applications-web-app
- Web Services: https://github.com/AIpaca-UPC/web-applications-web-service
