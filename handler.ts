import { APIGatewayProxyHandler } from "aws-lambda";

import Response from './src/helper/Response'

export const lambda: APIGatewayProxyHandler = async (event, context) => {

 const response = Response.getInstance()

  try {
    
    const path = event.requestContext.path;

    const { default: executor } = await import(`./src/methods/${path.slice(1)}`)
    
    const res = executor()

    response.setStatusCode(200);
    response.setBody(res)

  } catch (error) {
    response.setBody("Not ok!")
  }

  return response.prepareResponse();

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify("Hello")
  // }

};
