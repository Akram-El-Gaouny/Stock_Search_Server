var bodyParser = require('body-parser');

var yf = require('yahoo-finance');

var URLEncoderParser = bodyParser.urlencoded({extended : false});


module.exports = {
    requestHandler : requestHandler
};

function requestHandler(app){

    app.get('/', function(req, res){
        res.render('searchView');
    });

    
    app.post('/', URLEncoderParser ,function(req, res){
        console.log();
        
        yf.quote({symbol: req.body.ticker , modules: ['price']}, function(err, quote){
        
            var toReturn = {
                name: quote.price.longName,
                price: "$" + quote.price.currency + " " + quote.price.regularMarketPrice,
                change: (quote.price.regularMarketChangePercent *100).toFixed(2) + "%"
            };
            
            res.render('searchView', {data : toReturn});

        });

       
    });


}