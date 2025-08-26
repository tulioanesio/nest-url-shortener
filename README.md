# URL Shortener API

A simple **URL Shortener** application built with **NestJS**, containerized with **Docker**, deployed on **Render**, and using **Amazon RDS with PostgreSQL** as the database.

---

## Features
- Shorten long URLs into unique short links.
- Store original and shortened URLs in a PostgreSQL database.
- Deployed with scalability in mind using Render and AWS RDS.
  
---

## Tech Stack
- **[NestJS](https://nestjs.com/)**
- **[PostgreSQL (AWS RDS)](https://aws.amazon.com/rds/postgresql/)**
- **[Docker](https://www.docker.com/)**
- **[Render](https://render.com/)**

---

## Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/tulioanesio/nest-url-shortener.git
cd nest-url-shortener
```

### Environment Variables

Create a .env file in the root folder:
```
DATABASE_URL=postgresql://<username>:<password>@<host>:5432/<database>
BASE_URL=http://localhost3000
```

### Run with Docker

```
docker build -t nest-url-shortener .

docker run \
  --name nest-url-shortener \
  -p 5342:5432 \
  -e DATABASE_URL="postgresql://<username>:<password>@<host>:5432/<database>" \
  -e BASE_URL="http://localhost:3000"
  -d \
  nest-url-shortener
```

---

## How Use

You can run the application with `pnpm run start:dev`. The app will be available at `http://localhost:3000`

### API Endpoints

**Request**

```
POST /
Content-Type: application/json

{
  "originalUrl": "https://www.google.com/"
}

```
**Response**

```
{
  "id": 1,
  "originalUrl": "https://www.google.com/",
  "shortUrl": "http://localhost:3000/abc123xyz",
  "createdAt": "2025-08-26T14:22:31.123Z"
}
```

Once created, the shortUrl can be used to redirect to the original link:

```
GET http://localhost:3000/abc123xyz

Redirects to → https://www.google.com/
```
## Live Server

You can also make a `POST` request to `https://nest-url-shortener-z27k.onrender.com` with the body:
```
{
  "originalUrl": "https://your-original-url.com"
}
```
and get your shortned url

## License

This project is licensed under the [MIT License](https://github.com/tulioanesio/nest-url-shortener/blob/master/LICENSE).
