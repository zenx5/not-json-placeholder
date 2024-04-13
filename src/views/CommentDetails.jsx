import { NavLink } from "react-router-dom"
import {  usePosts } from '../context/PostProvider'

export default function CommentDetails(  ) {
  
  const { posts } = usePosts()

  
  return (
    <div className="py-4">
      
      <h4 className="font-bold">Titulo</h4>
      { posts }
      
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quam velit odio expedita assumenda accusantium reiciendis odit obcaecati rem earum vero tempora, perspiciatis dolor numquam at veniam! Ipsam, nisi consequuntur?</p>
      <NavLink to='/posts' className="block text-blue-500 hover:underline">Volver</NavLink>
    </div>
  )
}