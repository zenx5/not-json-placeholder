import { useParams } from "react-router-dom";
import { usePosts } from "../context/PostProvider";
import CommentDetails from "../components/CommentDetails";
import { useState, useEffect } from "react";

export default function Comment(){
    const { posts, comments  } = usePosts()
    const { slug, commentId } = useParams()
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState(null)


    useEffect(()=>{
        const [postId] = slug.split("-")
        setPost( posts.find( p => p.id==postId ) )
        setComment( comments.find( comment => comment.id==commentId ) )
    },[slug, posts, comments, commentId])



    return comment && <CommentDetails post={post} comment={ comment } />

}