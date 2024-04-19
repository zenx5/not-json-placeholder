import { NavLink } from "react-router-dom"
import List from "./List"
import ItemComment from "./ItemComment"

export default function PostDetails({post, comments}) {

    return <div className="mx-20">
        <span className="flex flex-row justify-between items-center mt-10 mb-5">
            <h1 className="font-bold text-xl">Detalles del Post</h1>
            <NavLink to="/posts" className="block text-blue-500 hover:underline">Volver</NavLink>  
        </span>
        <div className="flex text-lg">
            <div className="p-2">
                <h2 className="font-bold mb-2">{ post?.title }</h2>
                <p className="italic">{ post?.body}</p>
            </div>
        </div>
        <List>
            {comments.map( comment => <ItemComment key={comment.id} {...comment} post={post} />)}
        </List>
    </div>
}