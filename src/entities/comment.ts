import {
  Entity as TOEntity,
  Column,
  ManyToOne,
  BeforeInsert,
  Index,
  JoinColumn,
  OneToMany,
} from "typeorm";

import Entity from "./entity";
import { User } from "./User";
import { makeId } from "../utils/helper";
import { Post } from "./post";
import { Vote } from "./vote";
import { Exclude, Expose } from "class-transformer";

@TOEntity("comments")
export class Comment extends Entity {
  constructor(comment: Partial<Comment>) {
    super();
    Object.assign(this, comment);
  }

  @Index()
  @Column({ type: "varchar" })
  identifier: string;

  @Column({ type: "varchar", nullable: false })
  body: string;

  @Column()
  username: string;

  protected UserVote: number;
  setUserVote(user: User) {
    const index = this.votes?.findIndex((v) => v.username === user.username);
    this.UserVote = index > -1 ? this.votes[index].value : 0;
  }

  @Expose() get voteScore(): number {
    return this.votes?.reduce((prev, curr) => prev + (curr.value || 0), 0);
  }

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  post: Post;

  @Exclude()
  @OneToMany(() => Vote, (vote) => vote.comment)
  votes: Vote[];

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @BeforeInsert()
  Identifer() {
    this.identifier = makeId(8);
  }
}
