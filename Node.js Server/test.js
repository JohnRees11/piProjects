const express = require('express')
const app = express()

app.get('/',function(req,res){
	res.send('Hello Bitchz')
})

app.listen(3000,function(){
	console.log('ExmaPLE APP on port 3000')
})
