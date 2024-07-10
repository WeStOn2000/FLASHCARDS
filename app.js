const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req,res) => {
 res.render('index');
});

app.get('/cards', (req,res) => {
    res.render('card',{prompt : "Who is Buried in Grant's tomb"});
   });

app.listen(3000, () => {
console.log('Port Activated:3000')
});