INSERT INTO book
  (title, content, writer, publish_dt, created_dt)
  VALUES
  ('장화홍련전', '자매가 한을품고...', '장화', NULL, NOW());
  
SELECT * FROM book;
DELETE FROM book WHERE id = '4';