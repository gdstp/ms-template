import { httpResponse, InputSchema, middyfy } from 'ms-common'
import { APIGatewayProxyEvent } from 'aws-lambda'
import { container } from '../../shared/ioc/container'
import { FireReportUseCase } from '../../business/useCases/fireReportUseCase'

const mainHandler = async (event: APIGatewayProxyEvent) => {
  container.get(FireReportUseCase)

  console.log(event.body)

  return httpResponse.notFound()
}

const inputSchema: InputSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        teste: {
          type: 'string'
        }
      },
      required: []
    }
  }
}

export const handler = middyfy(mainHandler, inputSchema)
