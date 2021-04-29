import { classToPlain, Exclude } from "class-transformer";
import {
  PrimaryGeneratedColumn,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

export default abstract class Entity extends BaseEntity {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "created_at" }) createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" }) updatedAt: Date;

  toJSON() {
    return classToPlain(this);
  }
}
