# 🚀 Desafio QA — TwiDIO API (Node + TypeScript)

Este projeto faz parte do Bootcamp de QA e foi desenvolvido como evolução do desafio proposto, com foco em:

* Organização real de API backend
* Correção de inconsistências estruturais
* Testes de integração funcionando corretamente
* Separação clara de responsabilidades
* Resolução de conflitos comuns em ambiente TypeScript + Jest

Este repositório serve também como **guia prático de solução para dificuldades comuns encontradas no módulo**.

---

# 📚 Objetivo do Projeto

Construir e validar uma **API REST para gerenciamento de posts**, aplicando:

* Arquitetura em camadas (Controller → Service → Entity)
* Persistência com TypeORM + SQLite
* Testes automatizados com Jest e Supertest
* Organização profissional de projeto

---

# 🧠 Stack Utilizada

* Node.js
* TypeScript
* Express
* TypeORM
* SQLite
* Jest
* Supertest
* Swagger

---

# 🗂️ Estrutura Final do Projeto

```
📁 src
│
├── 📁 controllers
│   ├── GetAllPostController.ts
│   ├── SavePostController.ts
│   └── MessageController.ts
│
├── 📁 services
│   ├── GetAllPostService.ts
│   └── SavePostService.ts
│
├── 📁 entities
│   └── Post.ts
│
├── 📁 database
│   ├── data-source.ts
│   ├── database.sqlite
│   ├── database.test.sqlite
│   └── migrations/
│
├── 📄 app.ts
├── 📄 routes.ts
├── 📄 server.ts
└── swagger.json
│
📁 tests
└── posts.test.ts
```

---

# ▶️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/projetoQA_twidio_savePost.git
cd projetoQA_twidio_savePost
```

### 2️⃣ Instalar dependências

```bash
yarn install
```

### 3️⃣ Rodar a aplicação

```bash
yarn dev
```

A API estará disponível em:

```
http://localhost:5001/v1
```

---

# 🔌 Endpoints

## 🔹 GET /v1/

Health check da API

---
![GET](./src/assest/GetApitest%2001.png)
## 🔹 GET /v1/posts

Lista todos os posts

---
![GET /v1/posts](./src/assest/TestApi%2003.png)
## 🔹 POST /v1/posts

Cria um novo post

Body:

```json
{
  "author": "email@email.com",
  "content": "Conteúdo do post"
}
```
![POST](./src/assest/PostApitest%2002.png)
---

# 🧪 Executando os Testes

Este projeto utiliza **testes de integração reais**, conectando ao banco SQLite de teste.

### Rodar testes:

```bash
yarn test
```

O ambiente de teste utiliza:

```
NODE_ENV=test
```

Isso faz o TypeORM usar:

```
database.test.sqlite
```

E o banco é limpo automaticamente antes de cada teste.

---

# ⚠️ Dificuldades Encontradas e Como Resolver

Essa parte é a mais importante para quem estiver fazendo o módulo.

---

## ❌ 1. Erro de Import no routes

Problema:

```
Argument of type 'Express' is not assignable to parameter of type 'App'
```

Causa:

* Mistura de `export { app }` com `import app from ...`
* Conflito entre named export e default export

Solução aplicada:

Padronizar `app.ts` como default export:

```ts
export default app
```

E importar corretamente:

```ts
import app from '../src/app'
```

---

## ❌ 2. Erro do Supertest com TypeScript

Erro:

```
Argument of type 'Express' is not assignable to parameter of type 'App'
```

Causa:

* Conflito de tipagem entre:

  * TypeScript 4.5
  * @types/express
  * @types/supertest

Solução prática aplicada no teste:

```ts
await request(app as any)
```

Isso evita conflito de tipagem sem comprometer a execução real.

---

## ❌ 3. Pasta entities vazia

Inicialmente não existia `Post.ts`.

Isso quebrava a estrutura real do TypeORM.

Correção:

Criar a entidade corretamente:

```ts
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  post_id: string

  @Column()
  author: string

  @Column()
  content: string

  @CreateDateColumn()
  created_at: Date
}
```

---

## ❌ 4. Duplicação de servidor

Existiam dois arquivos:

* index.ts
* server.ts

Ambos chamando `app.listen`.

Correção:

* Remover `index.ts`
* Manter apenas `server.ts`
* Inicializar banco antes de subir servidor

---

## ❌ 5. POST errado retornando “Cannot POST /v1”

Erro comum:

```
POST http://localhost:5001/v1
```

Correto:

```
POST http://localhost:5001/v1/posts
```

---

# 🏗️ Arquitetura Aplicada

### 📂 Controllers

Recebem requisição e retornam resposta HTTP.

### 📂 Services

Contêm regra de negócio e acesso ao repositório.

### 📂 Entities

Representam tabelas do banco.

### 📂 Database

Configuração do DataSource e ambiente de teste.

---

# 🎯 Melhorias Futuras

* [ ] Adicionar validação de dados
* [ ] Criar GET por ID
* [ ] Criar DELETE
* [ ] Implementar tratamento global de erros
* [ ] Substituir synchronize por migrations reais
* [ ] Adicionar Docker
* [ ] Implementar TDD nas próximas features

---

# 💡 Principais Aprendizados

* Como organizar uma API em camadas
* Como isolar ambiente de teste
* Como resolver conflitos de tipagem no TypeScript
* Como limpar banco antes de cada teste
* Como evitar duplicação de entrypoint
* Como transformar projeto de aula em projeto de portfólio

---

# 👨‍💻 Autor

Desenvolvido por **Dev Júnior**
Em transição de infraestrutura para desenvolvimento backend.

GitHub:
[https://github.com/JJunior80](https://github.com/JJunior80)

LinkedIn:
[https://www.linkedin.com/in/j-júnior-78b80a36](https://www.linkedin.com/in/j-júnior-78b80a36)



