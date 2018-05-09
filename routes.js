var express 		= require('express');
var router			= express.Router();	 
var request			= require('request');	
var fs 				= require("fs");	
var request			= require('request');
var path			= require("path");	
var config 			= require("./config");	
var mail			= require('./utilities/mail');	

//var Authentication = require('./utilities/Authentication');


//const sendOtp 		= new SendOtp('209393AILCgzYm2m675acd86a1');
router.get('/', function(req, res) {
	console.log('hari');
  res.redirect("/home.html");
});

router.get('/chat', function(req, res) {
  res.redirect('/chat.html');
});

router.post('/getItemInfo',function(req, res){
	console.log(req.body);
	var carouselData="",code='';;
	var item = req.body.item.toLowerCase();
	switch(item){
		case 'sarees':code = 'S';break;
		case 'curtons':code = 'C';break;
		case 'bedsheets':code = 'B';break;
	}
	console.log('./public/images/'+item);
	fs.readdir('./public/images/'+item, function(err, filesList) {
		var i=0;
		filesList.forEach(function(file){
			carouselData += '<a class="carousel-item" href="#'+code+(i++)+'!"><img src="./images/'+req.body.item.toLowerCase()+'/'+file+'"/></a>';
		})		
		res.json({responseData:carouselData}).end();
	});		
})
module.exports = router;



			