

// import{createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// export const myApi = createApi({
//     reducerPath:"api",
//     baseQuery:fetchBaseQuery({
//         baseUrl:"http://localhost:9090/"
//     }),
//     endpoints:(builder)=>({
//  getPosts:builder.query<Post[],string>({query:() => "posts"})

//  newPost:builder.mutation<Post,Post>({
//     query:(post)=>({
//         url:"post",method:"POST",body:post,
//     }),
//  }),
//     }),
// });
// //import{createApi,fetchBaseQuery} from "@reduxjs/toolkit/query" if in top without "@reduxjs/toolkit/query/react"
// // export const {getPosts} = myApi.endpoints

// export const {useGetPostsQuery, useNewPostMutation}=myApi




import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090/",
  }), tagTypes:["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({ query: () => "posts",providesTags:["Posts"] }),

    newPost: builder.mutation<Post, Post>({query: (post) => ({ url: "posts",method: "POST", body: post,}),invalidatesTags:["Posts"]}),

  }),
});

export const { useGetPostsQuery, useNewPostMutation } = myApi; // Corrected destructuring
