# react-common-components-library 
 Librería de componentes React (Empathy.co) [react-common-components-library](https://github.com/DarioLM/react-common-components-library).

## Tecnologías usadas

- TypeScript
- SASS
- React
- Webpack: Code Splitting, SplitChunks.
- Jest
- StoryBook: Como visualizador y playground de los componentes y sus diferentes estados.

### `yarn storybook o npm run-script storybook`

Compilará y abrirá el [Storybook](http://localhost:6006/) del proyecto en el puerto 6060.<br />

### `yarn test o npm run-script test`

Lanzará Jest contra todos los tests disponibles en el proyecto.

### `yarn build o npm run-script build`

Se compilará (en modo producción) la aplicación para permitir su publicación y posterior uso.
Cabe destacar que "prePublish" está configurado para ejecutar build antes de cada "npm publish".

## Datos de interés

Todos los componentes se pueden consultar y visualizar en el **Storybook**.

Se han configurado los "entry points" de la aplicación de forma que cada componente individual [Button, Link, TabsPanel] se
exponga en chunks separados, permitiendo imports dinámicos y evitando que todo se junte en un mismo bundle.

La síntaxis para el uso beneficíandose de dicha configuración es:

- import *Componente* @dariolm/react-common-components-library/modules/*componente