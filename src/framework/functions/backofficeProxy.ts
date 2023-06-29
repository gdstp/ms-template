import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { HttpMethods, RoutesMapper, backofficeHandler } from 'ms-common';

const routesMapper: RoutesMapper[] = [
  {
    path: '/ping',
    methods: [HttpMethods.GET],
    function: async (
      event: APIGatewayProxyEvent,
      context: Context
    ): Promise<any> => console.log('ok'),
  },
];

export const handler = async (event: APIGatewayProxyEvent, context: Context) =>
  backofficeHandler(event, context, routesMapper);
