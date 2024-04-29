export default function ItemHideable({ show, children }) {
    return <span style={{
        opacity: show ? 1 : 0,
    }}>{ children }</span>
}