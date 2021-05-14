import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser1621006869505 implements MigrationInterface {
    name = 'addUser1621006869505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `subs` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `description` varchar(255) NULL, `imageUrn` varchar(255) NULL, `bannerUrn` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `votes` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `value` int NOT NULL, `username` varchar(255) NOT NULL, `postId` int NULL, `commentId` int NULL, INDEX `IDX_8e577e5cd9af13284c9a756432` (`value`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `posts` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `identifier` varchar(255) NOT NULL, `slug` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `body` varchar(255) NULL, `subName` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `subId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `username` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `comments` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `identifier` varchar(255) NOT NULL, `body` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `postId` int NOT NULL, INDEX `IDX_8e7297165a3d53fa13b720bb11` (`identifier`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `subs` ADD CONSTRAINT `FK_4520ae7b26f68a13ec3e96dbbba` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `votes` ADD CONSTRAINT `FK_79326ff26ef790424d820d54a72` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `votes` ADD CONSTRAINT `FK_b5b05adc89dda0614276a13a599` FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `votes` ADD CONSTRAINT `FK_554879cbc33538bf15d6991f400` FOREIGN KEY (`commentId`) REFERENCES `comments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_42377e3f89a203ca74d117e5961` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_41f89e8e137b26c736541734136` FOREIGN KEY (`subId`) REFERENCES `subs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_e44ddaaa6d058cb4092f83ad61f` FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_5d9144e84650ce78f40737e284e` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_5d9144e84650ce78f40737e284e`");
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_e44ddaaa6d058cb4092f83ad61f`");
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_41f89e8e137b26c736541734136`");
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_42377e3f89a203ca74d117e5961`");
        await queryRunner.query("ALTER TABLE `votes` DROP FOREIGN KEY `FK_554879cbc33538bf15d6991f400`");
        await queryRunner.query("ALTER TABLE `votes` DROP FOREIGN KEY `FK_b5b05adc89dda0614276a13a599`");
        await queryRunner.query("ALTER TABLE `votes` DROP FOREIGN KEY `FK_79326ff26ef790424d820d54a72`");
        await queryRunner.query("ALTER TABLE `subs` DROP FOREIGN KEY `FK_4520ae7b26f68a13ec3e96dbbba`");
        await queryRunner.query("DROP INDEX `IDX_8e7297165a3d53fa13b720bb11` ON `comments`");
        await queryRunner.query("DROP TABLE `comments`");
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `posts`");
        await queryRunner.query("DROP INDEX `IDX_8e577e5cd9af13284c9a756432` ON `votes`");
        await queryRunner.query("DROP TABLE `votes`");
        await queryRunner.query("DROP TABLE `subs`");
    }

}
