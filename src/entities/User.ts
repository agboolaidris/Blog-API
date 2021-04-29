import { IsEmail, Length } from "class-validator";
import bcrypt from "bcrypt";
import { Exclude } from "class-transformer";
import { Entity as TOEntity, Column, BeforeInsert, OneToMany } from "typeorm";
import Entity from "./entity";
import { Post } from "./post";

@TOEntity("users")
export class User extends Entity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @Length(3, 20)
  @Column({ type: "varchar" })
  username: string;

  @IsEmail()
  @Column({ type: "varchar" })
  email: string;

  @Exclude()
  @Length(6, 20)
  @Column({ type: "varchar" })
  password: string;

  @OneToMany(() => Post, (post) => post.user, { onDelete: "CASCADE" })
  post: Post[];

  @BeforeInsert()
  async hashpassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
