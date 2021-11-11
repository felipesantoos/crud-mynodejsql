/* SUPERMARKET DATABASE */
CREATE DATABASE IF NOT EXISTS supermarket;
USE supermarket;
SHOW TABLES;
/* END SUPERMARKET DATABASE */

/* CUSTOMER TABLE */
CREATE TABLE customer(
    id SERIAL PRIMARY KEY, /* BIGINT + UNSIGNED + NOT NULL + AUTO_INCREMENT + UNIQUE */
    cpf VARCHAR(14) NOT NULL,
    name VARCHAR(200) NOT NULL,
    birthDate DATE
);
DESC customer;
/* END CUSTOMER TABLE */

/* SELECTS */
SELECT * FROM customer;
SELECT cpf FROM customer;
SELECT name FROM customer;
SELECT birthDate FROM customer;
SELECT * FROM customer WHERE id = 0;
SELECT cpf FROM customer WHERE id = 0;
SELECT name FROM customer WHERE id = 0;
SELECT birthDate FROM customer WHERE id = 0;
/* END SELECTS */

/* UPDATES */
UPDATE customer SET cpf='' WHERE id = 0;
UPDATE customer SET name='' WHERE id = 0;
UPDATE customer SET birthDate='' WHERE id = 0;
UPDATE customer SET cpf='', name = '', birthDate='' WHERE id = 0;
/* END UPDATES */

/* DELETES */
DELETE FROM customer WHERE id = 0;
DELETE FROM customer WHERE cpf = 0;
DELETE FROM customer WHERE name = 0;
/* END DELETES */

/* DROPS */
DROP DATABASE IF EXISTS supermarket;
DROP TABLE IF EXISTS customer;
/* END DROPS */
