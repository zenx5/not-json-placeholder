import { useEffect, useState } from "react"
import List from "../components/List"
import ItemPost from "../components/ItemPost"
import PostService from "../services/PostService"


export default function Home() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    PostService
      .getAll()
      .then( data => setPosts(data) )
  },[])

  const handlerFilter = (value) => {
    setSearch(value.toLowerCase())
  }

  const handlerFilterPosts = (post) => {
    if( search.trim() === '' ) return true
    return post.title.toLowerCase().includes(search)
  }

  return (
    <div className="mx-20">
        <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Posts</h1>
        <div className="flex">
            <List onFilter={handlerFilter}>
              { posts.filter(handlerFilterPosts).map( post => <ItemPost key={post.id} id={post.id} title={post.title} /> )}
            </List>
        </div>

    </div>
  )
}