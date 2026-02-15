# 🚀 Desafio - Projeto QA: TwiDIO API (Node + TypeScript)

Este projeto faz parte do Bootcamp de QA e tem como objetivo desenvolver e validar uma **API REST para gerenciamento de posts**, aplicando conceitos de **arquitetura em camadas**, **testes unitários**, **testes de integração** e boas práticas com **Node.js + TypeScript**.

---

## 📚 Objetivo do Projeto

Neste desafio foram aplicados:

- Estruturação de API REST
- Separação de responsabilidades (Controller, Service, Repository)
- Persistência com TypeORM + SQLite
- Testes unitários com Jest
- Testes de integração com Supertest
- Documentação com Swagger
- Organização de projeto para portfólio

---

## 🧠 Tecnologias e Conceitos Aplicados

- ✅ Node.js  
- ✅ TypeScript  
- ✅ Express  
- ✅ TypeORM  
- ✅ SQLite  
- ✅ Jest  
- ✅ Supertest  
- ✅ Swagger  
- ✅ Arquitetura em Camadas  
- ✅ Boas práticas de organização de código  

---

## 🗂️ Estrutura do Projeto

```

📁 projetoQA_twidio_savePost
│
├── 📁 src
│   ├── 📁 **mocks**
│   ├── 📁 controllers
│   ├── 📁 services
│   ├── 📁 repositories
│   ├── 📁 entities
│   ├── 📁 database
│   │   ├── 📁 migrations
│   │   ├── database.sqlite
│   │   └── database.test.sqlite
│   ├── 📁 tests
│   ├── 📄 app.ts
│   ├── 📄 index.ts
│   └── 📄 routes.ts
│
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 README.md

````

---

## ▶️ Como Rodar o Projeto Localmente

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/projetoQA_twidio_savePost.git
cd projetoQA_twidio_savePost
````

### 2️⃣ Instale as dependências

```bash
yarn install
```

### 3️⃣ Rode a aplicação

```bash
yarn dev
```

A API estará disponível em:

```
http://localhost:5001/v1/
```

### 📄 Documentação Swagger

```
http://localhost:5001/doc
```

---

## 🧪 Executando os Testes

### ✅ Testes Unitários

```bash
yarn test:unit
```

### ✅ Testes de Integração

Certifique-se que a aplicação está rodando:

```bash
yarn dev
```

Depois execute:

```bash
yarn test:integration
```

---

## 🔌 Endpoints Disponíveis

### 🔹 GET /posts

Retorna todos os posts cadastrados.

```
GET http://localhost:5001/v1/posts
```
![GET](./src/assest/GetApitest%2001.png)
---

### 🔹 POST /posts

Cria um novo post.

```
POST http://localhost:5001/v1/posts
```
![POST](./src/assest/PostApitest%2002.png)
Body:

```json
{
  "author": "author@email.com",
  "content": "Post de exemplo"
}
```

---

## 🏗️ Arquitetura da Aplicação

### 📂 Controllers

Responsáveis por receber a requisição e aplicar validações iniciais.

### 📂 Services

Contêm as regras de negócio da aplicação.

### 📂 Repositories

Responsáveis pela comunicação com o banco de dados.

### 📂 Entities

Definem a estrutura das tabelas e entidades do sistema.

### 📂 Database

Configuração e gerenciamento da conexão com o banco SQLite.

---

## 🎯 Desafios e Próximos Passos

* [ ] Implementar rota para listar posts por usuário
* [ ] Implementar exclusão de post
* [ ] Aplicar TDD nas novas funcionalidades
* [ ] Implementar validação com class-validator
* [ ] Adicionar tratamento global de erros

---

## 💡 Aprendizados

* Organização de API REST em camadas
* Uso de TypeORM com SQLite
* Configuração de testes com Jest
* Testes de integração com Supertest
* Resolução de conflitos de dependências em projetos Node legados
* Padronização de ambiente com cross-env

---

## ✍️ Autor

Desenvolvido por **Dev Júnior** — em transição de carreira para Desenvolvimento de Software 🚀

📌 LinkedIn:
[https://www.linkedin.com/in/j-júnior-78b80a36](https://www.linkedin.com/in/j-júnior-78b80a36)

📌 GitHub:
[https://github.com/JJunior80](https://github.com/JJunior80)

---

## 🚀 Happy Hacking!

# API_projeto_QA_twidio_savePost
