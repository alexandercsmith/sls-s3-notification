'use strict';

module.exports.s3_notification = async (event) => {
  // Extract S3 data from 'event' object
  // Generate E-mail with Extracted data
  // Send E-mail
  // Return Response
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};
