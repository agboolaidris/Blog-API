import {
  Entity as TOEntity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
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
  @Column()
  username: string;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column({ type: "varchar", nullable: true })
  imageUrn: string;

  @Column({ type: "varchar", nullable: true })
  bannerUrn: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @OneToMany(() => Post, (post) => post.sub)
  posts: Post[];
}
