const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json();
});

router.post('/', (req, res)=>{
    const { firstName, lastName, email, password, phone, creationDate, role} = req.body;

    res.status(201).send({
        firstName,
        lastName,
        email,
        password,
        phone,
        creationDate,
        role,
    });
});

router.get('/:id', (req, res)=>{
    res.status(200).json();
});

module.exports = router