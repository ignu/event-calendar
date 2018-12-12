'use strict';

const { fetchMeetup } = require("./lib/fetchMeetup");
const ioPipeFunc = require('@iopipe/iopipe')
const iopipe = ioPipeFunc({token: process.env.IOPIPE_TOKEN})
const {mark} = ioPipeFunc;

module.exports.hello = iopipe((event, context, callback) => {
  mark.start("fetch")
  fetchMeetup("Seattle-Dungeons-And-Dragons", (body) => {
    mark.end("fetch")
    const response = {
      statusCode: 200,
      body: {
        evevnts: body
      }
    };

    callback(null, response);
  })
});

module.exports.index = (event, context, callback) => {
  console.log("fetching index", event);

  const html = '<html><head><title>HTML from API Gateway/Lambda</title></head>' + 
    '<body><h1>HTML from API Gateway/Lambda</h1></body></html>';

  context.succeed(html)
};
