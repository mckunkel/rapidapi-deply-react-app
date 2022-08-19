/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

var axios = require('axios')
// Import get secrets function
var secret = require('./secret-manager')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())


// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});



app.post('/weather', async function (req, res) {
  // Assign the location value to the variable location from the body object
  const { location } = req.body
  // Encode the variable so we can send the location in a URL
  const encodedLocation = encodeURIComponent(location)
  try {
    // Call AWS Secrets to get RapidAPI key
    const secretObj = await secret()
    // Call the Weather API
    const { data } = await axios({
      method: "GET",
      url: `https://aerisweather1.p.rapidapi.com/observations/${encodedLocation}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "aerisweather1.p.rapidapi.com",
        "x-rapidapi-key": secretObj["RAPIDAPI-KEY"],
        "useQueryString": true
      }
    })
    // Pull the information that we need from the Weather API response
    const weatherData = {
      conditions: data.response.ob.weather,
      tempC: data.response.ob.tempC,
      tempF: data.response.ob.tempF
    }
    // Return the data object
    return res.send(weatherData)
  } catch (e) {
    console.log(e)
    return res.status(500).send('Error.')
  };
});
app.listen(3000, function () {
  console.log("App started")
});
// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app