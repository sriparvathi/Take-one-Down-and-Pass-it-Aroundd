// load express
const express =  require('express');
// create express app
const app = express ();
// make a route to send a msg to screen
app.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall <a href = >take one down, pass it around</a>`)
});
app.get('/:number_of_bottles', (req, res) => {
    let num = req.params.number_of_bottles 
    if(num <= 0){
        res.send(`You have ${num} left <a href="/">START OVER </a>`);
    }else {
        res.send(`${num} Bottles of beer on the wall <a href = '/${num-1}'>take one down, pass it around</a>`)
    }
});

// Tell the app or server to listen for requests
 let port = 3000;
app.listen(port, function(){
    console.log(`Listening on ${port}`);
});