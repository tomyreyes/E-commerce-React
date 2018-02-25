const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080
const fs = require('fs')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json())

let cart = []

fs.readFile('cart.json', (err, data) => {
    if (data) {
        cart = JSON.parse(data)
    }
})



app.get('/cart',(req, res)=>{
    
    res.send(cart)
})

app.post('/cart', (req, res) => {
    cart = req.body
    res.json(req.body)
    fs.writeFile('cart.json', JSON.stringify(cart))
    res.json({ success: true })
})





app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})