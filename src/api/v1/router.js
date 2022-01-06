const config = require ('../../config/env.config.js');
const express = require('express');
const utilsRoutes = require('./components/utils/utilsRoutes');
const usersRoutes = require('./components/users/usersRoutes');
const { application } = require('express');

const router = (app) => {
    app.use(config.root_api, utilsRoutes);
    app.use((req, res) => {
        res.status(404).json({ message: 'Not Found' });
    });

}

module.exports = router;