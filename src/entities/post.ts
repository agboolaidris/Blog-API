import {
  Entity as TOEntity,
  Column,
  ManyToOne,
  BeforeInsert,
  OneToMany,
  JoinColumn,
} from "typeorm";

import slugify from "slugify";
import Entity from "./entity";
import { User } from "./User";
import { makeId } from "../utils/helper";
import { Sub } from "./sub";
import { Comment } from "./comment";
import { Exclude, Expose } from "class-transformer";
import { Vote } from "./vote";

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

  protected UserVote: number;
  setUserVote(user: User) {
    const index = this.votes?.findIndex((v) => v.username === user.username);
    this.UserVote = index > -1 ? this.votes[index].value : 0;
  }

  @Expose() get url(): string {
    return `/r/${this.subName}/${this.identifier}/${this.slug}`;
  }

  @Expose() get commentCount(): number {
    return this.comments?.length;
  }

  @Expose() get voteScore(): number {
    return this.votes?.reduce((prev, curr) => prev + (curr.value || 0), 0);
  }

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn([{ referencedColumnName: "username", name: "username" }])
  user: User;

  @Exclude()
  @OneToMany(() => Comment, (comment) => comment.post, { onDelete: "CASCADE" })
  comments: Comment[];

  @Exclude()
  @OneToMany(() => Vote, (vote) => vote.post, { onDelete: "CASCADE" })
  votes: Vote[];

  @ManyToOne(() => Sub, (sub) => sub.posts)
  sub: Sub;

  @BeforeInsert()
  makeSlugAndIdentifer() {
    this.slug = slugify(this.title, { remove: /[*+~.()'"!:@]/g });
    this.identifier = makeId(7);
  }
}
