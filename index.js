var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
const requestPromise = require('request-promise');
var PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	requestPromise('https://api.wazirx.com/api/v2/tickers')
		.then((body) => {
			var parsedData = JSON.parse(body);
			let targetData = Object.keys(parsedData).map((x) => parsedData[x]);
			res.render('index', { data: targetData.slice(0, 10) });
		})
		.catch((err) => {
			console.log(`Error : ${err.message}`);
		});
});
app.listen(PORT, () => {
	console.log(`Server has started at Port : ${PORT}`);
});
