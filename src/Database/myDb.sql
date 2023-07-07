create database Articles;
use Articles;

create table Writers(
writerID int not null,
writerName varchar(250),
primary  key (writerID)
);

create table Articles(
articleID int not null,
title varchar (250),
writerID int,
info longtext,
primary key (articleID),
foreign key (writerID) references Writers(writerID)
);

SELECT * FROM articles;
SELECT * FROM Writers;