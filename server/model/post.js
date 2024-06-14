import { Schema ,model } from "mongoose";

const postScheema = Schema({
    uid:{type:String,required:true},
    something:{type:String,required:true},
    imgUrl:{type:String,required:true},
    like:{type:Number,default:0},
    dislike:{type:Number,default:0},
    Comment:[
        {type:String}
    ],
},{timestamps:true})

const Post = model('post',postScheema)

export default Post