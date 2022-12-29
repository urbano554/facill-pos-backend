import boom from '@hapi/boom'
import { NextFunction, Request, Response } from 'express'
import { ObjectSchema } from 'joi'

export default function validatorHandler <T = any>(schema: ObjectSchema<T>, property: string) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })

    if (error) {
      next(boom.badRequest(error as never as string))
      return
    }
    next()
  }
}
