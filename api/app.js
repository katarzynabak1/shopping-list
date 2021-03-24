const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

app.listen(3000, ()=>{
    console.log('server is listening on port 3000');
});

app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

//Load in mongoose models
const { Item } = require('./db/models');
const { Drink } = require('./db/models');

app.get('/items',(req, res) =>{
   
    Item.find({
    }).then((items)=>{
        res.send(items);
    }).catch((e) =>{
        res.send(e);
    })
});

app.post('/items', (req,res) =>{

    let title = req.body.title;
    let items = new Item({
        title
    });
    items.save().then((listDoc)=>{
        res.send(listDoc);
    })
});
app.patch('/items/:id', (req,res) =>{
    Item.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() =>{
        res.send({'message': 'success!'});
    });
});

app.delete('/items/:id', (req,res) =>{
    Item.findOneAndRemove({
        _id: req.params.id
    }).then((removedListDoc) =>{
        res.send(removedListDoc);
    })
});

app.get('/drinks',(req, res) =>{
   
    Drink.find({
    }).then((drinks)=>{
        res.send(drinks);
    }).catch((e) =>{
        res.send(e);
    })
});

app.post('/drinks', (req,res) =>{

    let title = req.body.title;
    let drinks = new Drink({
        title
    });
    drinks.save().then((listDoc)=>{
        res.send(listDoc);
    })
});
app.patch('/drinks/:id', (req,res) =>{
    Drink.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() =>{
        res.send({'message': 'success!'});
    });
});

app.delete('/drinks/:id', (req,res) =>{
    Drink.findOneAndRemove({
        _id: req.params.id
    }).then((removedListDoc) =>{
        res.send(removedListDoc);
    })
});
