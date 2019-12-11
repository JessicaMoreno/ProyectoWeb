const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    let token = req.get('x-auth');
    if (token == undefined) {
        console.log("Falta el token");
        return;
    }

    jwt.verify(token, 'auth1234', (err, decoded) => {
        if (err) { 
            if (err.name == "TokenExpiredError") { 
                console.log("El token ha expirado"); 
            } else { 
                console.log(err);
            } 
        } else {
            let id = decoded.id;
            req.body.id = id;
            next(); //ejecuta la siguiente función
        }
    });
};

module.exports = authenticate;
