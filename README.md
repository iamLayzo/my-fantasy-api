<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

This project is a GraphQL API designed for managing enemies in a fantasy role-playing game (RPG). The API allows you to list, create, update, and delete various enemies, each with unique attributes such as name, level, category, abilities, and interaction phrases.

## Project Setup

### Prerequisites

- Docker installed on your machine.
- Node.js and npm if you want to run the application locally without Docker.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/my-fantasy-api.git
cd my-fantasy-ap
npm install
```
2. Create a .env file at the root of your project with the following content:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=example
DB_PASS=example
DB_NAME=example
DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:${POSTGRES_PORT}/${POSTGRES_DB}
```
3. Start the application using Docker Compose:
```bash
docker-compose up --build
```

## GraphQL Queries and Mutations
### Query: Fetch All Enemies
```graphql

query {
  enemies {
    id
    name
    category
    level
    description
    abilities
    interactionPhrases
  }
}
```
### Mutation: Create a Single Enemy
```graphql
mutation {
  createEnemies(createEnemiesInput: {
    enemy: {
      name: "Goblin",
      category: "Monster",
      level: 5,
      description: "A sneaky goblin.",
      abilities: "Stealth",
      interactionPhrases: "You'll never catch me!"
    }
  }) {
    id
    name
    category
    level
    description
    abilities
    interactionPhrases
  }
}
```
### Mutation: Create Multiple Enemies

```graphql
mutation {
  createEnemies(createEnemiesInput: {
    enemies: [
      {
        name: "Orc",
        category: "Beast",
        level: 10,
        description: "A strong and brutal orc.",
        abilities: "Axe swing",
        interactionPhrases: "You will feel my wrath!"
      },
      {
        name: "Troll",
        category: "Beast",
        level: 15,
        description: "A giant, dumb troll.",
        abilities: "Club smash",
        interactionPhrases: "I will crush you!"
      }
    ]
  }) {
    id
    name
    category
    level
    description
    abilities
    interactionPhrases
  }
}
```
### Mutation: Update an Enemy
```graphql
mutation {
  updateEnemy(id: 1, updateEnemyDto: {
    name: "Goblin King",
    level: 10
  }) {
    id
    name
    category
    level
    description
    abilities
    interactionPhrases
  }
}
```
### Mutation: Delete an Enemy
```graphql
Copiar código
mutation {
  removeEnemy(id: 1)
}
```
## Technologies Used

- **NestJS**: A progressive Node.js framework.
- **GraphQL**: API query language for flexible requests.
- **TypeORM**: Object-relational mapper (ORM) to interact with PostgreSQL.
- **PostgreSQL**: Relational database system.
- **Docker**: For containerizing the API and PostgreSQL services.
