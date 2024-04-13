import { createContext, useEffect, useState, useContext } from "react";
import UserService from "../services/UserService";
import CommentService from "../services/CommentService";

const UserContext = createContext({
    users: [],    
    currentUser: null, 
})

export function useUsers() {
    return useContext(UserContext)
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