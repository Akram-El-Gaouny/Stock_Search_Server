var bodyParser = require('body-parser');

var URLEncoderParser = bodyParser.urlencoded({extended : false});


module.exports = {
    requestHandler : requestHandler
};

function requestHandler(app){

    app.get('/', function(req, res){
        res.render('searchView');
    });

    
    app.post('/', URLEncoderParser ,function(req, res){
        console.log(req.body);
    });

}
