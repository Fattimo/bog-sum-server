const request = require('request')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Type 'finish' to end user input. Please input a number")
promptNum()


rl.on("close", function() {
    request.get('http://localhost:3000/sum', function(error, response, body) {
        console.log("Your final sum was: " + body)
    })
    process.exit(0)
})

function promptNum() {
    rl.question("", function(input) {
    if(input === 'finish'){
        cont=false;
        rl.close()
    } else {
        sendPost(input)
        promptNum()
    }
})
}

function sendPost(num) {
    request.post('http://localhost:3000/add/' + num, function(error, response, body) {
        //console.log(response.statusCode)
        if(response.statusCode === 400) {
            return console.error("That is not a number")
        }
        console.log("Current sum: " + body)
    })
}