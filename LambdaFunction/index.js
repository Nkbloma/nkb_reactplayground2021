"use strict"; //Formats Node.JS for improved performance.
const MongoClient = require('mongodb').MongoClient;
async function connectToMongo() {
  const uri = process.env.atlasURI;
  const client = await MongoClient.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
  const collection = client.db("gettingStarted").collection("people");
  const items = await collection.findOne({});
  client.close();
  return items;
}

exports.handler = async (event, context, callback) => {
  let db_results = await connectToMongo()
  console.log(db_results);
  let responseBody = {
      mongoData: db_results,
      response_data: event
    }
    let response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(responseBody)
    };
    return response;
};
