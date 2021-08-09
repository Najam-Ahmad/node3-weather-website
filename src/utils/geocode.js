const request = require('request')

const geocode = (address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmFqYW1haG1hZCIsImEiOiJja3F3OWoxeTMwMDEwMnFxY2psNHFjbW5tIn0.gsjTNrK5JZpeYVJVWenx4g&limit=1'
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather servcie!', undefined)
        } else if (body.features.length === 0) {
            callback ('Unable to find Location, Try another search.', undefined)
        } else {
           callback(undefined, {
               latitude: body.features[0].center[1],
               longitude:  body.features[0].center[0],
               location: body.features[0].place_name
           }) 
        }
    })
}


module.exports = geocode