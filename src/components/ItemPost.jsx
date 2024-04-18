import { NavLink } from "react-router-dom";

export default function ItemPost({id, title, children}) {

    const slugText =String( title ).toLowerCase().replace(/ /g, '-')
    
    const renderSlug = () => {
        return `/posts/${id}-${slugText}`
    }

    return <NavLink to={renderSlug()} 
            className="block hover:bg-slate-200 text-slate-900 hover:text-black py-2 px-2">
                    { children }
            </NavLink>
}