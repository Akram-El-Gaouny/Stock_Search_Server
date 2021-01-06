var bodyParser = require('body-parser');
var alert = require('alert');
var yf = require('yahoo-finance');

var URLEncoderParser = bodyParser.urlencoded({extended : false});


module.exports = {
    requestHandler : requestHandler
};

function requestHandler(app){

    app.get('/', function(req, res){
        var tmp = {name:" ", price: " ", }
        res.render('searchView', {data : tmp});
    });

    
    app.post('/', URLEncoderParser ,function(req, res){
        console.log();
        
        yf.quote({symbol: req.body.ticker , modules: ['price']}, function(err, quote){
        


        try{ 
            var toReturn = {
                name: quote.price.longName,
                price: "$" + quote.price.currency+ " " + quote.price.regularMarketPrice,
                change: (quote.price.regularMarketChangePercent *100).toFixed(2) + "%"
            };
            res.render('searchView', {data : toReturn});
        }catch(TypeError){
            var data = {
                name: "Invalid Input",
                price: "Invalid Input",
                change:"Invalid Input" 
            }
            alert("Ticker Does Not Exist, Please input the correct ticker");
            res.render('searchView', {data : data});
        }
         
            
           

        });

       
    });


}