import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import middy from '@middy/core'
import middyJsonBodyParser from '@middy/http-json-body-parser'
import middyHttpErrorHandler from '@middy/http-error-handler'
import middyHttpCors from '@middy/http-cors'
import { container } from '../../shared/ioc/container'
import { FireReportOperator } from '../../controller/operators/fireReportOperator'
import { InputFireReport } from '../../controller/serializer/fireReportSerializer'

const mainHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const operator = container.get(FireReportOperator)

  const params = event.body as any

  const input = new InputFireReport(params)

  await operator.exec(input)

  return {
    statusCode: 200,
    body: JSON.stringify('ok')
  }
}

export const handler = middy(mainHandler)
  .use(middyJsonBodyParser())
  .use(middyHttpErrorHandler())
  .use(middyHttpCors())
