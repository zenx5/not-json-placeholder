import { useState } from "react"
export default function List({ children, onFilter }) {
    const [search, setSearch] = useState('')

    const handlerChange = (event) => {
        setSearch(event.target.value)
        if( onFilter ) onFilter(event.target.value)
    }

    return <div className="">
        { onFilter && <input
            type="text"
            value={search}
            onChange={handlerChange}
            className="border border-slate-400 rounded-lg p-1 "
            placeholder="Buscar usuario"/>}
        <ul>{children}</ul>
    </div>
}