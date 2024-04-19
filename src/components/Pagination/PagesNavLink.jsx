
export default function PagesNavLink({currentPage }) {
  return (
    <>
        <button type="button" aria-current="page" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">  
           { currentPage  }
        </button>
    </>
  )
}

/** 
 *  isCurrent ? `aria-current="page"` : "" 
 *  Esta operacion ternaria se requiere, de ser posible aplicarla, para indicar el aria-current,
 *  asi como tambien stilizar el boton de paginacion de la pagina actual.
 * */