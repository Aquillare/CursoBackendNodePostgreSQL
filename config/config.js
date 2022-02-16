//Configuracion base para leer las variables de entorno.

//requerimos dontevn para poder leer las variables de entorno
require('dotenv').config();


const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production' ,
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER ,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL
 }

 module.exports = config;
