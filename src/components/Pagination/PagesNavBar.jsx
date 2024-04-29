export default function PagesNavBar({ children, onChange }) {


  return (
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
      <button type="button" onClick={()=>onChange(-1)} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-zinc-700 ring-1 ring-inset ring-zinc-400 hover:bg-lime-200 focus:z-20 focus:outline-offset-0" >
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
      </button>
      { children }
      <button type="button" onClick={()=>onChange(1)} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-zinc-700 ring-1 ring-inset ring-zinc-400 hover:bg-lime-200 focus:z-20 focus:outline-offset-0" >
        <span className="sr-only">Next</span>
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
        </svg>
      </button>
    </nav>
  )
}
