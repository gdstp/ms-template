import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { left, right } from 'ms-common'
import { ILoggerService, LoggerServiceToken } from '../services/iLoggerService'
import { OutputFireReport } from '@/controller/serializers/fireReportSerializer'

@injectable()
export class FireReportUseCase {
  constructor(
    @inject(LoggerServiceToken) private readonly loggerService: ILoggerService
  ) {}

  async exec(input: { test: string }): Promise<OutputFireReport> {
    if (input.test === '123') {
      return left({
        statusCode: 400,
        message: 'FAILED',
        shortMessage: 'FAILED'
      })
    }
    this.loggerService.success()

    return right({ fired: true })
  }
}
