const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Congratulation, your server is running correctly!");
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}.`);
    
})