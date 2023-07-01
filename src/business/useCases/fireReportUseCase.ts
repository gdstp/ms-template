import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { right } from 'ms-common'
import { ILoggerService, LoggerServiceToken } from '../services/iLoggerService'
import { OutputFireReport } from '@/controller/serializer/fireReportSerializer'

@injectable()
export class FireReportUseCase {
  constructor(
    @inject(LoggerServiceToken) private readonly loggerService: ILoggerService
  ) {}

  async exec(input: { test: string }): Promise<OutputFireReport> {
    console.log(input)
    this.loggerService.success()

    return right({ fired: true })
  }
}
