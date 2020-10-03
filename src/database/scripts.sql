--Creation of the database
create database fitness;
use fitness;

--Creation weight table
drop table peso;

create table peso(
    id int primary key auto_increment,
    fecha varchar(50),
    distancia double,
    calorias double,
    peso double
);

describe peso;

--Insert one info
insert into peso values(null, '03/10/2020', 1.1, 18.6, 0);