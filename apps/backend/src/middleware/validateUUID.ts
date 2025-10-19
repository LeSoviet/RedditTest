import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { AppError } from './errorHandler';

/**
 * UUID validation schema
 */
const UUIDSchema = z.string().uuid('Invalid UUID format');

/**
 * Middleware to validate UUID parameters
 */
export const validateUUID = (paramName: string = 'id') => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const paramValue = req.params[paramName];

      if (!paramValue) {
        throw new AppError(400, `Parameter ${paramName} is required`, 'MISSING_PARAMETER');
      }

      // Validate UUID format
      UUIDSchema.parse(paramValue);

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        next(new AppError(400, `Invalid ${paramName} format`, 'INVALID_UUID'));
      } else {
        next(error);
      }
    }
  };
};

/**
 * Validate UUID string directly
 */
export const isValidUUID = (value: string): boolean => {
  try {
    UUIDSchema.parse(value);
    return true;
  } catch {
    return false;
  }
};
