import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import { Sub } from "../entities/sub";

export const subValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, title } = req.body;
  try {
    const errors: any = {};
    if (!name) errors.name = "name must not be empty";
    if (!title) errors.title = "title must not be empty";

    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    const sub = await getRepository(Sub)
      .createQueryBuilder("sub")
      .where("lower(sub.name) = :name", { name: name.toLowerCase() })
      .getOne();
    if (sub) return res.status(400).json({ name: "Sub already exist" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
