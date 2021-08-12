const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c42b8564d4f1efc973faeecdd5a6d8c0&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location.', undefined)
        } else {
            callback(
                undefined,
                body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + 
                body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%."
                 )
    }
})

}

module.exports = forecast