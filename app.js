const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 7000;

app.get('/',(req,res)=>{
   res.sendFile(path.resolve(__dirname) + '/screen/index.html');
});

app.get('/about',(req,res)=>{
   res.sendFile(path.resolve(__dirname) + '/components/about.html');
});

app.get('/contact',(req,res)=>{
   res.sendFile(path.resolve(__dirname) + '/components/contact.html');
})
app.get('/shop',(req,res)=>{
   res.sendFile(path.resolve(__dirname) + '/components/shop.html');
})

app.listen(PORT,()=> console.log(`listening on port ${PORT}`));