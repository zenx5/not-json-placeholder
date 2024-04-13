import { NavLink, useParams } from "react-router-dom"
import {  usePosts } from '../context/PostProvider'
import { useEffect, useState } from "react"

export default function CommentDetails(  ) {
  const [comment, setComment] = useState(null)
  const { id, slug } = useParams()
  const { comments } = usePosts()

  useEffect(()=> {
    if( id && comments.length > 0 ) setComment(comments.find( comment => comment.id == id ))
  },[comments, id])
  
  return (
    <div className="py-4 flex flex-col gap-1">
      <p><span className="font-bold">{comment?.email}</span> say:</p>
      <h4 className="font-bold">{ comment?.name }</h4>
      <p>{comment?.body}</p>
      <NavLink to={`/posts/${slug}`} className="block text-blue-500 hover:underline">Volver</NavLink>
    </div>
  )
}