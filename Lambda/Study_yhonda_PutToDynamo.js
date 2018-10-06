'use strict';

var AWS = require('aws-sdk');
var documentClient = new AWS.DynamoDB.DocumentClient();

const createResponse = (callback, statusCode, body) => {
    var res = {
        "statusCode": statusCode,
        "headers": { "Test-Headr1": "1234" },
        "body": JSON.stringify(body)
    }
    callback(null, res);
}

exports.handler = function( event, context, callback ) {
  var params = {
    "TableName": "Study_persona",
    "Item": {
      "name": event.name,
      "grade": event.grade,
      "age": event.age
    }
  };
  documentClient.put(params, function(err, data) {
    if (err) {
      createResponse(callback, 500, { "msg": "Create Error!", "err": err, "req": req});
    } else {
      createResponse(callback, 200, { "msg": "Create OK!!", "event": event });
    }
  });
};
