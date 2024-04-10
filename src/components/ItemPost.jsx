import { NavLink } from "react-router-dom";

export default function ItemPost({id, title}) {

    const renderSlug = () => {
        return `/posts/${id}-`+title.toLowerCase().replace(/ /g, '-');
    }

    return <NavLink to={renderSlug()} className="block hover:bg-slate-200 text-slate-900 hover:text-black py-2 px-2">{title}</NavLink>
}