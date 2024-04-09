import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
    const navigation = [
        { id: 1, to: '/posts', label: 'Posts', className:"py-1 px-4 bg-slate-300 hover:bg-slate-400" },
        { id: 2, to: '/users', label: 'Users', className:"py-1 px-4 bg-slate-300 hover:bg-slate-400" },
        { id: 3, to: '/albums', label: 'Albums', className:"py-1 px-4 bg-slate-300 hover:bg-slate-400" },
    ]


    return <div>
        <Navigation Element={NavLink} items={navigation} />
        <>{ children }</>
    </div>
}