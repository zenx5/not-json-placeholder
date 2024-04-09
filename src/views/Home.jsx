import {  useState } from "react"
import List from "../components/List"
import ItemPost from "../components/ItemPost"
import { usePosts } from "../context/PostProvider"


export default function Home() {
  const { posts } = usePosts()
  const [search, setSearch] = useState('')

  const handlerFilter = (value) => {
    setSearch(value.toLowerCase())
  }

  const handlerFilterPosts = (post) => {
    if( search.trim() === '' ) return true
    return post.title.toLowerCase().includes(search)
  }

  return (
    <div className="">
        <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Posts</h1>
        <div className="flex">
            <List onFilter={handlerFilter}>
              { posts.filter(handlerFilterPosts).map( post => <ItemPost key={post.id} id={post.id} title={post.title} /> )}
            </List>
        </div>

    </div>
  )
}