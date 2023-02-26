require('dotenv').config()
const request = require('request')

const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${process.env.QUERY}&units=s`

request({ url, json: true }, (error, response) => {
    const { current } = response.body
    console.log(`It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`);
})