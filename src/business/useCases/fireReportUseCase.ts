import 'reflect-metadata'
import { inject } from 'inversify'
import { ILoggerService, LoggerServiceToken } from '../services/iLoggerService'

export class FireReportUseCase {
  constructor(
    @inject(LoggerServiceToken) private readonly loggerService: ILoggerService
  ) {}

  async exec() {
    this.loggerService.success()
  }
}
