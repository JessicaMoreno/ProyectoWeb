'use strict'
const express = require('express');
const app = express();
const port = 3000;
const router = require('./router.js');
const authenticate = require('./authenticate.js');

app.use(express.json());
app.use('/users/', authenticate); // Middleware para la autenticacion
app.use('/admin/', authenticate); // Middleware para la autenticacion
app.use('/', router); // Middleware para el manejo de rutas

app.listen(port, () => console.log(`Example app listening on port ${port}!`));