import homePNG from '../assets/home.png'
import logoutPNG from '../assets/logout.png'
import userPNG from '../assets/user.png'
import { useHistory } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { useContext } from 'react'
import { AdminContext } from "../context/AdminContext";

const CustomTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#ffffff',
        color: '#565360',
        fontSize: '1.25rem'
    },
}))(Tooltip);

const Drawer = (props) => {
    const { context, setContext } = useContext(AdminContext)

    let history = useHistory()

    const handleLogout = () => {
        localStorage.clear()
        history.push('/admin')
    }

    const handleSwitch = (component) => setContext({ ...context, page: component })

    return (
        <>
            <div className="drawer d-flex flex-column justify-content-between py-3">
                <div>
                    <div className="mb-4 p-1" onClick={() => handleSwitch('Home')} >
                        <CustomTooltip title="Dashboard" placement='right'>
                            <img className="drawer-icon" src={homePNG} alt="home" />
                        </CustomTooltip>
                    </div>
                    <div className="mb-4 p-1" onClick={() => handleSwitch('User')} >
                        <CustomTooltip title="User" placement='right'>
                            <img className="drawer-icon" src={userPNG} alt="user" />
                        </CustomTooltip>
                    </div>
                </div>
                <div className='p-1' onClick={handleLogout} >
                    <CustomTooltip title="Logout" placement='right'>
                        <img className="drawer-icon" src={logoutPNG} alt="logout" />
                    </CustomTooltip>
                </div>
            </div>
        </>
    )
}

export default Drawer