const fetch = require("node-fetch")
module.exports.fetchMeetup = (name, callback) => {
  fetch(`http://api.meetup.com/${name}/events/`)
    .then(res => res.json())
    .then(body => callback(body));
}