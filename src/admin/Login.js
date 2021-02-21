import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {

    const [password, setPassword] = useState({ type: 'password', label: 'unlock' })

    let history = useHistory()

    const handleSubmit = (event) => {
        localStorage.setItem('auth', 'goToAdminPage')
        history.push('/admin')
    }

    const handleShowPassword = () => password.type === 'password' ? setPassword({ type: 'text', label: 'lock' }) : setPassword({ type: 'password', label: 'unlock' })

    return (
        <>
            <div className="login-wrapper d-flex align-content-center">
                <div className="form-wrapper col-11 col-sm-6 col-lg-4 m-auto p-5">
                    <h2 className="text-center mb-3">Authentication</h2>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                    </div>
                    <div className="input-group mb-3">
                        <input type={password.type} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                        <span className="input-group-text" id="basic-addon1" onClick={handleShowPassword} style={{ cursor: 'pointer' }} >{password.label}</span>
                    </div>
                    <div className="input-group d-grid">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit} >Login</button>
                    </div>
                    <br />
                    <p>*langsung login tanpa username dan password</p>
                </div>
            </div>

        </>
    )
}

export default Login