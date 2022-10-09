# crud-react-mysql
 
# phpMyAdmin
 
CREATE DATABASE mern_db;

CREATE TABLE products(
id INT(11) PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(200),
price DOUBLE,
createdAt DATE,
updatedAt DATE
)ENGINE=INNODB;

# Backend

 cd backend
 npm i
 nodemon index

# Frondend

 cd frontend
 npm i
 npm start
