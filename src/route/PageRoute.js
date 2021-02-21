import { Switch, Route } from 'react-router-dom'
import App from '../App'
import Admin from '../admin/Admin'
import Login from '../admin/Login'
import NotFound from '../NotFound'
import Authentication from "../middleware/authentication";

const PageRoute = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/admin" render={() => Authentication() ? <Admin /> : <Login />} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default PageRoute