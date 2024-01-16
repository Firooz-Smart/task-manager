const mongoos = require('mongoose')


const connectDB = (url) => {
    return mongoos.connect(url)
        .then(() => console.log('Connected'))
        .catch((err) => console.log('Some error occured'));
}


module.exports = connectDB;
