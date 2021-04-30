import {
  Entity as TOEntity,
  Column,
  ManyToOne,
  BeforeInsert,
  Index,
} from "typeorm";

import Entity from "./entity";
import { User } from "./User";
import { makeId } from "../utils/helper";
import { Post } from "./post";

@TOEntity("comments")
export class Comment extends Entity {
  constructor(comment: Partial<Comment>) {
    super();
    Object.assign(this, comment);
  }

  @Index()
  @Column({ type: "varchar" })
  identifier: string;

  @Column({ type: "varchar", nullable: true })
  body: string;

  @Column({ type: "varchar" })
  username: string;

  @ManyToOne(() => Post, (post) => post.comment, { nullable: false })
  post: Post;

  @ManyToOne(() => User, { nullable: false })
  user: User;

  @BeforeInsert()
  Identifer() {
    this.identifier = makeId(8);
  }
}
