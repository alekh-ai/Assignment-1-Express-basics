const express = require('express')
const bodyParser = require('body-parser')


const port = 3000
const app = express()

app.use(bodyParser.urlencoded({extended: true}))


//  BMI Calc - Route
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post('/bmicalculator', (req, res) => {
    let weight = Number(req.body.weight)
    let height = Number(req.body.height)

    let bmiResult = weight / (height * height)

    res.send(`Your BMI is ${bmiResult}`)
})

// Calculator - Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
// Calculator Response
app.post('/', (req, res) => {
    let n1 = Number(req.body.num1)
    let n2 = Number(req.body.num2)
    let result = n1 + n2

    res.send(`Thanks for Sending... ${result}`)
})

app.listen(port, function(){
    console.log(`This app is listening at http://localhost:${port}`)
})