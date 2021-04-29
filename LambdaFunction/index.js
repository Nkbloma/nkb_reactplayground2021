"use strict"; //Formats Node.JS for improved performance.
const MongoClient = require('mongodb').MongoClient;

exports.handler = async (event, callback, context) => {
  var foodName = event.foodName;
  var foodQuery = event.foodQuery;
  let query={};
  query[foodName] = foodQuery;
  const uri = process.env.atlasURI;
  const client = await MongoClient.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
  const collection = await client.db("4500_FoodJournal").collection("UserFoodsEntered");

  const items = await collection.findOne({[foodQuery]:foodName});
  client.close();
  let db_results = "";
  
  if(items)
    db_results = items[foodName];
  else
    db_results = "null"
    
  console.log(items);
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
      body: responseBody
  };
    return response;
};
