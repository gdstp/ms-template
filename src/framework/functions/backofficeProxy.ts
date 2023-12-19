import { APIGatewayProxyEvent, Context } from 'aws-lambda'
import { HttpMethods, RoutesMapper, backofficeHandler } from 'ms-common'
import { handler as fireReportHandler } from './fireReport'

const routesMapper: RoutesMapper[] = [
    {
        path: 'ping',
        methods: [HttpMethods.POST],
        function: fireReportHandler
    }
]

export const handler = async (event: APIGatewayProxyEvent, context: Context) =>
    backofficeHandler(event, context, routesMapper)
