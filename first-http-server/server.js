const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let sum = 0;

function add(request, response) {
    const number = request.params.num
    if (typeof number === 'undefined' || isNaN(number)) {
        response.status(400)
        response.send(num + typeof num + ' is not a number')
        return
    }

    const num = parseInt(number)

    sum = sum + num

    response.status(200)
    response.send('' + sum)
}

function getSum(request, response) {
    response.status(200)
    response.send('' + sum)
}

app.get('/sum', getSum)
app.use(bodyParser.urlencoded({extended: true}))
app.post('/add/:num', add)

app.listen(3000)