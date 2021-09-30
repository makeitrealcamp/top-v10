# Cloudinary React SDK

La biblioteca de marco de interfaz React de Cloudinary proporciona capacidades de renderizado de imágenes y complementos que puede implementar utilizando código que se integra perfectamente con su aplicación React existente.

## Arquitectura
La biblioteca del marco de interfaz de React debe usarse junto con la biblioteca Cloudinary JavaScript SDK v2 para proporcionar toda la funcionalidad de transformación y optimización de Cloudinary.

Dos repositorios de GitHub proporcionan toda la funcionalidad:

- [js-url-gen](https://github.com/cloudinary/js-url-gen) contiene toda la funcionalidad necesaria para crear URL de entrega para sus activos de Cloudinary en función de las acciones de configuración y transformación que especifique. Toda la funcionalidad `js-url-gen` se instala a través del paquete `@cloudinary/url-gen package`.

- frontend-frameworks contiene las bibliotecas de framework y complementos que se pueden usar para representar imágenes y videos en su sitio. Hay diferentes paquetes de instalación para cada framework, por ejemplo, React se instala a través de `@cloudinary/react`, y Angular se instala a través de `@cloudinary/angular`.

## Empezando con React

### Instalación
Instale los paquetes JavaScript SDK v2 y React usando el administrador de paquetes NPM:

```bash
npm i @cloudinary/url-gen @cloudinary/react --save
```

### Configuración
Puede especificar los parámetros de configuración que se utilizan para crear las URL de entrega, ya sea mediante una instancia de Cloudinary o por imagen/vídeo.

### Configuración de instancia de Cloudinary

Si desea utilizar la misma configuración para entregar todos sus activos de medios, es mejor configurar la configuración a través de una instancia de Cloudinary, por ejemplo:

```jsx
import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

const App = () => {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image('sample');

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};
```
Puede establecer otros parámetros de configuración relacionados con su nube y URL según sea necesario, por ejemplo, si tiene su propio nombre de dominio personalizado y desea generar una URL segura (HTTPS):

```jsx
// Create a Cloudinary instance, setting some Cloud and URL configuration parameters.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  },
  url: {
    secureDistribution: 'www.example.com',
    secure: true
  }
});

// This creates a URL of the form: https://www.example.com/demo/image/upload/sample
```

### Configuración de la instancia de activos
Si necesita especificar diferentes configuraciones para entregar sus activos multimedia, puede especificar la configuración por instancia de imagen/video, por ejemplo:

```jsx
import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen/assets/CloudinaryImage";
import URLConfig from "@cloudinary/url-gen/config/URLConfig";
import CloudConfig from "@cloudinary/url-gen/config/CloudConfig";

const App = () => {

  // Set the Cloud configuration and URL configuration
  let cloudConfig = new CloudConfig({cloudName: 'demo'});
  let urlConfig = new URLConfig({secure: true});

  // Instantiate and configure a CloudinaryImage object.
  let myImage = new CloudinaryImage('sample', cloudConfig, urlConfig);

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};
```

### Transformaciones
Para transformar un recurso multimedia, use el paquete `@cloudinary/url-gen` para crear la transformación, luego pase la imagen transformada o el objeto de video al atributo `cldImg` en su componente `AdvancedImage` para representar los medios en su sitio. Por ejemplo:

```jsx
import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

const App = () => {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image('front_face');

  // Apply the transformation.
  myImage
  .resize(thumbnail().width(150).height(150).gravity('face'))  // Crop the image, focusing on the face.
  .roundCorners(byRadius(20));    // Round the corners.

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};
```

la imagen de `front_face` se recorta a una miniatura de 150 x 150 píxeles con esquinas redondeadas, centrándose en la cara, lo que da como resultado esta URL:

```
https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face
```

### Plugins
La biblioteca Cloudinary React proporciona complementos para renderizar los medios en su sitio de la manera más óptima y mejorar la experiencia de su usuario:

- Lazy Loading para retrasar la carga de imágenes si aún no están visibles en la pantalla.
- Responsive para cambiar el tamaño de sus imágenes automáticamente según el tamaño de la ventana gráfica.
- Image accessibility para hacer que sus imágenes sean más accesibles para sus usuarios con discapacidades visuales.
- Image placeholders para mostrar una versión ligera de una imagen mientras se descarga la imagen de destino.

Tanto la carga diferida como los marcadores de posición de imagen son excelentes técnicas para ayudar a optimizar los tiempos de carga de su página y, a su vez, mejorar sus métricas relacionadas con Core Web Vitals.

En este ejemplo, se aplican los complementos receptivos y de accesibilidad:

```jsx
import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";

// Import plugins
import {AdvancedImage, lazyload, accessibility, responsive, placeholder} from '@cloudinary/react';

 const App = () => {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // Use the image with public ID, 'sample'.
  const myImage = cld.image('sample');

  // Use the responsive and accessibility plugins
  return (
    <div>
      <AdvancedImage cldImg={myImage} plugins={[responsive(), accessibility()]}/>
    </div>
  )
};
```
