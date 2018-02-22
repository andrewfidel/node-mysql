-- Problem 1
-- Find earliest date user joined
SELECT
  DATE_FORMAT(MIN(created_at), "%D %M %Y") AS earliest_join
FROM users;

-- Problem 2
-- Find email of the first user
SELECT
  email,
  created_at
FROM users
WHERE created_at =
(
  SELECT MIN(created_at)
  FROM users
);

-- Problem 3
-- Find count users signed up for each month
SELECT
  MONTHNAME(created_at) as month,
  COUNT(*) as count
FROM users
GROUP BY month
ORDER BY count DESC;

-- Problem 4
-- Count number of users with Yahoo
SELECT
  COUNT(*) as yahoo_users
FROM users
WHERE email LIKE '%yahoo.com%';

-- Problem 5
-- Calculate total number of users for each email localhost
SELECT
  CASE
    WHEN email LIKE '%yahoo.com' THEN 'yahoo'
    WHEN email LIKE '%gmail.com' THEN 'gmail'
    WHEN email LIKE '%gmail.com' THEN 'hotmail'
    ELSE 'other'
  END as providers,
  COUNT(*) as total_users
FROM users
GROUP BY providers
ORDER BY total_users DESC;
