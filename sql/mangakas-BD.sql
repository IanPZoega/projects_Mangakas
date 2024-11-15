create database mgks;
use mgks;

create table users
(
  id int PRIMARY KEY auto_increment,
  username varchar(30) NOT NULL UNIQUE,
  senha varchar(30) NOT NULL
);

select * from users;
drop table users;