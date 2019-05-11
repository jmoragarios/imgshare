const moment = require('moment');
const helpers = { }

helpers.timeAgo = timeStamp => {
    return moment(timeStamp).startOf('minute').fromNow();
}

module.exports = helpers;