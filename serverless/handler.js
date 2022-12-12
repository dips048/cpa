'use strict';

// importing AWS sdk
const AWS = require('aws-sdk');

// Instatiating the SES from AWS SDK
let ses = new AWS.SES();

// The function to send SES email message
module.exports.sendMail = (event, context, callback) => {
  console.log("SES successful", event);

  let bccEmailAddresses = event.body.bccEmailAddresses;
  let ccEmailAddresses = event.body.ccEmailAddresses;
  let toEmailAddresses = event.body.toEmailAddresses;
  let bodyData = event.body.bodyData;
  let bodyCharset = event.body.bodyCharset;
  let subjectdata = event.body.subjectdata;
  let subjectCharset = event.body.subjectCharset;
  let sourceEmail = event.body.sourceEmail;
  let replyToAddresses = event.body.replyToAddresses;

// The parameters for sending mail using ses.sendEmail()
  let emailParams = {
    Destination: {
      BccAddresses: bccEmailAddresses,
      CcAddresses: ccEmailAddresses,
      ToAddresses: toEmailAddresses
    },
    Message: {
      Body: {
        Text: {
          Data: bodyData,
          Charset: bodyCharset
        }
      },
      Subject: {
        Data: subjectdata,
        Charset: subjectCharset
      }
    },
    Source: sourceEmail,
    ReplyToAddresses: replyToAddresses
  };

// the response to send back after email success.
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Mail sent successfully'
    }),
  };

// The sendEmail function taking the emailParams and sends the email requests.
  ses.sendEmail(emailParams, function (err, data) {
      if (err) {
          console.log("error", err, err.stack);
          callback(err);
      } else {
        console.log("SES successful");
        console.log(data);
        callback(null, response);
        context.done(null, response)
      }
  });
};
