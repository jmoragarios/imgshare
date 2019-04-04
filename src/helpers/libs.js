const helpers = {};

helpers.randomString = () => {
    const possible = 'acbdefghijklmnopqrstuvwxyz1234567890';
    let randomString = 0;
    for (let i = 0; i < 6; i++) {
        randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomString;
}

module.exports = helpers;