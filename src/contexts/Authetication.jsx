import { createContext, useEffect, useState } from 'react'

const Context = createContext()

export default function Provider({ children }) {
    const [state, setState] = useState(window.localStorage.getItem('token') || null)

    useEffect(() => {
        if (state) {
            window.localStorage.setItem('token', state)
        } else {
            window.localStorage.clear()
        }
    }, [state])

    return (
        <Context.Provider value={{ state, setState }}>
            {children} 
        </Context.Provider>
    )
}

export { Context, Provider }