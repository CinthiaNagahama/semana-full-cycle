<img src="https://nestjs.com/img/logo_text.svg" width="200" alt="Nest Logo" />

# Desafio Nest.js

## Descrição

---

Back-End de acesso a banco de dados SQLite3 feito com Nest.js e Prisma para o desafio de Nest.js da Imersão FullCycle.

## Instruções do desafio
---

Nesse desafio você deverá criar uma aplicação Nest.js
- 2 endpoints REST: 
  - criação de uma transação e ✔
  - listagem de transações. ✔
  <br> Obs. Os campos da tabela de transactions serão: id, account_id, amount, created_at, updated_at. ✔
- Padrão da url deverá ser: /transactions. ✔
- Mecanismo de persistência será o banco de dados SQLite3. ✔
- A aplicação deverá ser executada na porta 3000. ✔
- Crie uma imagem Docker, faça o push para o DockerHub e informe seu caminho no campo abaixo.

## Rodar a aplicação
---

Execute o comando
```bash
docker-compose up
```