### Schema
DROP DATABASE IF EXSITS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;
-- USE heroku_30aa0966782038e;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	date DATETIME NOT NULL,
	PRIMARY KEY (id)
);