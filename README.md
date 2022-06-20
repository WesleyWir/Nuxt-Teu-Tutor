# Teututor
## _Front-end_
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- [Nuxt](https://nuxtjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/en/)

## Requisitos
- Node.js >= 14. Recomendado v14.18.1

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina a api:
[Repositório do Back-end](https://github.com/WesleyWir/Adonis-Teu-Tutor).

### 🎲 Rodando o Front End

```bash
# Clone este repositório
$ git clone <https://github.com/WesleyWir/Nuxt-Teu-Tutor>

# Acesse a pasta do projeto no terminal/cmd
$ cd Nuxt-Teu-Tutor

# Configure o arquivo .env
API_URL= http://localhost:3001 (Onde a api já está rodando)
BASE_URL= http://localhost:3000 (URL Base do Front-end)
BASE_HOST = localhost
SERVER_IMAGES_HOST = http://localhost:3001 (URL Base do servidor de imagens do Front-end)

# 1° Opção - Rodar com node instalado localmente
# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# 2° Opção - Rodar com docker
# Docker e Docker compose requisitado.
$ docker-compose up -d

# Instale as dependências
$ docker-compose exec node npm install

# Execute a aplicação em modo de desenvolvimento
$ docker-compose exec node npm run dev

# O servidor do frontend irá iniciar na porta do .env e nuxt.config.js (padrão 3000) - acesse <http://localhost:3000>