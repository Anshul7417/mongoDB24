const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/anshuldb').then(() => console.log("connection made")).catch((err) => console.log(err))


//schema defines the structure of document,default values,validators.dhaca btata  h collection ka

const courseSchema = new mongoose.Schema({   //c small h kyunki class nhi h
    name: {
        type: String,
        required: true
    },
    type: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now()
    },
    videos:Number,
})


//a mongoose model is awrapper on mongoose scheme.basically used for creating colllections


const Coursecreator = new mongoose.model("Course", courseSchema) //phle word ka C capital h kyunki class h aur braces m collection ka naam,singular rkhna h 


const createdocument = async () => {
    try {
        const jsCourse = new Coursecreator({
            name: "Javascript",
            type: "Scripting lang",
            active: true,
            videos:180,
        })
        const mongoose = new Coursecreator({
            name: "Mongoose",
            type: "database connector",
            active: true,
            videos:15,
        })
        const database = new Coursecreator({
            name: "Mongodb",
            type: "database",
            active: true,
            videos: 40,
        })

        const result = await Coursecreator.insertMany([jsCourse, mongoose, database]);
        console.log(result)
    } catch (err) { console.log(err) }

}

createdocument();




// read operation

const getdocument = async () => {
    const result = await Coursecreator.find({name:"Mongoose"}).select({name:1,_id:0}).limit(1)
    console.log(result);
}

getdocument();