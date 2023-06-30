import { IsString } from 'class-validator'
import { AbstractValidate } from 'ms-common'

export class InputFireReport extends AbstractValidate<InputFireReport> {
  @IsString()
  test: string
}

export type OutputFireReport = { fired: boolean }
