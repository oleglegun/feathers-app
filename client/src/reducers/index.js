import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import tests from './tests'

const rootReducer = combineReducers({tests, routing: routerReducer})

export default rootReducer