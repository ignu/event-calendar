const fetch = require("node-fetch")
module.exports.fetchMeetup = (name, callback) => {
  return fetch(`http://api.meetup.com/${name}/events/?status=upcoming`)
    .then(res => res.json())
    .then(body => callback(body));
}