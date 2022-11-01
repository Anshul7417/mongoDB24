const mongoose = require('mongoose');
const validator = require("validator");

mongoose.connect('mongodb://127.0.0.1:27017/anshuldb').then(() => console.log("connection made")).catch((err) => console.log(err))


//schema defines the structure of document,default values,validators.dhaca btata  h collection ka

const courseSchema = new mongoose.Schema({   //p small h kyunki class nhi h
    name: {
        type: String,
        required: true,
        unique:true,  //not a validator
        lowercase:true, //validator
        uppercase:true, //validator
        trim:true,//validator
        minlength:2,//works on string only
        maxlength:30,
        // enum:[anything]  it matches entered value with elemnts of array
    },
    type: String,
    active: Boolean,
    email:{
        type:String,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not a email")
            }
        }
    },
    date: {
        type: Date,
        default: Date.now()
    },
    videos:{
        type:Number,
        validate(value){          //custom validation
            if(value<0){
                throw new Error('videos count should not be negative')
            }
        }
    },
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
            videos:5,
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

// createdocument();




// read operation

const getdocument = async () => {
    const result = await Coursecreator.find().select({name:1,_id:0})
    // .count()//it counts total documents
    .sort({name:1})//for sorting 1 for ascending -1 for descending
    console.log(result);
}

// $gte for greater than equals to
// lte for less than equal to
//in for matching any thing in the array.
//or for matching any one


// getdocument();



//update operation

const updateDocument = async (_id)=>{
    try {
        const result = await Coursecreator.findByIdAndUpdate({_id},{$set:{
        name:"Javascript "}});
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
 
}

//updateOne can be used it shows modified and findbyid shows old data

// updateDocument("624a0c6635b2867fe8d797e2");



//delete the document

const deletedocument= async (id)=>{
    try {
    const result= await Coursecreator.deleteOne({id});
    console.log(result)
    } catch (error) {
        console.log(error)
    }

    
}







// deletedocument("624a0c6635b2867fe8d797e2")




