import { useParams } from "react-router-dom";
import { usePosts } from "../context/PostProvider";
import PostDetails from "../components/PostDetails";
import { useState, useEffect } from "react";

export default function Details(){
    const { posts, comments } = usePosts()
    const { slug } = useParams()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        const [id, ...rest] = slug.split('-')
        console.log( posts )
        setPost( posts.find( post => post.id==id && post.title==rest.join(' ') ) )

    },[slug, posts])

    const getComments = () => {
        return comments.filter( comment => comment.postId===post.id )
    }

    return post ? <PostDetails post={post} comments={ getComments() } /> : <h1 className="text-4xl text-center mt-20">Not Found</h1>

}