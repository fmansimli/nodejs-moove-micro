import type { RequestHandler } from "express";
import { Meta } from "../utils/meta";

export const signin: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const signup: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};
