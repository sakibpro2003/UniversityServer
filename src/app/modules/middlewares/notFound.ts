import type { NextFunction, Request, Response } from "express";
import status from "http-status";
const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //   const statusCode;
  const message = "API NOT FOUND";
  const success = false;
  return res.status(status.NOT_FOUND).json({
    success,
    message,
    error:"",
  });
};

export default notFound;
