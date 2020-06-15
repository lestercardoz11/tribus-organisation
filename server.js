var http = require('http');
var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

//__dirname : It will resolve to your project folder.
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname,'/about.html'));
});
app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname,'/contact.html'));
});
app.get('/donate',function(req,res){
  res.sendFile(path.join(__dirname,'/donate.html'));
});
app.get('/gallery',function(req,res){
  res.sendFile(path.join(__dirname,'/gallery.html'));
});
app.get('/work',function(req,res){
  res.sendFile(path.join(__dirname,'/work.html'));
});

app.get('/Bahirwadi',function(req,res){
  res.sendFile(path.join(__dirname,'/Bahirwadi.html'));
});
app.get('/Panwadi',function(req,res){
  res.sendFile(path.join(__dirname,'/Panwadi.html'));
});
app.get('/Tribe_chatari',function(req,res){
  res.sendFile(path.join(__dirname,'/Tribe_chatari.html'));
});

app.use('/', router);

app.listen(process.env.PORT || 5000, function(){
    console.log('Your node js server is running');
});
// go to directory and then use "node server" in server
