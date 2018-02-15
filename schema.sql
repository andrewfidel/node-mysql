CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (email) VALUES
('test@yahoo.com'), ('test2@gmail.com');

-- Selects latest added user
SELECT * FROM users ORDER BY created_at DESC LIMIT 1;
