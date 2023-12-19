import { APIGatewayProxyEvent } from 'aws-lambda'
import { httpHandler, middyfy } from 'ms-common'
import { container } from '@/shared/ioc/container'
import { FireReportOperator } from '@/controller/operators/fireReportOperator'
import { InputFireReport } from '@/controller/serializers/fireReportSerializer'

const mainHandler = httpHandler(async (event: APIGatewayProxyEvent) => {
    const operator = container.get(FireReportOperator)

    const params = event.body as any

    const input = new InputFireReport(params)

    return await operator.exec(input)
})

export const handler = middyfy(mainHandler)
