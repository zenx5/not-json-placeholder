export default function Pagination( {tag} ) {

    return <div className="px-20 py-2 text-slate-200">
        <h2 className="text-xl mt-4 mb-3 font-bold text-white">Componente para Paginación</h2>
        <div className="h-[10rem] overflow-y-scroll px-2" style={{ scrollbarWidth:'thin' }}>
            <div className="flex flex-col items-center">
                <p>
                    Este componente esta formado por tres componentes que trabajan juntos para crear un sistema de paginación completo:
                </p>
                <ul className="list-disc list-inside mt-3">
                    <li><span className="font-semibold">PageInfoText</span> se usa junto con PagesNavBar para proporcionar contexto sobre la página actual.</li>
                    <li><span className="font-semibold">PagesNavBar</span> proporciona botones de navegación ("Anterior", "Siguiente") para moverse entre páginas.</li>
                    <li><span className="font-semibold">PagesNavLink</span> representa botones de página individuales dentro de la barra de navegación.</li>
                </ul>
                

            </div>
        </div>

    </div>
}