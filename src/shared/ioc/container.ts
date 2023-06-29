import 'reflect-metadata'
import { Container } from 'inversify'
import {
  ILoggerService,
  LoggerServiceToken
} from '@/business/services/iLoggerService'
import { LoggerService } from '@/framework/services/LoggerService'

const ContainerInstance = new Container()

ContainerInstance.bind<ILoggerService>(LoggerServiceToken).to(LoggerService)

export { ContainerInstance }
