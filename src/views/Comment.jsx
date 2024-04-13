import { useParams } from "react-router-dom";
import { usePosts } from "../context/PostProvider";
import CommentDetails from "../components/CommentDetails";
import { useState, useEffect } from "react";

export default function Comment(){
    const { posts, comments  } = usePosts()
    const { postId, commentId } = useParams()
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState(null)
    const commentsList = getComments()

    useEffect(()=>{        
        setPost( posts.find(postId) )
    },[postId, posts])

    const getComments = () => {
        return comments.filter( comment => comment.postId===post.id )
    }

    const getComment = () => {
        return setComment( commentsList.find( commentId ) )
    }

    console.log(commentsList, commentsList.find( commentId ));

    return comment && <CommentDetails post={post} comment={ getComment(commentId) } />

}