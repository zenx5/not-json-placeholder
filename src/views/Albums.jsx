import { useState } from "react";
import List from "../components/List";
import { useData } from "../context/DataProvider";
import ItemAlbum from "../components/ItemAlbum";
import Pagination from "../components/Pagination";
import ItemHideable from "../components/ItemHideable";

import { completeElements } from "../tools/commons";

const DEFAULT_ITEMS_PER_PAGE = 6

export default function Albums() {
  const { albums } = useData()
  const [search, setSearch] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(DEFAULT_ITEMS_PER_PAGE)

  const handlerFilter = (value) => {
    setSearch(value.toLowerCase())
  }

  const handlerFilterAlbums = (album) => {
    if( search.trim() === '' ) return true
    return album.title.toLowerCase().includes(search)
  }

  const handlerChangePage = (newStart, newEnd) => {
    setStartIndex(newStart)
    setEndIndex(newEnd)
  }

  const handlerFilterPagination = (_, index) => index >= startIndex && index < endIndex



  return (
    <div className="">
      <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Albums</h1>
      <div className="flex flex-col">
          <List onFilter={handlerFilter} className="w-full" placeholderText={'Buscar Albums'}>
            <div className="grid grid-cols-2 grid-flow-row gap-2" data-howdoit="list-album">
              {
                completeElements(
                  albums
                  .filter(handlerFilterAlbums)
                  .filter(handlerFilterPagination)
                , DEFAULT_ITEMS_PER_PAGE)
                .map( album => <ItemHideable show={album.show} key={album.id}>
                  <ItemAlbum id={album?.id} title={album?.title} />
                </ItemHideable> )}
            </div>
          </List>
          <Pagination
            data-howdoit="pagination"
            className="py-5"
            label="albums"
            items={albums.filter(handlerFilterAlbums)}
            itemsPerPage={DEFAULT_ITEMS_PER_PAGE}
            onChange={handlerChangePage}
          />
      </div>
    </div>
  );
}