import { apiSlice } from "./allApi";

export const quetionApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
              getAllQuestion:builder.query({
                query:()=>'/api/question/allquestions'
              }),
              createQuetion:builder.mutation({
                query:({uid,question})=>({
                  url:'/api/question',
                  method:"POST",
                  body:{uid,question}
                })
              })
    })
})
export const {useCreateQuetionMutation,useGetAllQuestionQuery} = quetionApiSlice