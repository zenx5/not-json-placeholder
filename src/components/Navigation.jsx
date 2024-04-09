export default function Navigation({items, Element, ...rest}) {

    return <nav {...rest}>
        <ul className="flex flex-row gap-5 justify-center">
            { items.map( item => <li key={item.id} >
                <Element {...item} >{item.label}</Element>
            </li> )}
        </ul>
    </nav>
}