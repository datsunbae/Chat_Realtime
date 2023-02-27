const jwt = require('jsonwebtoken');

const middlewareJWT = {
    verifyToken: (req, res, next) => {
        const authHeader = req.headers.authorization;

        if(authHeader){
            const token = authHeader.split(" ")[1];

            jwt.verify(token, process.env.JWT_SECRET_KEY_ACCESS_TOKEN , (err, user) => {
                if(err){
                    return res.status(403).json("Token is not valid");
                }

                req.user = user;
                next();
            });
        }
        else{
            return res.status(401).json("You're not authenticated!");
        }
    }
};

module.exports = middlewareJWT;