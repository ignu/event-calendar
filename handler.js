'use strict';

const { fetchMeetup } = require("./lib/fetchMeetup");

module.exports.hello = (event, context, callback) => {
  fetchMeetup("Seattle-Dungeons-And-Dragons", (body) => {
    const response = {
      statusCode: 200,
      body
    };

    callback(null, response);
  })
};

module.exports.index = (event, context, callback) => {
  console.log("fetching index", event);

  const html = '<html><head><title>HTML from API Gateway/Lambda</title></head>' + 
    '<body><h1>HTML from API Gateway/Lambda</h1></body></html>';

  context.succeed(html)
};
