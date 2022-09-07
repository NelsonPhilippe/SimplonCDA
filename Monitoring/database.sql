create database simplonhakatoniot;
use simplonhakatoniot;
create table temperature (id INT primary key auto_increment unique, name varchar(255), temperature int, status boolean, last_verif TIMESTAMP default CURRENT_TIMESTAMP);
create table light (id INT primary key auto_increment unique, name varchar(255), light_level int, status boolean, last_verif TIMESTAMP default CURRENT_TIMESTAMP);
create table presence (id INT primary key auto_increment unique, name varchar(255), status boolean, last_verif TIMESTAMP default CURRENT_TIMESTAMP);