import { createContext, useEffect, useState, useContext } from "react";
import PostService from "../services/PostService";
import CommentService from "../services/CommentService";
import UserService from "../services/UserService";
import AlbumService from "../services/AlbumService";

const PostContext = createContext({
    users: [],
    posts: [],
    comments: [],
    albums: [],
    currentPost: null,
    currentComments: null
})

export function useData() {
    return useContext(PostContext)
}

export function DataProvider({ children }) {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        AlbumService.getAll().then( data => setAlbums(data) )
        UserService.getAll().then( data => setUsers(data) )
        PostService.getAll().then( data => setPosts(data) )
        CommentService.getAll().then( data => setComments(data) )
    },[])


    return <PostContext.Provider value={{ users, posts, comments, albums }}>{children}</PostContext.Provider>
}