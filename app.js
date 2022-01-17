const express = require('express');
const mongoose = require('mongoose');

const crudRoutes = require('./routes/crud');

const app = express();
const PORT = process.env.PORT || 8080; 
const MONGODBURL = "mongodb+srv://Sp0511:Hm704642@cluster0.wjeak.mongodb.net/ToDoList";
app.use(express.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(crudRoutes);

app.use((error, req, res, next) => {

    console.log(error);
    res.status(error.statusCode || 500).json({
        message: error.message,
        data: error.data
    });

});

mongoose.connect(process.env.MONGODB_URI || MONGODBURL)
    .then(result => {        
        app.listen(8080);
    })
    .catch(error => {
        console.log(error);
    });
    
    
if (process.env.NODE_ENV === 'production') {
        app.use(express.static('ToDo-List-Frontend/build'));
}