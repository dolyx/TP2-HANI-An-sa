const config = require('./config/env.config.js');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const router = require('./api/v1/router');

//header
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    //Expose the right header
    if (req.method === 'OPTIONS'){
        res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
});

//Middelware
app.use(express.urlencoded({ extended: true})); //for parsing application/x-www-form-urlencoded
app.use(express.json()); //for parsing application/json
app.use(morgan(config.format_logs));
app.use(cors());
app.use('/users', usersRoutes);

// GET
app.get(function(req,res){ 
    res.json({message : "Liste des utilisateurs", methode : req.method});
})

//POST
app.post('/users', (req,res)=> {
    res.status(201).json({message : "Ajout d'un utilisateur", methode : req.method});
})

//PUT
app.put('/users', (req,res)=> { 
    res.status(200).json({message : "Mise à jour des informations", methode : req.method});
})

//DELETE
app.delete('/users', (req,res)=> { 
    res.status(200).json({message : "Suppression d'un utilisateur", methode : req.method});  
}); 

router(app);

app.listen(config.port, ()=> {
    console.log(`listening on port ${config.port} in ${config.node_env} mode`);
});