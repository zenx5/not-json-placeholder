import { useParams } from "react-router-dom";
import { usePosts } from "../context/PostProvider";
import PostDetails from "../components/PostDetails";
import { useState, useEffect } from "react";

export default function Details(){
    const { posts, comments } = usePosts()
    const { slug } = useParams()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        const [id] = slug.split('-')[0]
        setPost( posts.find( post => post.id==id ) )

    },[slug, posts])

    const getComments = () => {
        return comments.filter( comment => comment.postId===post.id )
    }

    return post && <PostDetails post={post} comments={ getComments() } />

}