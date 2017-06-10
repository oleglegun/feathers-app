import { takeEvery } from 'redux-saga'
import { fork, call, put } from 'redux-saga/effects'
import { getRecentTests } from '../services/api'
import { browserHistory } from 'react-router'

function* fetchRecentTests(feathersApp) {
    const tests = yield call(getRecentTests, feathersApp)
    yield put({ type: "RECENT_TESTS_SUCCEEDED", tests })
}

function* recentTestsSaga(feathersApp) {
    yield* takeEvery("RECENT_TESTS_REQUESTED", fetchRecentTests, feathersApp)
}

export default function* root(feathersApp) {
    yield [
        fork(getRecentTests)
    ]
}