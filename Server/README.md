# GEO-WISE Backend
 
A Node.js + Express backend with MongoDB, MQTT integration, and auto-generated Swagger API documentation.
Fully Dockerized for consistent and easy development.
 
---
 
## Features
- REST APIs (Express)
- MongoDB integration
- MQTT support
- Swagger auto-generated API docs
- Dockerized development environment
- JWT authentication
- SMTP email (Gmail / SMTP provider)
 
---
 
## Prerequisites
Install the following:
- Docker  
- Docker Compose  
- Git  
- (Optional) Node.js 18+  
 
---
 
## Run With Docker (Recommended)
 
### Start Docker services
```bash
docker compose up -d
```
 
### Install dependencies (first-time only)
```bash
docker compose exec app npm ci
```
 
### Check running containers
```bash
docker compose ps
```
 
---
 
## Swagger Auto-Generated Docs
 
### Generate Swagger schema automatically:
```bash
node src/swagger.js
```
 
This updates `swagger_output.json`.
 
### View Swagger UI:
Open in browser:
```
http://localhost:4000/api-docs
```
 
---
 
## Run Locally (Without Docker)
 
```bash
npm install
npm run dev
```
 
Requires MongoDB running at:
mongodb://127.0.0.1:27017/geotracker
 
---
 
## Common Commands
 
| Action | Command |
|--------|---------|
| Start containers | `docker compose up -d` |
| Stop containers | `docker compose down` |
| View logs | `docker compose logs -f app` |
| Rebuild app image | `docker compose build app && docker compose up -d` |
| Test | `docker compose exec app npm test` |
| Run migrations | `docker compose exec app npm run migrate:dev` |
 
---
 
## Author
**JenexTech Team**  
Backend Team – GEO-WISE Project
Building scalable, real-time & production-grade systems.