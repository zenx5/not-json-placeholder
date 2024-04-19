import { useState } from "react";
import List from "../components/List";
import { useData } from "../context/DataProvider";
import ItemUser from "../components/ItemUser";
import Pagination from "../components/Pagination";


const QUANTITY = 10
const PAGEINITIAL = 1

export default function Users() {
  const { users } = useData()
  const [search, setSearch] = useState('')

    /** States para la paginación ACTUAL */
    const [currentPage, setCurrentPage] = useState(PAGEINITIAL)

    /** Constantes para la paginación */
    const endIndex = QUANTITY * currentPage 
    const startIndex = endIndex - QUANTITY  
  
    /** Division de los usuarios */
    const nUsers = users.slice(startIndex, endIndex)
  
    /** Total de páginas para la paginación */
    const nPages = Math.ceil(users.length / QUANTITY)

  const handlerFilter = (value) => {
    setSearch(value.toLowerCase())
  }

  const handlerFilterUsers = (user) => {
    if( search.trim() === '' ) return true
    return user.name.toLowerCase().includes(search)
  }

  return (
    <div className="">
      <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Usuarios</h1>
      <div className="flex flex-col" data-howdoit="list-user">
          <List onFilter={handlerFilter} className="w-full">
            { nUsers.filter(handlerFilterUsers).map( user => <ItemUser key={user.id} {...user} />)}
          </List>
          <Pagination 
             currentPage={currentPage}
             setCurrentPage={setCurrentPage}
             nPages={nPages}
             postStart={startIndex}
             postEnd={endIndex}
             totalPosts={users.length}
          />
      </div>
    </div>
  );
}