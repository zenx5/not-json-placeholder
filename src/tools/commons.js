export const completeElements = (elements, total) => {
    const diff = total - elements.length
    if( diff > 0 ) {
        return [
            ...elements.map( element => ({...element, show:true}) ),
            ...Array.from({length:diff}).map( (_, index) => ({ id: `hide-${index}`, show:false }) )
        ]
    }
    return elements.map( element => ({...element, show:true}) )
}