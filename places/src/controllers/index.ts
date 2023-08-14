import { RequestHandler } from "express";
import { ObjectId } from "mongodb";

import { kafka } from "../kafka";
import { Meta } from "../utils/meta";
import { Place } from "../models/place";
import { NotFoundError } from "../errors";
import { PlaceCreatedProducer } from "../kafka/producer/place-created.producer";

export const create: RequestHandler = async (req, res, next) => {
  const { name, description, location } = req.body as Place;

  try {
    const place = new Place({
      name,
      description,
      location,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await place.save();

    new PlaceCreatedProducer(kafka.client).publish({
      _id: place._id.toString(),
      name: place.name
    });

    res.status(200).json({
      body: place,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const places = await Place.exec().find({}).toArray();

    res.status(200).json({
      body: places,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const _id = new ObjectId(req.params.id);
    const place = await Place.exec().findOne({ _id });

    if (!place) {
      throw new NotFoundError("Place not found");
    }

    res.status(200).json({
      body: place,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const updateById: RequestHandler = async (req, res, next) => {
  const attrs = req.body as Partial<Place>;
  attrs.updatedAt = new Date();

  try {
    const _id = new ObjectId(req.params.id);
    const data = await Place.exec().updateOne({ _id }, { $set: attrs });

    if (data.matchedCount === 0) {
      throw new NotFoundError("Place not found");
    }

    res.status(200).json({
      body: req.body,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAll: RequestHandler = async (req, res, next) => {
  try {
    const resp = await Place.exec().deleteMany({});

    res.status(200).json({
      body: resp,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};

export const deleteById: RequestHandler = async (req, res, next) => {
  try {
    const _id = new ObjectId(req.params.id);
    const resp = await Place.exec().deleteOne({ _id });

    if (resp.deletedCount === 0) {
      throw new NotFoundError("Place not found");
    }

    res.status(200).json({
      body: resp,
      meta: Meta.generate(req)
    });
  } catch (error) {
    next(error);
  }
};
