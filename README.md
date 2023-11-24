# Nodejs-TODO API

Basic real time chat application with;

- Node.js
- ExpressJS
- MONGO DB

## Install And Run App

Clone the project

```bash
  git clone https://github.com/kerlos-alfy/TODO-API.git

```

Go to the project directory

```bash
  cd TODO-API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```

connect to api

```bash
  localhost:3000
```

## 🛠 Skills

Javascript, HTML, CSS...

## Tech Stack

Node JS, Express, MONGO DB

## API Reference

#### Get All TODO

```http
  GET /api/v1/todo
```

---

#### Create TODO

```http
  GET /api/v1/todo
```

| Parameter     | Type     | Description                                        |
| :------------ | :------- | :------------------------------------------------- |
| `title`       | `string` | **Required**                                       |
| `description` | `string` | **Required**                                       |
| `due_date`    | `Date`   | **Required**                                       |
| `status`      | `string` | **enum** **=>** _waiting_, _in_ _progress_, _done_ |

---

#### Udpdate TODO

```http
  Update /api/v1/todo/${id}
```

---

#### Delete TODO

```http
  Update /api/v1/todo/${id}
```

## Authors

- [@Kerlos Alfy](https://github.com/kerlos-alfy)

# Nodejs-TODO API

Basic real time chat application with;

- Node.js
- ExpressJS
- MONGO DB

# Nodejs-TODO API

```bash
 https://documenter.getpostman.com/view/15492489/2s9YeD8DSZ#59388e0d-3b76-477c-8a77-87a73e3cf23f

```
