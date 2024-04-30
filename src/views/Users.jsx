import { useState } from "react";
import List from "../components/List";
import { useData } from "../context/DataProvider";
import ItemUser from "../components/ItemUser";
import Pagination from "../components/Pagination";
import ItemHideable from "../components/ItemHideable";
import { completeElements } from "../tools/commons";

const DEFAULT_ITEMS_PER_PAGE = 5

export default function Users() {
  const { users } = useData()
  const [search, setSearch] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(DEFAULT_ITEMS_PER_PAGE)

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
          <List onFilter={handlerFilter} className="w-full" placeholderText={'Buscar Users'}>
            { completeElements(
                users
                .filter(handlerFilterUsers)
                .filter(handlerFilterPagination),
                DEFAULT_ITEMS_PER_PAGE
              ).map( user => <ItemHideable show={user?.show} key={user?.id}>
                <ItemUser {...user} />
              </ItemHideable>
              )}
          </List>
          <Pagination
            data-howdoit="pagination"
            className="py-5"
            label="users"
            items={users.filter(handlerFilterUsers)}
            onChange={handlerChangePage}
          />
      </div>
    </div>
  );
}