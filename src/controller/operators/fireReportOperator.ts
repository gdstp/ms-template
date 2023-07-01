import { AbstractOperator } from 'ms-common'
import { inject, injectable } from 'inversify'
import {
  InputFireReport,
  OutputFireReport
} from '../serializers/fireReportSerializer'
import { FireReportUseCase } from '../../business/useCases/fireReportUseCase'

@injectable()
export class FireReportOperator extends AbstractOperator<
  InputFireReport,
  OutputFireReport
> {
  constructor(
    @inject(FireReportUseCase) private fireReportUseCase: FireReportUseCase
  ) {
    super()
  }

  protected async run(input?: InputFireReport): Promise<OutputFireReport> {
    return await this.fireReportUseCase.exec(input)
  }
}
