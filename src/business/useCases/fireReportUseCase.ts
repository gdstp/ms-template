import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { ILoggerService, LoggerServiceToken } from '../services/iLoggerService'

@injectable()
export class FireReportUseCase {
  constructor(
    @inject(LoggerServiceToken) private readonly loggerService: ILoggerService
  ) {}

  async exec(input: { test: string }) {
    console.log(input)
    this.loggerService.success()

    return {
      fired: true
    }
  }
}
