
<h1 align="center">
    <br>
    <p align="center">Projeto Final <p>
</h1>
<p align="center">
<img src="./src/assets/logo.gif .gif"
width="350" height="300"/>
</p>
<br>

## 💻 Sobre o projeto 

<br>

 API desenvolvida como Projeto Final com o auxílio da professora Paula Allemand para a conclusão do curso de Backend  [{Reprograma}](https://reprograma.com.br/)

<p align="justify"> Este projeto nasceu a partir do meu interesse em melhorar minha relação com o dinheiro, esse ano recebi uma bolsa do curso dinheiro sem medo do Eduardo amuri que ensina conteúdos voltados a esse tema,quero que pessoas de baixa renda tenham acesso a Educaçao finaceira gratuita  como eu ,porque sendo uma pessoa de baixa renda sei das dificuldades que familias humildes enfrentam, como falta de dinheiro no final do mes, endividamento, nome no serasa,  isso acontece não só devido a desigualdade social mas também pela falta da educaçao financeira em sua formação. Em  2020 quando a pandemia chegou em marco tirando, vidas, empregos e a esperanca, tudo se tornou complicado e afetou principalmente os mais pobres por isso quero que moradores de periferia  aprendam sobre planejamento financeiro, para enfrentar melhor os desafios.

<p align="justify">Apesar do aumento da desigualdade e do desemprego, há pessoas que também se disponibilizam a ajudar, então o objetivo principal da construção dessa API, é a conexão de pessoas interessadas em aprender sobre o tema , com as pessoas que têm a possibilidade de ajudar. Por meio de doar seu tempo e conhecimento. Sempre com a preocupação de proteção dos dados de todos os envolvidos.

<p align="justify">Com o pensamento no futuro de se tornar um projeto grande que se torne viável levar para outros estados essa iniciativa.

<br><br>

## 🚀 Descrição da API Projeto final

<br>

<p align="justify">O projeto é uma API REST que permite que pessoas com conhecimento em Educaçao financeira e que queiram doar um pouco de seu conhecimento e tempo sejam voluntárias e , consigam se cadastrar,  descrevendo informações sobre disponibilidade, localidade, de forma objetiva, para que haja a conexões com os céus participantes dessa iniciativa e também os moradores da comunidade, que estejam procurando mais conhecimento sobre finanças , contendo assim dois cadastros, um para os centros educacionais unificados(céus), e outro para os instrutores que querem fazer uma busca dos locais participantes e  que estejam procurando voluntários, tendo assim uma opção de login para estas que buscam ajudar, conseguindo acesso as informações de quem está cadastrado no sistema.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível listar tanto os céus interessados na parceria com o projeto como a quem deseja ser instrutor,sendo as opções  cadastrar novos usuários, atualizar os dados e deletar o cadastro do usuário. 

  
<br>

## 🔗 Link 

- [Apresentação]()

<br>

## ⚙️ Funcionalidades/Objetivos

- Listar todas as pessoas que estão cadastradas no sistema;
- Listar pessoas por ID.
- Cadastrar pessoas que estejam interessadas em ser um instrutor(a) e céus que queiram participar do projeto;
- Atualizar os dados dessa pessoa, caso haja mudança de bairro,  email, celular;
- Deletar o profissional ou local  caso não queira continuar no projeto;
<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)


<br>

## 📁 Arquitetura MVC 

```
 📁 Projeto-f
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 financasController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |
   |    |- 📁 models
   |         |- 📑 financasCadastroSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 financasRoutes.js 
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:8854

* Heroku: https://edilaine.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Retorna teste com apresentação: 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:8854/`     |  Mensagem de apresentação (Index)    |             |

<br>

## 🔃 Manipulação das Rotas de Usuários:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/all`                | Retorna todos os usuários            |
| GET          | `/all/:id`            | Retorna todos os usuarios por ID     |
| POST         | `/criar`                | Cria/cadastra um novo usuário        |
| PUT          | `/atualizar/:id`        | Altera informações de um usuário     |
| DELETE       | `/deletar/:id`          | Deleta um usuário específico         |

<br>



## ✅ Dados para Collection Projeto final:

- id: gerado automaticamente 
- nome: texto e obrigatório
- email: texto e obrigatório



<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
    {
    "nome" : "rafael vilela",
    "email": "rafael.vilela@gmail.com",
    "idade" : 40

}
}
```
 <br>



## 🚧 Melhorias para o futuro (Em construção)

<br>

* Realizar a construção do front-end
* Incrementar autenticação 
* Adicionar testes


Caso tenha alguma sugestão, estou aberta a ouvir.

<br>

## 👨‍💻 Autora Edilaine silva

<br>

<td align="center"><a href="https://github.com/Edilainesds">

## espaco Agradecimentos finais

## [Edilaine silva](https://github.com/Edilainesds)
## [LinkedIn](https://www.linkedin.com/in/edilaine-silva-a683a1105/) 

<br>
