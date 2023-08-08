import type { RequestHandler, ErrorRequestHandler } from "express";

export const catch404: RequestHandler = (req, res, _next) => {
  try {
    res.status(404).json({ httpCode: 404, message: "path not found." });
  } catch (error) {
    res.status(404).json({ httpCode: 404, message: "path not found." });
  }
};

export const catchError: ErrorRequestHandler = (err, req, res, _next) => {
  try {
    res.status(500).json({ httpCode: 500, message: err.message });
  } catch (error) {
    res.status(500).json({ httpCode: 500, message: error.message });
  }
};
