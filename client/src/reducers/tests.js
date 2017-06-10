function tests(state = [], action) {
    switch (action.type) {
        case 'RECENT_TESTS_SUCCEEDED':
            return action.tests

        default:
            return state
    }
}


export default tests