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
                setTimeout(()=>setShow( () =>  true),100)
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

    const handlerClose = () => setShow(false)

    return <HowDoitContext.Provider value={values}>
        {children}
        <span
            ref={ref}
            style={{
                opacity: show ? 1 : 0
            }}
            className={
                "transition-all duration-1000 " +
                "bg-slate-500 shadow-lg shadow-slate-400 rounded-xl " +
                "fixed bottom-5 w-1/2 h-60  mx-auto left-1/4 "
            }
            >
                { current && content[current] }
                <button
                    onClick={handlerClose}
                    className={
                        "w-5 h-5 " +
                        "absolute -top-1 -right-1 " +
                        "flex justify-center items-center " +
                        "border border-slate-500 bg-white " +
                        "cursor-pointer rounded-full"
                    }
                >x</button>
            </span>
    </HowDoitContext.Provider>
}