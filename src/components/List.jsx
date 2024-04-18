import { useState } from "react"
export default function List({ children, onFilter, ...rest }) {
    const [search, setSearch] = useState('')

    const handlerChange = (event) => {
        setSearch(event.target.value)
        if( onFilter ) onFilter(event.target.value)
    }

    return <div {...rest}>
        { onFilter && <input
            type="text"
            value={search}
            onChange={handlerChange}
            className="border border-slate-400 rounded px-4 py-2 mb-2 outline-none"
            placeholder="Buscar usuario"/>}
        <ul className="divide-y">{children}</ul>
    </div>
}