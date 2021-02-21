import { createContext, useState } from 'react'

export const AdminContext = createContext()

export const AdminProvider = (props) => {
    const [context, setContext] = useState({ page: null })
    return (
        <AdminContext.Provider value={{ context, setContext }}>
            {props.children}
        </AdminContext.Provider>
    )
}
