# Hello World, Node[!]

## Node JS - Módulos Básicos

```javascript
require('http')
require('url')
require('fs')
```

Qual a porta padrão? - 8080

## Heroku

O Heroku poderá utilizar o arquivo package.json do NPM como referência

Informe no package.json qual o arquivo que dá inicío à aplicação:

```javascript
"scripts":{
    "start": "node hello.js"
}
```

Heroku utiliza um arquivo Procfile para configuração. Crie e adicione:

```
web: node hello.js
```

Para criar um app:

- Logue no terminal: heroku login
- Execute o comando: heroku create
- Para alterar a url do app execute: heroku rename \<new name\>
- Como tudo configurado, execute: git push heroku master

## NPM

Ao iniciar o NPM informe como versão o mesmo valor da versão atual do Node.js utilizado
