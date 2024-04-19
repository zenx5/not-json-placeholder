import PagesNavLink from "./PagesNavLink";

export default function PagesNavBar({ currentPage, setCurrentPage, nPages}) {

  const handlerNextClick = () => {
    if (currentPage !== nPages)  {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlerPreviousClick = () => {
    if (currentPage !== 1)  {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
      
      <button type="button" onClick={handlerPreviousClick} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
      </button>

      {/** Deseo iterar (mediante un bucle for) desde index=1 hasta nPages  
       * si index === currentPage entonces renderizar el componente con los estilos para el current,
       * por defecto, los componentes tendran los estilos por default   */}
      <PagesNavLink currentPage={currentPage} nPages={nPages} />
      
      <button type="button" onClick={handlerNextClick} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
        <span className="sr-only">Next</span>
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
        </svg>
      </button>
    </nav>
  </div>
  )
}
