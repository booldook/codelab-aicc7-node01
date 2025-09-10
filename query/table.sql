# id unsigned 변경
ALTER TABLE `book`
  CHANGE COLUMN `id` 
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT FIRST;
  
-- 테이블 shop.pds 구조 내보내기
CREATE TABLE IF NOT EXISTS `pds` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `origin_nm` varchar(255) NOT NULL DEFAULT '',
  `file_nm` varchar(255) NOT NULL DEFAULT '',
  `file_typ` varchar(255) NOT NULL DEFAULT '',
  `created_dt` datetime NOT NULL DEFAULT current_timestamp(),
  `book_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE IF NOT EXISTS `book` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `writer` varchar(255) DEFAULT NULL,
  `publish_d` date DEFAULT NULL,
  `created_dt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usr_id` varchar(16) NOT NULL,
  `usr_pw` varchar(255) NOT NULL,
  `usr_nm` varchar(255) NOT NULL,
  `usr_email` varchar(255) NOT NULL,
  `usr_lv` tinyint(4) NOT NULL DEFAULT 1,
  `created_dt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `usr_id` (`usr_id`),
  UNIQUE KEY `usr_email` (`usr_email`)
  
  
  ALTER TABLE `pds`
  ADD CONSTRAINT `FK_pds_book` 
  FOREIGN KEY (`book_id`) 
  REFERENCES `book` (`id`) 
  ON UPDATE NO ACTION 
  ON DELETE CASCADE;

