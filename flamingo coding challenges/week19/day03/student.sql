create database school ;

\c school

create table parent (
	id INT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	phone_number CHAR(10)
);

create table class (
	id INT PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE
);

create table student (
	id INT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	age int NOT NULL,
	parent_name int references parent(id),
	parent_phone_number CHAR(10),
	roll_number int DEFAULT 0 NOT NULL,
	dob DATE DEFAULT '01-01-2000' NOT NULL ,
	class VARCHAR(50) references class(name)
);


create table student2() ;
alter table student2 ADD COLUMN id int primary key ;
alter table student2 ADD COLUMN name VARCHAR(50) NOT NULL ;
alter table student2 ADD COLUMN age int NOT NULL ;
alter table student2 ADD COLUMN parent_name int references parent(id) ;
alter table student2 ADD COLUMN parent_phone_number CHAR(10) ;
alter table student2 ADD COLUMN roll_number int DEFAULT 0 NOT NULL ;
alter table student2 ADD COLUMN dob DATE DEFAULT '01-01-2000' NOT NULL ;
alter table student2 ADD COLUMN class VARCHAR(50) references class(name) ;