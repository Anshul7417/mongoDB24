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
    }
})


//a mongoose model is a wrapper on mongoose schema.basically used for creating collections


const Coursecreator = new mongoose.model("Course", courseSchema) //phle word ka C capital h kyunki class h aur braces m collection ka naam,singular rkhna h 



//insertion

const createdocument = async () => {
    try {
        const reactCourse = new Coursecreator({
            name: "React",
            type: "front end",
            active: true,
        })

        const result = await reactCourse.save();
        console.log(result)
    } catch (err) { console.log(err) }

}

createdocument();

