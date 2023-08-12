import { RequestHandler } from "express";
import { Meta } from "../utils/meta";

import { User } from "../models/user";
import { DI } from "../ioc/di";

export const profile: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProfile: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      body: {},
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const create: RequestHandler = async (req, res, next) => {
  const { email, name } = req.body as User;
  try {
    const user = new User({ email, name });

    res.status(200).json({
      body: user,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const users = await DI.userRepo.findAll();

    res.status(200).json({
      body: users,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = await DI.userRepo.findOne({ id });
    res.status(200).json({
      body: user,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};
