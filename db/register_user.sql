INSERT INTO users
(username, password)
VALUES
(${username}, ${hash})
RETURNING id, username;