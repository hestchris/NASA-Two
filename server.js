const express = require('express')
const bodyParser = require('body-parser')

var app = express()
var request = require('request')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('./public'))

app.get('/', function(req, res) {
	res.ssedFile('./public/html/Celestial_indexII.html')
})

app.get('/newdate', function(req, res) {
	request(`var nasa = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-17&end_date=2017-10-24&api_key=0hZcmQI7mmHNYinB8NPxsYJqqaxomP1qEwZ3zooN`, function (error, response, body) {
		if(error || (response.statusCode !== 200)) {
			console.log('Something messed up!')
			res.send('Something messed up!')
		}
		else {
			var bodyAsObj = JSON.parse(body)
			res.send(bodyAsObj)
		}
	})
})

app.listen(3120, function() {
	console.log("This app be spinning on port 3120")
})