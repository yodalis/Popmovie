<p align="center">
<img src="https://media.giphy.com/media/fAnzw6YK33jMwzp5wp/giphy.gif" style="width: 30,
0px;">
</p>

# NodeJS

> Com o intuito de não precisar mais ficar perdido na hora de iniciar um backend em node, criei esse repositório com um projetinho base que pode ajudar outras pessoas nesse processo.


<h3 align="center"> 
	 🚀 Status atual:  Aprendendo 🤓 
</h3>

## Pré-requisitos
Antes de iniciar com o projeto é necessário o [NodeJS](https://nodejs.org/en/download/) e um editor de texto bacana de sua preferência, como o [VSCode](https://code.visualstudio.com/download).

## Iniciando

### 1. Iniciando o NPM:
NPM, ou para os mais chegados, Node Package Manager é o gerenciador de pacotes do node, com ele você pode adicionar vários tipo de pacotes/bibliotecas que serão usadas para deixar o nosso código "mais inteligente", pra você não precisar inventar mais do mesmo, né?


Não esquece de fazer os próximos passos em uma pasta separada, tá?


Para dar uma boa agilizada, copie as pastas a seguir para a sua pasta:

* bin
* config
* modules
* routes
* e os arquivos, package.json e app.js

### 2. Dentro dos arquivos

Aqui nesse tópico, nós já estaremos fazendo as coisas dentro do código, ok?

* Caso você queira, você pode alterar o nome do projeto no arquivo package.json, substituindo  "pi-ads-2019-2-root" para o que desejar.

### 3. Testando as rotas


Antes de iniciar o projeto, você vai precisar instalar as dependências usadas para que o projeto funcione, digitando o comando:

```bash
   $ npm i
```
Isso vai fazer com que ele leia do arquivo package.json, quais as dependências necessárias (localizadas em dependecies) com suas respectivas versões.

Para que não seja necessário você ter que ficar reiniciando o projeto no terminal a cada alteração, nós vamos adicionar a dependência 'Nodemon', que faz isso de forma automática.

``` bash
    $ npm i nodemon
```
(Para instalar apenas no seu projeto (o que eu recomendo))


``` bash
    $ npm i -g nodemon
```
(Para instalar de forma global, ou seja, dentro do seu PC)


Para que ele funcione, você vai precisar alterar no arquivo package.json, na linha 7, de node para nodemon.

Antes

``` json
   "start": "node ./bin/www",
```


Depois

``` json
   "start": "nodemon ./bin/www",
```

Após instalar as dependências, nós precisar testar né? Dando nosso famoso, npm start.


### 3a. Postman

Agora para prosseguirmos, nós vamos precisar instalar o [Postman](https://www.postman.com/downloads/), que é um programa bem legal para testarmos as requisições do nosso projeto. 

Para criar uma nova requisição, você deve apertar no + que aparece bem no meio da tela.


![criando uma nova requisição](https://user-images.githubusercontent.com/64108336/99907015-266a3a80-2cb9-11eb-853f-b5241da5fa34.png)


Após isso, do lado do GET você coloca a rota que deseja testar, como por exemplo no meu caso, eu testei a rota:

``` bash 
   localhost:3000/usuarios
 ```

 Que é a rota que testa os login dos usuarios, o cadastro de um novo usúario, etc.


 ### 3b. Mudanças no model e no router

Após colocar um exemplo como esse no GET, você vai precisar adaptar a API ao seu projeto, editando os dados lá no config.js, esses dados que você vai precisar editar estão todos lá na Azure, como já dito pela Prof Fernanda em aula.

Depois de editar o config de acordo com seu projeto, você vai precisar adaptar as tabelas de acordo com seu projeto também.

Mas como eu edito essas tabelas?

Boa pergunta! Você vai mexer em dois arquivos, tanto o arquivo usuario.js (ou a tela equivalente a que você quer editar/testar) do Routes, quanto na do Models.

Como no meu exemplo, eu tive que editar o login para email por que era assim que estava no meu banco, ele ficou exatamente assim no models:

``` javascript 
module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
```