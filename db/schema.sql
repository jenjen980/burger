CREATE database burgers_db;

USE burgers_db;

CREATE table burgers(
    id INT not null auto_increment,
    burger_name varchar(255),
    devoured BOOLEAN NOT NULL,
    primary key(id)
);