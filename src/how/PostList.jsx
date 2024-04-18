export default function PostList() {

    return <div className="px-20 py-2 text-slate-200">
        <h2 className="text-xl my-4 font-bold text-white">Lista de Post</h2>
        <p>
            Necesitamos mostrar una lista limitada de los posts,
            la idea es que se muestren <span className="font-bold text-white">solo 10 posts</span>.<br/>
            Y controlar la paginación de los mismos con un <span className="font-bold text-white">componente de paginación</span>.

        </p>

    </div>
}