import { useState } from "react";
import PageInfoText from "./Pagination/PageInfoText";
import PagesNavBar from "./Pagination/PagesNavBar"; 
import PagesNavLink from "./Pagination/PagesNavLink";

export default function Pagination({
  label,
  items,
  itemsPerPage = 5,
  onChange
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const handlerChangePage = value => {
    if( currentPage + value === 0 || currentPage + value > Math.ceil(items.length / itemsPerPage) ) return
    setCurrentPage(currentPage + value)
    if( onChange ) {
      const start = (currentPage + value - 1) * itemsPerPage
      const end = start + itemsPerPage
      onChange(start, end)
    }
  }

  return <div data-howdoit="pagination" className="flex justify-center items-center space-x-2 p-10 m-5">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => handlerChangePage(-1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >Previous</button>
        <button
          onClick={() => handlerChangePage(1)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >Next</button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <PageInfoText label={label} start={(currentPage-1)*itemsPerPage + 1} end={currentPage*itemsPerPage} total={items.length} />
        <PagesNavBar onChange={handlerChangePage}>
          <PagesNavLink currentPage={currentPage} pages={Math.ceil(items.length / itemsPerPage)} />
        </PagesNavBar>
      </div>
  </div>
}