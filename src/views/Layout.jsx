import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
    const navigation = [
        { id: 1, to: '/posts', label: 'Posts', className: ({isActive}) => isActive ? "py-2 px-20 border-b border-slate-100 rounded-t-lg bg-slate-300" : "py-2 px-20 border-b border-slate-100 rounded-t-lg hover:bg-slate-200" },
        { id: 2, to: '/users', label: 'Users', className: ({isActive}) => isActive ? "py-2 px-20 border-b border-slate-100 rounded-t-lg bg-slate-300" : "py-2 px-20 border-b border-slate-100 rounded-t-lg hover:bg-slate-200" },
        { id: 3, to: '/albums', label: 'Albums', className: ({isActive}) => isActive ? "py-2 px-20 border-b border-slate-100 rounded-t-lg bg-slate-300" : "py-2 px-20 border-b border-slate-100 rounded-t-lg hover:bg-slate-200" },
    ]

    const links = [
        { label:'Guide', href:'https://jsonplaceholder.typicode.com/guide' },
        { label:'Link #2', href:'#' },
        { label:'Link #3', href:'#' },
        { label:'Link #4', href:'#' },
    ]


    return <div>
        <header className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between py-6 mb-3 text-[#192937]">
            <h3 className="font-bold line-through">JSONPlaceholder</h3>
            <nav>
                <ul className="flex flex-row gap-5">
                    { links.map( link => <a key={link.label} href={link.href} className="" target="_blank" >{link.label}</a>)}
                </ul>
            </nav>
        </header>
        <section className="-mt-3 pt-20 pb-10 mb-6 -mx-2">
            <div className="container mx-auto max-w-4xl group text-[#374151]">
                <span className="text-6xl">Not {'{'}JSON{'}'} Placeholder</span>
                <h1 className="mt-2 text-lg flex flex-col relative overflow-hidden">
                    <span>Very-free very-fake and very-reliable API for testing and prototyping.</span>
                    <span className="absolute top-6 bg-white group-hover:top-0 w-full transition-all duration-500">Click <a  href="https://jsonplaceholder.typicode.com/" target="_blank" className="underline">here</a> to go to the original but <span className="font-bold">fake</span> site</span>
                </h1>
            </div>
        </section>
        <Navigation Element={NavLink} items={navigation} className="mx-auto max-w-4xl "/>
        <main className="container mx-auto max-w-4xl mb-20">
            <>{ children }</>
        </main>
    </div>
}