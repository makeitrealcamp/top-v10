# Eslint
- Rules
- Configurar las reglas, basasdas en una guia previa y sumando las propias
- En nuestro IDE los plugins del eslint

## Instalar

```bash
npm i -D eslint
```

## Configuration

```bash
npx eslint --inint
```

Responder las preguntas del CLI

Esto va a generar un archivo como el siguiente:

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
```

## Prettier
Formatear el codigo de una forma bonita

```bash
npm i -D eslint-config-prettier
```

Y configurar el plugin en el eslint (linea 40, 29)

### Configuration Overrides
En el archivo `.prettierrc`
```
{
  "printWidth": 180
}
```

## VS Code

- instalado los plugins
- Crear dentro de la carpeta `.vscode` un archivo `settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Editor Config

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
