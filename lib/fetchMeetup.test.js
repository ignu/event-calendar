const {fetchMeetup} = require("./fetchMeetup");

test('test', (done) => {
  fetchMeetup("Seattle-Dungeons-And-Dragons", (body) => {
    done()
  })
});