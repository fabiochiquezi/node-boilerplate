export class AppError extends Error {
    statusCode: number
    type: string

    constructor (type: string, message: string, statusCode?: number) {
      super(message)
      this.type = type
      this.statusCode = statusCode || undefined
      Error.captureStackTrace(this, this.constructor)
    }
}
