
export default function PagesNavLink({currentPage }) {
  return <button type="button" aria-current="page" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-zinc-700 ring-1 ring-inset ring-zinc-400 hover:bg-white focus:z-20 focus:outline-offset-0">
      { currentPage  }
  </button>
}