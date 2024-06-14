import {apiSlice} from './allApi'

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createPost:builder.mutation({
            query:({uid,something,imgUrl})=>({
               url:'/api/post',
               method:"POST",
               body:{uid,something,imgUrl}
            })
        }),
        getAllPosts:builder.query({
            query:()=>'/api/post/allposts',
        })
    })
})
export const {useCreatePostMutation,useGetAllPostsQuery} = postApiSlice