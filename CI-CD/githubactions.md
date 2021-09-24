# Github Actions

- Primero vamos a crear en nuestro proyecto, en la raíz una carpeta llamada: `.github`.
- Dentro de la carpeta `.github` crearemos otra carpeta llamada: `workflows`
- Dentro de la carpeta crearemos un archivo llamada `deploy.yml`

En el archivo `deploy.yml`, es donde realizaremos la configuración.

```
name: Deployment
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install Packages
      run: npm install
    - name: Build page
      run: npm run build
    - name: Deploy to gh-pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # esta la toma automagicamente github no hya necesidad de nada mas
        publish_dir: ./build
```

En este archivo en el `on:` en branches debemos colocar el nombre de nuestra rama por defecto: `main`

Guardamos nuestro archivo, hacemos un commit y un push
