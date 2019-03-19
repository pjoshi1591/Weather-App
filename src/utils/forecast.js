const request = require('request');

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/a53286ce493981933e1aa80e12067206/'+ latitude+','+ longitude +'?units=si'

    request({url,json:true}, (error,{body}) => {
        if(error) {
            callback('Unable to connect to weather service!',undefined);
        } else if(body.error){
            callback('Something went wrong!',undefined)
        } else {
            callback(undefined, `${body.daily.summary} It's currently ${body.currently.temperature} degree out there.
               There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast