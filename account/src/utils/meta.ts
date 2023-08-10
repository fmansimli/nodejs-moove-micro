import type { Request } from "express";

export class Meta {
  static generate(req: Request) {
    const meta = {
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
      appName: process.env.APP_NAME,
    };

    return meta;
  }
}
