const express = require('express')
const app = express()
// const cors = require('cors');
// app.use(cors({origin: [ "http://localhost:3000"], credentials: true}));
const port = 3001

const retailer_model = require('./retailer_model')

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Headers');
    next();
});
// http://localhost:3001/?zipQuery[]=43017&zipQuery[]=43016&zipQuery[]=43002&zipQuery[]=43065
app.get('/', function(req, res) {
    // const zipQuery = req.query.zipQuery
    retailer_model.getStoresByZipCode()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

// app.get('/latlong', (req, res) => {
//     retailer_model.getStoresByLatLong()
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// const express = require('express')
// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!');
// })

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
// })