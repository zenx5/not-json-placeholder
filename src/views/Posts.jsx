import {  useState } from "react"
import List from "../components/List"
import ItemPost from "../components/ItemPost"
import { useData } from "../context/DataProvider"
import Pagination from "../components/Pagination"


export default function Home() {
  const { posts } = useData()
  const [search, setSearch] = useState('')

  const handlerFilter = (value) => {
    setSearch(value.toLowerCase())
  }

  const handlerFilterPosts = (post) => {
    if( search.trim() === '' ) return true
    return post.title.toLowerCase().includes(search)
  }

  const renderTitle = (title) => {
    const items = title.split(search)

    return items.reduce((acc,item, index)=>[
      ...acc,
      item,
      <span key={index} className="bg-yellow-200">{search}</span>
    ],[]).slice(0,-1)
  }

  return (
    <div className="">
        <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Posts</h1>
        <div className="flex flex-col" data-howdoit="list-post">
            <List onFilter={handlerFilter}>
              { posts.filter(handlerFilterPosts).map( post => <ItemPost key={post.id} id={post.id} title={post.title}>{ renderTitle(post.title) }</ItemPost> )}
            </List>
            <Pagination/>
        </div>
    </div>
  )
}