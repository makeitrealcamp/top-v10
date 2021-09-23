# Storybook

Cuando creamos aplicaciones con React, Angular o Vue podemos tener miles de componentes en nuestra aplicación y estructura de archivos. Se puede volver un caos si nuestras carpetas no están bien organizadas e incluso así es complicado buscar cierto componente. Sin embargo, una herramienta muy útil a utilizar es Storybook.

Storybook nos permite tener una librería de nuestros componentes para navegar, ver diferentes estados, desarrollarlos e interactivamente testearlos, entre otras. Storybook corre por fuera de nuestra aplicación en un ambiente aislado.

# Añadir storybook a un proyecto

```bash
npx  sb init
```

Tenemos nuestro storybook que podemos correr con `npm run storybook`

Podemos ver esta interfaz

## Stories

Debes tener un componente al cual crear una historia. Ejemplo `<Card />`

```jsx
/* eslint-disable */
import Card from './index';

export default {
  title: 'Componets/Card',
  component: Card,
  argTypes: {
    date: { control: 'date' },
  },
};

const Template = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Creando un storybook',
  author: 'Cristian Moreno',
};

export const Full = Template.bind({});
Full.args = {
  title: 'Creando un storybook',
  author: 'Cristian Moreno',
  image: null,
};
```


## Conclusion
Por supuesto, esto es solo un ejemplo sencillo de cómo podemos aprovechar storybook para tener un orden visual y agradable de los componentes que tenemos en nuestra aplicación. No solo es agregar componentes, también funciona para conocer el estado y las diferentes acciones que realizan dichos componentes.

No esta únicamente disponible para React, puede ser usado por diferentes frameworks y librerías, puedes conocerlas todas en su página web y ahondar mucho más sobre esto.
