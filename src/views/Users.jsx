import { useState } from "react";
import List from "../components/List";
import { useData } from "../context/DataProvider";


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
      <div className="flex">
          <List onFilter={handlerFilter}>
          { users.filter(handlerFilterUsers).map( user => <li key={user.id}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div>
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{user.phone}</p>
                <p className="text-sm text-gray-500">{user.website}</p>
              </div>
            </div>
          </li> )}
          </List>
      </div>
    </div>
  );
}