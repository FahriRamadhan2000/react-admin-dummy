import Drawer from './Drawer'
import Content from './Content'
import Header from './Header'
import { AdminProvider } from '../context/AdminContext'

const Admin = (props) => {
    return (
        <>
            <AdminProvider>
                <div className="container-fluid">
                    <div className="row">
                        <Drawer />
                        <div className="content-wrapper col p-0">
                            <Header />
                            <Content />
                        </div>
                    </div>
                </div>
            </AdminProvider>
        </>
    )
}

export default Admin