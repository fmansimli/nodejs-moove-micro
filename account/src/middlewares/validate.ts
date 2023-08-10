import type { Request, Response, NextFunction } from "express";
import { validate as validateBody } from "class-validator";
import { plainToInstance } from "class-transformer";

import { ValidationError } from "@/src/errors/validation-error";

export const validate = (Dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      let _values: any = {};

      Object.keys(new Dto()).forEach((key) => (_values[key] = req.body[key]));

      const values = plainToInstance(Dto, _values);
      const errors = await validateBody(values);

      if (errors.length) {
        throw new ValidationError(errors);
      }

      req.body = _values;
      next();
    } catch (error) {
      next(error);
    }
  };
};
