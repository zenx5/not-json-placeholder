import { NavLink } from "react-router-dom"

export default function ItemComment({id, name, email, body}) {
    return <div className="border-l border-slate-400 p-2 ml-10 my-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-slate-600">{email}</p>
        <span className="flex flex-row justify-between">
            <p className="text-slate-800">{body.substring(0,30)}...</p>
            <NavLink to={`comments/${id}`} className="mx-5 hover:underline">Leer mas</NavLink>
        </span>
    </div>
}