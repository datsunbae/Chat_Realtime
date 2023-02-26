const authenController = require('./authenRoutes');

function routes(app){
    app.use("/api/auth", authenController);
}

module.exports = routes;