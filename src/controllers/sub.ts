import { Request, Response } from "express";
import fs from "fs";
import { getRepository } from "typeorm";
import { Post } from "../entities/post";
import { Sub } from "../entities/sub";

export const createSub = async (req: Request, res: Response) => {
  const { name, title, description } = req.body;
  try {
    const sub = await new Sub({
      name,
      title,
      description,
      user: res.locals.user,
    });
    await sub.save();
    res.json(sub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSub = async (req: Request, res: Response) => {
  const { name } = req.params;

  try {
    const sub: Sub = await Sub.findOneOrFail({ name });
    const posts = await Post.find({
      where: { sub },
      order: { createdAt: "DESC" },
      relations: ["comments", "votes"],
    });

    sub.posts = posts;

    if (res.locals.user) {
      sub.posts.forEach((p) => p.setUserVote(res.locals.user));
    }

    console.log(sub);

    res.json(sub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const subImage = async (req: Request, res: Response) => {
  try {
    const sub: Sub = res.locals.sub;

    let oldUrn: string = "";

    if (req.body.type === "image") {
      oldUrn = sub.imageUrn ?? "";
      sub.imageUrn = req.file.path.split("images")[1];
    } else if (req.body.type === "banner") {
      oldUrn = sub.bannerUrn ?? "";
      sub.bannerUrn = req.file.path.split("images")[1];
    }

    await sub.save();

    if (oldUrn !== "") {
      fs.unlinkSync(`public/images/${oldUrn}`);
    }

    res.json(sub);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const topSub = async (req: Request, res: Response) => {
  try {
    const subs = await Sub.find({ order: { createdAt: "DESC" } });

    const response = subs.slice(0, 5);

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const searchSubs = async (req: Request, res: Response) => {
  try {
    const name = req.params.name;

    if (name.trim() === "") return res.status(404).json({ name: "not found" });
    const subs = await getRepository(Sub)
      .createQueryBuilder()
      .where(`LOWER(name) LIKE :name`, {
        name: `${name.toLowerCase().trim()}%`,
      })
      .getMany();

    res.json(subs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
