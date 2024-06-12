import {Schema,model} from "mongoose";

const quetionScheema = Schema({
    uid:{type:String ,required:true},
    question:{type:String,required:true},
},{timestamps:true})

const Quetion = model('quetions',quetionScheema)

export default Quetion
