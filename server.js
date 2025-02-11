const express=require("express")
const app=express()
const connectdatabase=require('./config/connectDatabase');
const dotenv=require('dotenv')//env files reading package
const path=require('path')//getting the path alligned for the env files
const router = require("./routes/product")
const cors=require("cors")
dotenv.config({path: path.join(__dirname,'config', 'config.env')})

const product=require(`./routes/product`);
const orders=require(`./routes/order`);

connectdatabase();

app.use(cors());
//allows to correct the occurence of cors api error in frontend
app.use(express.json())//for inserting a data
//express.json gets the data from the front end and it will be come as a json data is denoted by this function
app.use(`/api`,product);
app.use(`/api`,orders);
app.listen(process.env.PORT,()=>{
    console.log(`hello my server ${process.env.PORT}`)
})