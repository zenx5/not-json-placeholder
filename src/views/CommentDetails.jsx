import { NavLink } from "react-router-dom"

export default function CommentDetails(  ) {
  
  return (
    <div className="py-4">
      
      <h4 className="font-bold">Titulo</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quam velit odio expedita assumenda accusantium reiciendis odit obcaecati rem earum vero tempora, perspiciatis dolor numquam at veniam! Ipsam, nisi consequuntur?</p>
      <NavLink to='/posts' className="block text-blue-500 hover:underline">Volver</NavLink>
    </div>
  )
}