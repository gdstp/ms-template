import 'reflect-metadata'
import { Container } from 'inversify'
import {
  ILoggerService,
  LoggerServiceToken
} from '../../business/services/iLoggerService'
import { LoggerService } from '../../framework/services/LoggerService'
import { FireReportUseCase } from '../../business/useCases/fireReportUseCase'
import { FireReportOperator } from '../../controller/operators/fireReportOperator'

const container = new Container()

container.bind<ILoggerService>(LoggerServiceToken).to(LoggerService)
container.bind(FireReportUseCase).toSelf()
container.bind(FireReportOperator).toSelf()

export { container }
