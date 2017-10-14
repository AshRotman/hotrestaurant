CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE products (
	customer_id INTEGER(11) NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(30) NOT NULL,
    phone_number INTEGER(11) NOT NULL,
    customer_email VARCHAR(40) NOT NULL,
    PRIMARY KEY (customer_id)
    );