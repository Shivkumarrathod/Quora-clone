import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// export const QuestionApi=createApi({
//     reducerPath:"Solution",
//     baseQuery:fetchBaseQuery({baseUrl:'http://localhost:7000/api/question'}),
//     endpoints:(builder)=>({
//       getAllQuestion:builder.query({
//         query:()=>'/allquestions'
//       }),
//       createQuetion:builder.mutation({
//         query:({uid,question})=>({
//           url:'',
//           method:"POST",
//           body:{uid,question}
//         })
//       })
//     })
// });

export const apiSlice = createApi({
  reducerPath:"Quora",
  baseQuery:fetchBaseQuery({baseUrl:'http://localhost:7000'}),
  endpoints:()=>({})
})

// export const { useGetAllQuestionQuery,useCreateQuetionMutation } = QuestionApi