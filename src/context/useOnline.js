import { useEffect, useState } from "react"

export function useOnline() {
    const [online, setOnline] = useState(true)

    useEffect(()=>{
        window.addEventListener('online', () => setOnline(true))
        return ()=>window.addEventListener('online', () => setOnline(true))
    },[])

    useEffect(()=>{
        window.addEventListener('offline', () => setOnline(false))
        return ()=>window.addEventListener('offline', () => setOnline(false))
    },[])


    return online
}