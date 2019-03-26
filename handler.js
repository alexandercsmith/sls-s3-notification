'use strict';

module.exports.s3_notification = async (event) => {
  // Extract S3 data from 'event' object
  const uploadData = event.Records.map(record => {
    return {
      bucketName: record.s3.bucket.name,
      file: record.s3.object.key,
      fileSize: record.s3.object.size
    }
  })[0];
  
  // Generate E-mail with Extracted data
  // Send E-mail
  // Return Response
};
