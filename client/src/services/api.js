export function getRecentTests(app) {
    const tests = app.service('tests')
    return tests.get().then((data, err) => data.data)
}