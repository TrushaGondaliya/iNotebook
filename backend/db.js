const mongoos = require('mongoose');

const mongoURI = 'mongodb://localhost:27017';

const connectToMongo = () => {
    mongoos.connect(mongoURI);
    console.log('success');
}

module.exports = connectToMongo;