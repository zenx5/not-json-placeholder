export default function Navigation() {

    return <div className='px-10 py-2'>
        <h1 className='text-white text-2xl mb-2'>Navigation</h1>
        <p className="px-1 py-2 text-slate-100">Esta es la barra de navegacion y la diseñamos como un componente de React que recibe principalmente dos atributos: los items que seran mostrados y el Elemento que se usara para mostrarlos.
        </p>
        <code className="text-sm bg-slate-700 block py-2 px-1 rounded-md">
            <span className="flex flex-row">
                <span className="text-blue-700">export default function</span>
                <span className="text-white ml-2">Navigation</span>
                <span className="text-yellow-400">{'('}</span>
                <span className="text-purple-300">{'{'}</span>
                <span className="text-white">items, Element, ...rest</span>
                <span className="text-purple-300">{'}'}</span>
                <span className="text-yellow-400">{') {'}</span>
            </span>
            <span className="flex flex-row">
                <span className="ml-4 text-blue-700">return</span>
                <span className="ml-2 text-yellow-400">{'<nav {...rest}>'}</span>
            </span>
        </code>
    </div>
}