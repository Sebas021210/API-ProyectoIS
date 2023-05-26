const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors(
    {
        origin: '*',
        credentials: true,
    }
));

//routes
app.use(require('./rutas/index'));

//server
app.listen(5050);
console.log('Server on port', 5050);