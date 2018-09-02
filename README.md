# Link Catcher
Biblioteca destinada a filtrar links em linguagem *markdown*

## Instalação
+ Requer Node.js, NPM e Lodash. Caso não possua, acesse: 
	1. [Node + NPM](https://nodejs.org/en/download/);
	2. [Lodash](https://lodash.com/);
+ Utilize o terminal e insira, de preferência na pasta onde quer utilizar a biblioteca:
```
$ npm install dc-link-catcher-lib
```

## Uso
```
$ node
> const library = require("dc-link-catcher-lib")
> library.getLinksFromMd("este é o link do [google] (www.google.com)") 
> //[ {href: "www.google.com", text: "google"} ]
```

## Roadmap oficial

#### versão 3.0.0 (prevista para dezembro/2018)
+ Transcrição do README para inglês e espanhol

#### versão 2.0.0 (prevista para novembro/2018)
+ Implementação de reconhecimento de URL's mais complexos, englobando, além do protocolo, domínio e caminhos da versão 1.0.0: porta, recurso, query_string e fragmento

#### versão 1.0.0 (released)
+ Extrai links em *markdown*
+ É capaz de reconhecer links que, além do domínio, possuam ou não protocolo (http://, https://) e caminho (/path)
