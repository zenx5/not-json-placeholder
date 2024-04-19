import { useState } from "react";
import List from "../components/List";
import { useData } from "../context/DataProvider";
import ItemAlbum from "../components/ItemAlbum";
import Pagination from "../components/Pagination";

export default function Albums() {
  const { albums } = useData()
  const [search, setSearch] = useState('')

  const handlerFilter = (value) => {
    setSearch(value.toLowerCase())
  }

  const handlerFilterAlbums = (album) => {
    if( search.trim() === '' ) return true
    return album.title.toLowerCase().includes(search)
  }

  return (
    <div className="">
      <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Albums</h1>
      <div className="flex flex-col">
          <List onFilter={handlerFilter} className="w-full">
            <div className="grid grid-cols-2 grid-flow-row gap-2" data-howdoit="list-album">
              {albums.filter(handlerFilterAlbums).map( album => <ItemAlbum key={album.id} id={album.id} title={album.title} /> )}
            </div>
          </List>
          <Pagination />
      </div>
    </div>
  );
}