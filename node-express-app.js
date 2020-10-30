const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>My Node-Express App</h1>');
});

app.listen(5000,()=>{
    console.log('Node-Express App listening on port 5000!  Navigate to: http://localhost:5000/ in your browser.');
});