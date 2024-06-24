import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import IconGithub from "../assets/github.svg";

export default function Layout({ children }) {
    const navigation = [
        { id: 1, to: '/posts', label: 'Posts', className: ({isActive}) => isActive ? "py-2 px-20 border-b border-slate-100 rounded-t-lg bg-slate-300" : "py-2 px-20 border-b border-slate-100 rounded-t-lg hover:bg-slate-200" },
        { id: 2, to: '/users', label: 'Users', className: ({isActive}) => isActive ? "py-2 px-20 border-b border-slate-100 rounded-t-lg bg-slate-300" : "py-2 px-20 border-b border-slate-100 rounded-t-lg hover:bg-slate-200" },
        { id: 3, to: '/albums', label: 'Albums', className: ({isActive}) => isActive ? "py-2 px-20 border-b border-slate-100 rounded-t-lg bg-slate-300" : "py-2 px-20 border-b border-slate-100 rounded-t-lg hover:bg-slate-200" },
    ]

    const links = [
        { id: 'label1', label:'Guide', href:'https://jsonplaceholder.typicode.com/guide' },
        { id: 'label2', label:<>Sponsor <span className="italic">that</span> project</>, href:'https://github.com/sponsors/typicode' },
        { id: 'label3', label:'Our Blog', href:'https://www.linkedin.com/in/zenx5/recent-activity/articles' },
        { id: 'label4', label:<span className="flex flex-row gap-2 text-white bg-black py-0.5 px-4 rounded ">
            <img src={IconGithub} width={20} height={20} />
            <span>Check out </span>
        </span>, href:'https://github.com/zenx5/not-json-placeholder' },
    ]


    return <div className="px-2">
        <header className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between py-6 mb-3 text-[#192937]">
            <h3 className="font-bold line-through">JSONPlaceholder</h3>
            <nav>
                <ul className="flex flex-row gap-5">
                    { links.map( link => <a key={link.id} href={link.href} className="" target="_blank" >{link.label}</a>)}
                </ul>
            </nav>
        </header>
        <section className="-mt-3 pt-20 pb-10 mb-6 -mx-2">
            <div className="container mx-auto max-w-4xl group text-[#374151]">
                <span className="text-6xl">Not {'{'}JSON{'}'} Placeholder</span>
                <h1 className="mt-2 text-lg flex flex-col relative overflow-hidden">
                    <span className="px-1">Very-free very-fake and very-reliable API for testing and prototyping.</span>
                    <span className="absolute top-14 px-1 bg-zinc-200 group-hover:top-0 w-full h-full transition-all duration-500">Click <a  href="https://jsonplaceholder.typicode.com/" target="_blank" className="underline">here</a> to go to the original but <span className="font-bold">fake</span> site</span>
                </h1>
            </div>
        </section>
        <Navigation Element={NavLink} items={navigation} className="mx-auto max-w-4xl "/>
        <main className="container mx-auto max-w-4xl mb-20">
            <>{ children }</>
        </main>
        <footer className="container mx-auto max-w-4xl grid grid-cols-7 gap-4 md:flex-row justify-between py-6 pb-0 mb-0 text-[#374151] px-4 border-t border-[#374151]">
            <span className="col-span-4 text-md">
                <h2 className="text-xl mb-2 font-semibold">About this fake</h2>
                <p className="mb-4">We think that <a href="https://jsonplaceholder.typicode.com" className="font-bold text-blue-500 hover:underline" target="blank">JSONPlaceholder</a> is a great project, which has contributed a lot to the dev world. For this reason, we decided to make a tribute where we have implemented its API and tell a little how we did it</p>
                <p>In addition, we have implemented How Do it, to show how our students approached this challenge.</p>
            </span>
            <span className="col-span-3 text-md">
                <h2 className="text-xl mb-2 font-semibold">{'"'}How Do It{'"'} is available in <a className="text-blue-500 hover:underline" href="https://www.npmjs.com/package/how-do-it" target="blank">npm</a></h2>
                <p className="mb-4">This is a module we created during the development of this project, you can use it to add comments to your interface</p>
                <p>With our students, we left their assignments commented with this module. And at the end of the project we turn them into useful aids for future students.</p>
            </span>

        </footer>
    </div>
}
