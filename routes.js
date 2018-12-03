module.exports = function(app){

  //On GET / render index.ejs to the DOM.
  app.get('/', function(req, res){
    res.render('index');
  });

}
