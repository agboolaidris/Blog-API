import {
  Entity as TOEntity,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Entity from "./entity";
import { Post } from "./post";
import { Comment } from "./comment";
import { User } from "./User";

@TOEntity("votes")
export class Vote extends Entity {
  constructor(vote: Partial<Vote>) {
    super();
    Object.assign(this, vote);
  }

  @Index()
  @Column()
  value: number;

  @Column()
  username: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @ManyToOne(() => Post, (post) => post.votes)
  post: Post;

  @ManyToOne(() => Comment, (comment) => comment.votes)
  comment: Comment;
}
