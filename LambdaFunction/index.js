"use strict"; //Formats Node.JS for improved performance.

exports.handler = async (event) => {
    let name='user';
    let responseCode = 200;
    
    /*Recieves the json body data sent by the POST method
    from curl or React.JS's axios functions. One interesting
    thing to note is how we are getting data from the request's
    body(event.body) instead of the query string parameters
    from the url(event.queryStringParameters). This is because
    we want users to use the POST method, which sends data using
    the body value in the request, instead of the GET method,
    which sends it through the URL parameters.
    */
    if (event.body) {
        let body = JSON.parse(event.body)
        if(body.name)
            name=body.name;
    }
    //Creates the data object that will be sent back to the user.
    //We format it in a way so we can easily transfer it to json.
    //and access the message using data['message']
    
    let greeting = `Good day ${name}.`;
    let responseBody = {
        message: greeting,
        response_data: event
    };
    
    /*Creates the http response that will be sent back
    to the user. We use Json stringify here because
    1, we formatted the above responseBody similar to JSON,
    and 2, it'll be easier to access the message because
    res.data will automatically return the body portion here
    and the message will be a json element like res.data['message']
    */
    let response = {
        statusCode: responseCode,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(responseBody)
    };
    /*
        Making our own response will also allow us to specify certain
        http functions. The headers shown enable CORS, which lifts certain
        security measures in order for a  user to access this code. Though
        not a smart way to handle this, Access-Control-Allow-Origin: "*" means
        that anyone can access the api. You could access it right now using
        curl so long as you send the data as a json object. If you're on windows,
        this would look like:
        curl -d "{\"name\":\"yourname\"}" apiurl.
    */
    
    return response;
};
