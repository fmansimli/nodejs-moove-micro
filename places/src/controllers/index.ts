import { RequestHandler } from "express";
import { Meta } from "../utils/meta";

export const create: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: [],
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const updateById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAll: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const deleteById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};
