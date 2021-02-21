import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const Header = (props) => {

    const { context } = useContext(AdminContext)

    return (
        <>
            <div className="navbar mb-4">
                <div className="container">
                    <h4>Admin / {context.page}</h4>
                </div>
            </div>
        </>
    )
}

export default Header