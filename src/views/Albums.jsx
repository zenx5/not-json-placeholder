import { useState } from "react";
import List from "../components/List";
import { useData } from "../context/DataProvider";
import ItemAlbum from "../components/ItemAlbum";


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
      <div className="flex">
          <List onFilter={handlerFilter} className="w-full">
            {albums.filter(handlerFilterAlbums).map( album => <ItemAlbum key={album.id} id={album.id} title={album.title} /> )}
          </List>
      </div>
    </div>
  );
}