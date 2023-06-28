import { APIGatewayProxyEvent, Context } from 'aws-lambda';

const routesMapper = [
  {
    path: '/ping',
    methods: ['GET'],
    function: async (
      event: APIGatewayProxyEvent,
      context: Context
    ): Promise<any> => console.log('ok'),
  },
];

const backofficeHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  routesMapper: Array<{
    path: string;
    methods: Array<string>;
    function: (event: APIGatewayProxyEvent, context: Context) => Promise<any>;
  }>
) => {
  const executeWithoutAtt = routesMapper.find(
    (route) => route.path === event.pathParameters?.proxy
  );

  if (executeWithoutAtt) {
    return executeWithoutAtt.function(event, context);
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Route not found' }),
  };
};

export const handler = async (event: APIGatewayProxyEvent, context: Context) =>
  backofficeHandler(event, context, routesMapper);
