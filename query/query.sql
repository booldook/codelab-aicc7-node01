INSERT INTO book
  (title, content, writer, publish_dt, created_dt)
  VALUES
  ('장화홍련전', '자매가 한을품고...', '장화', NULL, NOW());
  
INSERT INTO book
  (title, content, writer, publish_d)
  VALUES
  ('장화홍련전', '자매가 한을품고...', '장화', "0000-00-00");
  
SELECT * FROM book;
DELETE FROM book WHERE id = '4';

SELECT * FROM book ORDER BY publish_dt DESC LIMIT 1, 4;

INSERT INTO book
      (title, content)
    VALUES
      ('별주부전', '토끼의 간을 용왕이...');

CREATE TABLE `user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `usr_id` VARCHAR(16) NOT NULL,
  `usr_pw` VARCHAR(255) NOT NULL,
  `usr_nm` VARCHAR(255) NOT NULL,
  `usr_email` VARCHAR(255) NOT NULL,
  `usr_lv` TINYINT NOT NULL DEFAULT 1,
  `created_dt` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_general_ci'
;

SELECT  COUNT(id) AS count FROM  user WHERE  usr_id='a' OR usr_email='a';







