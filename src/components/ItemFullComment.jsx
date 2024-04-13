export default function ItemFullComment({ name, email, body}) {

   
    return <div className="border-l border-slate-400 p-2 ml-10 my-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-slate-600">{email}</p>
        <span className="flex flex-row justify-between">
            <p className="text-slate-800">{body}</p>
        </span>
    </div>
}