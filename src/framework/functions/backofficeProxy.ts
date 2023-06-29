import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import { backofficeHandler, HttpMethods, RoutesMapper } from 'ms-common'

const routesMapper: RoutesMapper[] = [
  {
    path: '/ping',
    methods: [HttpMethods.GET],
    function: async (): Promise<any> => console.log('ok')
  }
]

export const handler = async (event: APIGatewayProxyEvent, context: Context) =>
  backofficeHandler(event, context, routesMapper)
