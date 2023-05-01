const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagories = require('./Data/Catagory.json')

app.get('/', (req, res) => {
    res.send('Dragon is Running')
});

app.use(cors());

app.get('/catagory', (req, res)=>{
    res.send(catagories);
})

app.listen(port, () => {
    console.log(`Dragon APi is running on port:${port}`)
})