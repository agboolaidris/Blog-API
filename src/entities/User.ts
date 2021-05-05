import { IsEmail, Length } from "class-validator";
import bcrypt from "bcrypt";
import { Exclude } from "class-transformer";
import {
  Entity as TOEntity,
  Column,
  BeforeInsert,
  OneToMany,
  Index,
} from "typeorm";

import Entity from "./entity";
import { Post } from "./post";
import { Comment } from "./comment";
import { Vote } from "./vote";

@TOEntity("users")
export class User extends Entity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @Length(3, 20)
  @Index()
  @Column({ type: "varchar", name: "username" })
  username: string;

  @Index()
  @IsEmail()
  @Column({ type: "varchar", name: "email" })
  email: string;

  @Exclude()
  @Length(6, 20)
  @Column({ type: "varchar" })
  password: string;

  @OneToMany(() => Post, (post) => post.user, { onDelete: "CASCADE" })
  posts: Post[];

  @OneToMany(() => Vote, (vote) => vote.user, { onDelete: "CASCADE" })
  votes: Vote[];

  @OneToMany(() => Comment, (comment) => comment.user, { onDelete: "CASCADE" })
  comments: Comment[];

  @BeforeInsert()
  async hashpassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
