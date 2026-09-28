# Animal Farm — Backend

REST API for the Animal Farm app, built with **NestJS 11**, **TypeORM** and **PostgreSQL**.
The web client lives in [animal-farm-frontend](https://github.com/luukitto/animal-farm-frontend).

## Features

- **Animals** — paginated, searchable, sortable list of farm animals, plus a "feed" action that tracks how often each animal is fed
- **Farm leader** — a pig whose mood/status can be read and updated
- **Music** — returns the soundtrack that matches the leader's current status
- Request validation and type conversion with `class-validator` / `class-transformer`
- Database schema managed with TypeORM migrations

## Tech stack

| Layer      | Tools                                  |
| ---------- | -------------------------------------- |
| Framework  | NestJS 11 (Express)                    |
| Database   | PostgreSQL + TypeORM 0.3               |
| Validation | class-validator, class-transformer     |
| Testing    | Jest (unit + e2e)                      |

## Project structure

```
src/
├── config/        # database configuration (reads environment variables)
├── controllers/   # animal, pig and music endpoints
├── services/      # business logic
├── entities/      # TypeORM entities
├── dto/           # pagination and response DTOs
└── migrations/    # database migrations
http/              # ready-to-run request files for trying the API
```

## Getting started

**Requirements:** Node.js 20.12+ and PostgreSQL 14+.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create the database and a user (pick your own password):

   ```sql
   CREATE ROLE animal_farm LOGIN PASSWORD 'change-me';
   CREATE DATABASE animal_farm OWNER animal_farm;
   ```

3. Configure the connection:

   ```bash
   cp .env.example .env
   # then set DB_PASSWORD (and anything else that differs) in .env
   ```

4. Run migrations and start the server:

   ```bash
   npm run migration:run
   npm run start:dev
   ```

The API is served at `http://localhost:3000/api`.

## API overview

| Method | Endpoint                  | Description                              |
| ------ | ------------------------- | ---------------------------------------- |
| GET    | `/api/animals`            | List animals — `page`, `limit` (max 10), `search`, `sortBy`, `sortOrder` |
| POST   | `/api/animals/:id/feed`   | Feed an animal                           |
| GET    | `/api/bidzina/status`     | Current status of the farm leader        |
| POST   | `/api/bidzina/status`     | Update the farm leader's status          |
| POST   | `/api/music/toggle`       | Get the track for a given status         |

Example requests are in the [`http/`](http/) folder.

## Scripts

```bash
npm run start:dev   # watch mode
npm run build       # compile to dist/
npm run start:prod  # run the compiled build
npm run test        # unit tests
npm run test:e2e    # end-to-end tests
```
