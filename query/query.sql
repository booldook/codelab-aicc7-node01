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

