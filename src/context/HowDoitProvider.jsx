import { createContext, useContext, useEffect, useState, useRef } from "react";

const HowDoitContext = createContext({
    createDataset: key => ({ 'data-howdoit': key })
})

export function useHowDoit() {
    return useContext(HowDoitContext)
}

export function HowDoitProvider({content, children }) {
    const [current, setCurrent] = useState(null)
    const [show, setShow] = useState(false)
    const ref = useRef()

    const createDataset = key => {
        return {
            'data-howdoit': key
        }
    }

    useEffect(()=>{
        function clickIt(event) {
            const howdoit = event.target.dataset.howdoit
            if( howdoit ) {
                setCurrent(howdoit)
                ref.current.style.display = 'block'
                setTimeout(()=>setShow( prev =>  !prev),100)
            }
        }
        document.addEventListener('click', clickIt)

        return ()=>document.removeEventListener('click', clickIt)
    },[show])

    useEffect(()=>{
        if( !show ) {
            setCurrent(null)
            setTimeout(()=>ref.current.style.display = 'none', 1100)
        }
    },[show])

    const values = {
        createDataset
    }

    return <HowDoitContext.Provider value={values}>
        {children}
        <span
            ref={ref}
            style={{
                opacity: show ? 1 : 0
            }}
            className="bg-slate-500 rounded-xl transition-all duration-1000 fixed bottom-5 w-2/4 h-60 shadow-lg shadow-slate-400 mx-auto left-1/4">
                { current && content[current] }
            </span>
    </HowDoitContext.Provider>
}