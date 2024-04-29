import { useState } from "react";
import List from "../components/List";
import { useData } from "../context/DataProvider";
import ItemUser from "../components/ItemUser";
import Pagination from "../components/Pagination";


export default function Users() {
  const { users } = useData()
  const [search, setSearch] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(5)

  const handlerFilter = (value) => {
    setSearch(value.toLowerCase())
  }

  const handlerFilterUsers = (user) => {
    if( search.trim() === '' ) return true
    return user.name.toLowerCase().includes(search)
  }

  const handlerChangePage = (newStart, newEnd) => {
    setStartIndex(newStart)
    setEndIndex(newEnd)
  }

  const handlerFilterPagination = (_, index) => index >= startIndex && index < endIndex

  return (
    <div className="">
      <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Usuarios</h1>
      <div className="flex flex-col" data-howdoit="list-user">
          <List onFilter={handlerFilter} className="w-full">
            { users.filter(handlerFilterUsers).filter(handlerFilterPagination).map( user => <ItemUser key={user.id} {...user} />)}
          </List>
          <Pagination
            label="users"
            items={users}
            onChange={handlerChangePage}
          />
      </div>
    </div>
  );
}