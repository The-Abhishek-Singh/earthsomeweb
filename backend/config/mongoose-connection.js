const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/earthsome')


    .then(function() {
        console.log('MongoDB connected successfully');
    })
    .catch(function(err) {
        console.error('MongoDB connection error:', err);
    });


    module.exports = mongoose.connection;