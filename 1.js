const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/anshuldb').then(()=>console.log("connection made")).catch((err)=>console.log(err))

