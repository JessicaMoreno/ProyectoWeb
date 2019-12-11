const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hardcodedPasswordHash = bcrypt.hashSync("Hola1234", 8);
const hardcodedUsername = "PepeTapas";
const hardcodedUserId = "123456789";
const hardcodedUserRole = "Admin";

router.get('/', (req, res) => {
    res.send("Hola Mundo");
});

router.post('/api/login', (request, response) => {
    let username = request.body.username;
    let password = request.body.password;

    bcrypt.compare(password, hardcodedPasswordHash, (err, res) => {
        if (res) {
            let token = jwt.sign(
                {
                    id: `${hardcodedUserId}`,
                    role: `${hardcodedUserRole}`
                },
                'auth1234',
                { expiresIn: 60 * 5 });
            response.send(token);
        } else {
            response.status(403).send("wrong username or password");
        }

    });
});

router.get('/users/home/', (req, res) => {
    let id = req.body.id;
    res.send("Hola User " + id);
});

module.exports = router