# Mock-Tes-BE
This is the REST API backend for the Mock Test at Binar Academy. Feel free to check the API documentation in the following link.

[API documentation]([https://c7-tiketku.up.railway.app/api-docs/#/](https://documenter.getpostman.com/view/26536997/2s9Xy2NX63#7a3b3d75-1608-4537-bf3c-828e09115e1c))

## Authors
- [Ferdy Fadhil Lazuardi](https://github.com/FerdyLazuardi)

## Tech Stacks
Node JS, Express Js, Sequelize, PostgreSQL, Axios

## Run Locally
> [!IMPORTANT]
> You must install Node.js before running this project.

Clone the project
```
https://github.com/FerdyLazuardi/Mock-Test-BE.git
```
Go to the project directory
```
cd Mock-Test-BE
```
Install dependencies
```
npm i
```
Setup Sequelize
```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```
Start The Server
```
npm run dev
```
## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`DB_USERNAME` `DB_PASSWORD` `DB_NAME` `DB_HOST` `DB_PORT` `PORT` `IMAGEKIT_PUBLIC_KEY` `IMAGEKIT_PRIVATE_KEY` `IMAGEKIT_URL`

