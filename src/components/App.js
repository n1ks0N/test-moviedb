import React, { useEffect } from 'react'
import { Route, Switch, withRouter, useHistory, useParams, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'

const App = (props) => {
  // let {id} = useParams()
  // let history = useHistory()
  // let location = useLocation();
  // useEffect(() => {
  //   history.push(location.pathname);
  // }, [location]);
  // const query = props.state.search.query
  // useEffect(() => {
  //   console.log(query)
  //   history.push(query)
  // }, [query])
  return (
    <div className="App">
      <Switch>
        <Route
          exact path="/"
          render={() => Home(props)}
        />
        <Route
          path={`/`}
          render={() => Movies(props)}
        />
        <Route path="*">404</Route>
      </Switch>
    </div>
  )
}

export default withRouter(App)