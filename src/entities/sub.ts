import { Entity as TOEntity, Column, OneToMany, ManyToOne } from "typeorm";
import Entity from "./entity";
import { User } from "./User";
import { Post } from "./post";

@TOEntity("subs")
export class Sub extends Entity {
  constructor(sub: Partial<Sub>) {
    super();
    Object.assign(this, sub);
  }
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column({ type: "varchar", nullable: true })
  imageUrl: string;

  @Column({ type: "varchar", nullable: true })
  bannerUrl: string;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => Post, (post) => post.sub)
  post: Post[];
}
