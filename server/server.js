const serverPath= __dirname;
const viewsPath = serverPath.replace('/server','');
const express = require('express');
const bodyParser = require('body-parser');
const viewRoutes = require('./viewRoutes');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(viewsPath + '/public'))
app.use('/',viewRoutes);


const registeredUsers = [
    {
        username: 'sofia',
        password: 'A123456'
    },
    {
        username: 'another',
        password: 'A123456'
    },
    {
        username: 'root',
        password: 'A123456'
    },
    {
        username: 'admin',
        password: 'A123456'
    },
];


// function to check if a user is registered
const login = (username, password) => {
    return registeredUsers.some((user) => {
        return user.username === username && user.password === password;
    });
};

// login request
app.post('/login', (req, res, next) => {
    if(login(req.body.username, req.body.password)) {
        console.log('Sesión iniciada');
        res.sendFile(__dirname + '/inicio.html');
    } else {
        console.log('Usuario o contrasena incorrecta');
    }

});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});