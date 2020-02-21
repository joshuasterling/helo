CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT
);

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INTEGER REFERENCES users(id)
);

ALTER TABLE users
ALTER COLUMN password
SET DATA TYPE TEXT;

INSERT INTO users
(username, password, profile_pic)
VALUES
('jsmith', 'mypassword', 'mypic'),
('asmith', 'minepassword', 'minepic'),
('csmith', 'ipassword', 'ipic');