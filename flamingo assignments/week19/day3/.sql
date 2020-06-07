CREATE DATABASE week19day03;
 

CREATE TABLE Things_Given_To_Employee(
Id int PRIMARY KEY,
Laptop VARCHAR(25),
Charger VARCHAR(25),
Phone VARCHAR(25),
Dairy VARCHAR(25),
Pen VARCHAR(10)
);


CREATE TABLE Employee_Department(
Id int PRIMARY KEY,
IT VARCHAR(25),
Admin VARCHAR(25),
Finance VARCHAR(25),
HR VARCHAR(25),
Account VARCHAR(10));
 

CREATE TABLE Holidays(
Id int PRIMARY KEY,
Holi int,
Diwali int,
Christmas int,
Gandhi_Jayanti int);


CREATE TABLE Facilities(
Id int PRIMARY KEY,
Health_Insurance VARCHAR(15),
Rock VARCHAR(15),
Dubstep VARCHAR(15),
Country VARCHAR(15));


CREATE TABLE Employee(
Id int PRIMARY KEY,
Employee_Name VARCHAR(15),
Employee_Designation VARCHAR(10),
Employee_Phone_Number int,
Employee_Email VARCHAR(20),
Employee_Department int references Employee_Department(Id),
Employee_Salary int,
Holidays int REFERENCES Holidays(ID),
Things_Given_To_Employee int REFERENCES Things_Given_To_Employee(ID)
);

CREATE TABLE Company(
Id int PRIMARY KEY,
Company_Name int,
Company_Address VARCHAR(30),
Company_Owner VARCHAR(15),
Company_Email VARCHAR(20),
Company_Phone_Number int,
Facilities int references Facilities(ID),
Staff_Details int references Employee(ID));


