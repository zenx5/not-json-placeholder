import { NavLink } from "react-router-dom";

export default function ItemPost({id, title}) {

    const renderSlug = () => {
        return `/posts/${id}-`+title.toLowerCase().replace(/ /g, '-');
    }

    return <NavLink to={renderSlug()} className="block hover:underline py-1">{title}</NavLink>
}