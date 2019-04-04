const express = require('express');
const config = require('./server/config');
//instances of server
const app = config(express());
//database
require('./database');

// starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});