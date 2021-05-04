import {
  Entity as TOEntity,
  Column,
  ManyToOne,
  BeforeInsert,
  OneToMany,
  AfterLoad,
  JoinColumn,
} from "typeorm";

import slugify from "slugify";
import Entity from "./entity";
import { User } from "./User";
import { makeId } from "../utils/helper";
import { Sub } from "./sub";
import { Comment } from "./comment";
import { Expose } from "class-transformer";

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

  @Column({ type: "varchar" })
  username: string;

  // protected url: string;
  // @AfterLoad()
  // CreateField() {
  //   this.url = `/r/${this.subName}/${this.identifier}/${this.slug}`;
  // }

  @Expose() get url(): string {
    return `/r/${this.subName}/${this.identifier}/${this.slug}`;
  }

  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn([{ referencedColumnName: "username", name: "username" }])
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post, { onDelete: "CASCADE" })
  comment: Comment[];

  @ManyToOne(() => Sub, (sub) => sub.post)
  sub: Sub;

  @BeforeInsert()
  makeSlugAndIdentifer() {
    this.slug = slugify(this.title, { remove: /[*+~.()'"!:@]/g });
    this.identifier = makeId(7);
  }
}
