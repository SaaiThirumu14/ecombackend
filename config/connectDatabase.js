const { default: mongoose } = require("mongoose");


/*const connectDatabase=mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log(`db connected`);
})(for a function case)*/

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log(`db connected`);
    })
}


module.exports= connectDatabase;
