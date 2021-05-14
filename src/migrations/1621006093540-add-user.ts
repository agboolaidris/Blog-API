import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser1621006093540 implements MigrationInterface {
    name = 'addUser1621006093540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_42377e3f89a203ca74d117e5961` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_41f89e8e137b26c736541734136` FOREIGN KEY (`subId`) REFERENCES `subs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_41f89e8e137b26c736541734136`");
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_42377e3f89a203ca74d117e5961`");
    }

}
