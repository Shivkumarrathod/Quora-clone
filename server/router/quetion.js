import express from 'express'
import Quetion from '../model/quetion.js'

const router= express.Router()

router.route('/')
.post(async(req,res)=>{
    try {
        const {uid,question}=req.body
        const createQuetion = await Quetion.create({uid,question})
        return res.status(201).send(createQuetion)
    } catch (error) {
        console.error(error.message);
        return res.status(400).json({error:error.massage})
    }
})
router.route('/allquestions').get(async(req,res)=>{
    try {
        const quetions = await Quetion.find({})
        console.log(quetions);
        return res.status(200).json(quetions)
    } catch (error) {
        console.error(error.message);
        return res.status(400).json({error:error.massage})
    }
})

// router.route('/:id').get(async(req,res)=>{
//     try {
//         const quetions = await Quetion.findByObject(req.params.id)
//         return res.status(200).json(quetions)
//     } catch (error) {
//         console.error(error.message);
//         return res.status(400).json({error:error.massage})
//     }
// })

export default router