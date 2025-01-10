import { Response, ErrorRequestHandler } from 'express';

export class APIError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: APIError, res: Response) => {
  const { statusCode, message } = err;

  res.status(statusCode).json({
    status: 'error',
    error: message,
  });
};

export const errorHandler: ErrorRequestHandler = (err, req, res) => {
  if (err instanceof APIError) {
    handleError(err, res);
    return;
  }
  const error = new APIError(500, 'Internal server error');
  handleError(error, res);
};
