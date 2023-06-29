import { injectable } from 'inversify'
import { ILoggerService } from '@/business/services/iLoggerService'

@injectable()
export class LoggerService implements ILoggerService {
  error: () => {
    code: 'Failed'
    message: 'Failed Message'
  }

  success: () => {
    code: 'Success'
    message: 'Success Message'
  }
}
