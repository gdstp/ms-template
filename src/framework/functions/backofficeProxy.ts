import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import { backofficeHandler, HttpMethods, RoutesMapper } from 'ms-common'
import { handler as fireReportHandler } from './fireReport'

const routesMapper: RoutesMapper[] = [
  {
    path: '/ping',
    methods: [HttpMethods.GET],
    function: fireReportHandler
  }
]

export const handler = async (event: APIGatewayProxyEvent, context: Context) =>
  backofficeHandler(event, context, routesMapper)
