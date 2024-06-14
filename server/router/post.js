import { Router } from "express";
import Post from "../model/post.js";

const router = Router()

router.route('/').post(async(req,res)=>{
    try {
        const {uid,something,imgUrl} = req.body
        const post = await Post.create({
            uid,
            something,
            imgUrl
        })
        res.status(201).json(post)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error:error.message})
    }
})
router.route('/allposts').get(async(req,res)=>{
    try {
        const allPosts = await Post.find({}).sort({createdAt:-1}).limit(20)
        res.status(200).json(allPosts)
    } catch (error) {
        console.log(error.message);
        req.status(404).json({error:error.message})
    }
})

export default router