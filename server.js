const fs = require('fs'); 
const express = require('express');
const app = express();
app.use('/i',express.static('./index.html'));
app.use('/js',express.static('./js'));
app.use('/asstes',express.static('./asstes'));
app.listen(8080)
