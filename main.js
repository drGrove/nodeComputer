var os = require('os');

var totalMemB = os.totalmem()
var freeMemB = os.freemem()

var convertToMB = function(toConvert, type) {
    switch(type) {
        case 'B': return toConvert / 1024 / 1024
            break
        case 'KB': return toConvert / 1024
            break
        case 'GB': return toConvert * 1024 
            break
    }
}

var convertToKB = function(toConvert, type) {
    switch(type) {
        case 'B': return toConvert / 1024
            break
        case 'MB': return toConvert * 1024
            break
        case 'GB': return toConvert * 1024 * 1024
            break
    }
}

var convertToGB = function(toConvert, type) { 
    switch(type) {
        case 'B': return toConvert / 1024 / 1024 / 1024
            break
        case 'KB': return toConvert / 1024 / 1024
            break
        case 'MB': return toConvert / 1024
    }
}

while(true) {
    console.log(convertToGB(freeMemB, 'B') + '/' + convertToGB(totalMemB, 'B'))
}
