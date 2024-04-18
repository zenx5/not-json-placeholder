export default function List({ tag }) {

    return <div className="px-20 py-2 text-slate-200">
        <h2 className="text-xl my-4 font-bold text-white">Lista de <span className="first-letter:uppercase">{tag}</span></h2>
        <p>
            Necesitamos mostrar una lista limitada de los {tag},
            la idea es que se muestren <span className="font-bold text-white">solo 10 {tag}</span>.<br/>
            Y controlar la paginación de los mismos con un <span className="font-bold text-white">componente de paginación</span>.

        </p>

    </div>
}