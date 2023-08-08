import type { RequestHandler, ErrorRequestHandler } from "express";
import { CustomError } from "../errors/custom-error";

export const catch404: RequestHandler = (req, res, _next) => {
  try {
    res.status(404).json({ httpCode: 404, message: "path not found." });
  } catch (error) {
    res.status(404).json({ httpCode: 404, message: "path not found." });
  }
};

export const catchError: ErrorRequestHandler = (err, req, res, _next) => {
  try {
    if (err instanceof CustomError) {
      console.log(err.httpCode);

      return res.status(err.httpCode).json(err.serialize());
    }
    res.status(500).json({ httpCode: 500, message: err.message });
  } catch (_error) {
    res.status(500).json({ httpCode: 500, message: "unknown error." });
  }
};
