const express = require('express');

let app = express()

app.use(express.urlencoded({extended:false}));

app.listen(3000, () => {
    console.log('listening of port 3000')
});