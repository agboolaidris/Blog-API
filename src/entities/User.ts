import { IsEmail, Length } from "class-validator";
import bcrypt from "bcrypt";
import { classToPlain, Exclude } from "class-transformer";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

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

  @CreateDateColumn({ name: "created_at" }) createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" }) updatedAt: Date;

  @BeforeInsert()
  async hashpassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toJSON() {
    return classToPlain(this);
  }
}
