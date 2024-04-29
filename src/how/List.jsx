import { useState } from "react"

export default function List({ tag }) {
    const [asynMode, setAsynMode] = useState(false)

    return <div className="px-20 py-2 text-how">
        <h2 className="text-xl mt-4 mb-3 font-bold text-white">Lista de <span className="first-letter:uppercase">{tag}</span></h2>
        <div className="h-[10rem] overflow-y-scroll px-2" style={{ scrollbarWidth:'thin' }}>
            <div className="flex flex-col items-center">
                <label className="absolute top-8 right-5 inline-flex items-center flex-row cursor-pointer">
                    <input type="checkbox" value={asynMode} onChange={()=>setAsynMode(prev => !prev)} className="sr-only peer"/>
                    <div className={[
                        /* peer */
                        "peer peer-focus:outline-none peer-focus:ring-0 peer-checked:bg-method",
                        /* dark */
                        "dark:border-white dark:peer-focus:ring-[#1ed760] dark:bg-gray-700",
                        /* after */
                        "after:content-[''] after:transition-all",
                        /* after size and position*/
                        "after:absolute after:top-[2px] after:left-[2px] after:h-3 after:w-3",
                        /* after shape and colors*/
                        "after:bg-white after:border-white after:border after:rounded-full",
                        /* peer-checked:after */
                        "peer-checked:after:translate-x-full peer-checked:after:border-white",
                        /* size and position*/
                        "w-7 h-4",
                        /* shape and colors*/
                        "bg-slate-600 rounded-full"
                    ].join(" ")}></div>
                </label>
                <span className="text-xs absolute top-12 right-4">async</span>
            </div>
            <p className="mb-1">En esta sección podrás encontrar una lista de {tag} que podrás filtrar y paginar.</p>
            <p>La forma como obtenemos los datos desde JSON placeholder es a través de la <span className="text-method">API fetch</span>:</p>
            <span className="text-xs bg-slate-600 py-1 px-4 block rounded tracking-widest w-full">
            {
                asynMode ?
                <>
                    <p><span className="text-method">fetch</span>(<span className="text-string">{"'"}https://jsonplaceholder.typicode.com/{tag}{"'"}</span>)</p>
                    <p className="ml-4">.<span className="text-method">then</span>( response ={'>'} response.<span className="text-method">json</span>() )</p>
                    <p className="ml-4">.<span className="text-method">then</span>( data ={'>'} console.<span className="text-method">log</span>(data) )</p>
                </>
                :<>
                    <p><span className="text-method">async</span> function(){'{'}</p>
                    <p className="ml-4">
                        <span className="font-bold text-white">const </span> response = <span className="font-bold text-white"> await </span><span className="text-method">fetch</span>(<span className="text-string">{"'"}https://jsonplaceholder.typicode.com/{tag}{"'"}</span>)
                    </p>
                    <p className="ml-8">
                        <span className="font-bold text-white">const </span> data = 
                        <span className="font-bold text-white"> await</span> response.<span className="text-method">json</span>()
                    </p>
                    <p>{'}'}</p>
                </>
            }
            </span>
        </div>
    </div>
}