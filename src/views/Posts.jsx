import {  useState } from "react"
import List from "../components/List"
import ItemPost from "../components/ItemPost"
import { useData } from "../context/DataProvider"
import Pagination from "../components/Pagination"
import ItemHideable from "../components/ItemHideable"
import { completeElements } from "../tools/commons"

const DEFAULT_ITEMS_PER_PAGE = 10

export default function Home() {
  const { posts } = useData()
  const [search, setSearch] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(DEFAULT_ITEMS_PER_PAGE)

  const handlerFilter = (value) => {
    setSearch(value.toLowerCase())
  }

  const handlerFilterPosts = (post) => {
    if( search.trim() === '' ) return true
    return post.title.toLowerCase().includes(search)
  }

  const renderTitle = (title) => {
    const items = title.split(search)

    return items.reduce((acc, item, index)=>[
      ...acc,
      item,
      <span key={index} className="bg-yellow-200">{search}</span>
    ],[]).slice(0,-1)
  }

  const handlerChangePage = (newStart, newEnd) => {
    setStartIndex(newStart)
    setEndIndex(newEnd)
  }

  const handlerFilterPagination = (_, index) => index >= startIndex && index < endIndex

  return (
    <div className="">
        <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Posts</h1>
        <div className="flex flex-col" data-howdoit="list-post">
            <List onFilter={handlerFilter}>
              {
                completeElements(
                  posts
                  .filter(handlerFilterPosts)
                  .filter(handlerFilterPagination),
                  DEFAULT_ITEMS_PER_PAGE
                )
                .map( post => <ItemHideable show={post?.id} key={post.id}>
                  <ItemPost id={post.show ? post?.id : ''} title={post?.title}>{ renderTitle(post?.title ?? "") }</ItemPost>
                </ItemHideable> )}
            </List>
        </div>
        <Pagination
          data-howdoit="pagination"
          className="py-5"
          label="posts"
          items={posts.filter(handlerFilterPosts).filter(handlerFilterPagination)}
          itemsPerPage={DEFAULT_ITEMS_PER_PAGE}
          onChange={handlerChangePage}
        />
    </div>
  )
}