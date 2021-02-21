import Home from './Home'
import User from './User'
import { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'


const Content = (props) => {

    const { context, setContext } = useContext(AdminContext)

    useEffect(() => {
        if (context.page === null) { setContext({ ...context, page: 'Home' }) }
    }, [context, setContext])

    return (
        <>
            <div className="content">
                <div className="container">
                    {context.page === 'Home' && (<Home />)}
                    {context.page === 'User' && (<User />)}
                </div>
            </div>
        </>
    )
}

export default Content
