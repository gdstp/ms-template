import { IsString } from 'class-validator'
import { AbstractValidate, Either, IError } from 'ms-common'

export class InputFireReport extends AbstractValidate<InputFireReport> {
  @IsString()
  test: string
}

export type OutputFireReport = Either<IError, { fired: boolean }>
