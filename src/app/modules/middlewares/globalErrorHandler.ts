import type { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = "";
  const success = false;
  return res.status(statusCode).json({
    success,
    message,
    error: err,
  });
};

export default globalErrorHandler;
