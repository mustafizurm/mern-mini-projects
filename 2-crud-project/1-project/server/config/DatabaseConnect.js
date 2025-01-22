const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect(process.env.DB_URL)
    .then((data)=> {
        console.log(`Database is connected with ${data.connection.host}`)
    })
    .catch((error)=> {
        console.log(`Something is wrong`)
    })

}

module.exports = connectDatabase;