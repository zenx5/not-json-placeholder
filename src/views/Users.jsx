import { useState } from "react";
import List from "../components/List";
import { useData } from "../context/DataProvider";
import ItemUser from "../components/ItemUser";


export default function Users() {
  const { users } = useData()
  const [search, setSearch] = useState('')

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
      <div className="flex" data-howdoit="list-post">
          <List onFilter={handlerFilter} className="w-full">
            { users.filter(handlerFilterUsers).map( user => <ItemUser key={user.id} {...user} />)}
          </List>
      </div>
    </div>
  );
}