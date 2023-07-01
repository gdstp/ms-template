import { APIGatewayProxyEvent } from 'aws-lambda'
import middy from '@middy/core'
import middyJsonBodyParser from '@middy/http-json-body-parser'
import middyHttpErrorHandler from '@middy/http-error-handler'
import middyHttpCors from '@middy/http-cors'
import { httpHandler } from 'ms-common'
import { container } from '../../shared/ioc/container'
import { FireReportOperator } from '../../controller/operators/fireReportOperator'
import { InputFireReport } from '../../controller/serializers/fireReportSerializer'

const mainHandler = httpHandler(async (event: APIGatewayProxyEvent) => {
  const operator = container.get(FireReportOperator)

  const params = event.body as any

  const input = new InputFireReport(params)

  return await operator.exec(input)
})

export const handler = middy(mainHandler)
  .use(middyJsonBodyParser())
  .use(middyHttpErrorHandler())
  .use(middyHttpCors())
