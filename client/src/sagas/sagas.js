import { takeEvery } from 'redux-saga'
import { fork, call, put } from 'redux-saga/effects'
import { getRecentTests } from '../services/api'
import { browserHistory } from 'react-router'

export default function* root(feathersApp) {
    yield [
        fork(getRecentTests)
    ]
}