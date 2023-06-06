import { NextFunction } from 'express';

export function loggerMiddleware(
  req: Request,
  res: Response,
  nest: NextFunction,
) {
  console.log('log global request...');
  nest();
}
