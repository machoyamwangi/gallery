var config = {}
require('dotenv').config();  // load .env variables


config.mongoURI = {
    production: 'mongodb+srv://<mongouser>:<mongopwd>@cluster0.2jsyouj.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://<mongouser>:<mongopwd>@cluster0.2jsyouj.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://<mongouser>:<mongopwd>@cluster0.2jsyouj.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;


