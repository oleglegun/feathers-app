import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import Home from './components/Home'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
            </Route>

        </Router>
    </Provider>
)


ReactDOM.render(router, document.getElementById('root'))

registerServiceWorker()