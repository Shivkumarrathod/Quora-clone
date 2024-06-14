import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.js'

import quetionRouter from './router/quetion.js'
import postRouter from './router/post.js'

dotenv.config()
const port = process.env.PORT || 7000

connectDb()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/post',postRouter)
app.use('/api/question',quetionRouter)
app.listen(port,()=>console.log(`server is running At:${port}`))