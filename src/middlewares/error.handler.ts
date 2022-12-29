import { Request, NextFunction, Response } from 'express'

function logErrors(err: Error, _req: Request, _res: Response, next: NextFunction) {
  next(err)
}

function errorHandler(err: Error, _req: Request, res: Response) {
  res.status(500).json({
    error: err.message
  })
}

function boomErrorHandler(
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.isBoom) {
    res.status(err.output.statusCode).json({
      error: err.output.payload
    })
  } else {
    next(err)
  }
}

export { logErrors, errorHandler, boomErrorHandler }
