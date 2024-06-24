export default function Pagination( {tag} ) {

    return <div className="px-20 py-2 text-slate-200">
        <h2 className="text-xl mt-4 mb-3 font-bold text-white">Componente para Paginación</h2>
        <div className="h-[10rem] overflow-y-scroll px-2" style={{ scrollbarWidth:'thin' }}>
            <div className="flex flex-col items-center">
                <p>
                    Este componente esta formado por tres componentes que trabajan juntos para crear un sistema de paginación completo:
                </p>
                <ul className="list-disc list-inside mt-3">
                    <li>
                        <span className="text-method mr-1">PageInfoText</span>
                        <span>
                            se usa junto con PagesNavBar para proporcionar contexto sobre la página actual.
                        </span>                        
                        <code className="text-xs bg-slate-600 py-2 px-4 block rounded tracking-widest w-full mt-2">
                            <span className="text-orange-200">&lt;p&gt;</span> <div className="pl-3"> Mostrando{" { "} <span className="text-[#b797f2]">label</span> {" } "} <br /> <span className="text-orange-200">&lt;span&gt;</span>{" { "}<span className="text-[#b797f2]">start</span>{" } "}<span className="text-orange-200">&lt;/span&gt;</span> <br /> - <br /> <span className="text-orange-200">&lt;span&gt;</span>{" { "}<span className="text-[#b797f2]">end</span>{" } "} <span className="text-orange-200">&lt;/span&gt;</span> <br /> de{" { "} <span className="text-string">" "</span> {" } "} <br /> <span className="text-orange-200">&lt;span&gt;</span>{" { "} <span className="text-[#b797f2]">total</span> {" } "}<span className="text-orange-200">&lt;/span&gt;</span></div><span className="text-orange-200">&lt;/p&gt;</span>                            
                        </code>                                     
                    </li>
                    <li>
                        <span className="text-method mr-1">PagesNavBar</span>
                        <span>
                            proporciona botones de navegación ("Anterior", "Siguiente") para moverse entre páginas.
                        </span>
                    </li>
                    <li>
                        <span className="text-method mr-1">PagesNavLink</span>
                        <span>
                            representa botones de página individuales dentro de la barra de navegación, en conjunto con PagesNavBar nos queda de la siguiente forma:
                        </span>

                        <code className="text-xs bg-slate-600 py-2 px-4 block rounded tracking-widest w-full mt-2">
                            <span className="text-orange-200">&lt;button <span className="text-gray-200">onClick=</span><span className="text-method">{"{()=>onChange(-1)}"}</span> &gt;</span>Anterior<span className="text-orange-200">&lt;/button&gt;</span>
                            <br />
                            <span className="text-orange-200">&lt;button&gt;</span>Actual<span className="text-orange-200">&lt;/button&gt;</span>
                            <br />
                            <span className="text-orange-200">&lt;button <span className="text-gray-200">onClick=</span><span className="text-method">{"{()=>onChange(1)}"}</span> &gt;</span>Siguiente<span className="text-orange-200">&lt;/button&gt;</span>                          
                        </code>  

                    </li>
                </ul>
                

            </div>
        </div>

    </div>
}