'use strict';

var express=require('express'),
app=express(),
path=require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public'));
})

app.listen(process.env.PORT || 3000 )
