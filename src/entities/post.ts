import {
  Entity as TOEntity,
  Column,
  ManyToOne,
  BeforeInsert,
  OneToMany,
  AfterLoad,
} from "typeorm";

import slugify from "slugify";
import Entity from "./entity";
import { User } from "./User";
import { makeId } from "../utils/helper";
import { Sub } from "./sub";
import { Comment } from "./comment";

@TOEntity("posts")
export class Post extends Entity {
  constructor(post: Partial<Post>) {
    super();
    Object.assign(this, post);
  }

  @Column({ type: "varchar" })
  identifier: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar", nullable: true })
  body: string;

  @Column({ type: "varchar" })
  subName: string;

  @Column()
  username: string;

  @OneToMany(() => Comment, (comment) => comment.post, { onDelete: "CASCADE" })
  comment: Comment[];

  protected url: string;
  @AfterLoad()
  CreateField() {
    this.url = `/r/${this.subName}/${this.identifier}/${this.slug}`;
  }

  @ManyToOne(() => User, (user) => user.post)
  user: User;

  @ManyToOne(() => Sub, (sub) => sub.post)
  sub: Sub;

  @BeforeInsert()
  makeSlugAndIdentifer() {
    this.slug = slugify(this.title, { remove: /[*+~.()'"!:@]/g });
    this.identifier = makeId(7);
  }
}
