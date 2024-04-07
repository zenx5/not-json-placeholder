import { NavLink } from "react-router-dom";

export default function Layout({ children }) {



    return <div>
        <nav>
            <ul className="flex flex-row gap-5 justify-center">
                <li><NavLink className="py-1 px-4 bg-slate-300 hover:bg-slate-400" to={'/'} >Home</NavLink></li>
                <li><NavLink className="py-1 px-4 bg-slate-300 hover:bg-slate-400" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        <>{ children }</>
    </div>
}