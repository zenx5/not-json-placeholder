import { createContext, useEffect, useState, useContext } from "react";
import PostService from "../services/PostService";
import CommentService from "../services/CommentService";

const PostContext = createContext({
    posts: [],
    comments: [],
    currentPost: null,
    currentComments: null
})

export function usePosts() {
    return useContext(PostContext)
}

export function PostProvider({ children }) {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    useEffect(()=>{
        PostService.getAll().then( data => setPosts(data) )
        CommentService.getAll().then( data => setComments(data) )
    },[])


    return <PostContext.Provider value={{ posts, comments }}>{children}</PostContext.Provider>
}