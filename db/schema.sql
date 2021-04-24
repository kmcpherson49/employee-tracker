DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

CREATE TABLE dept(
    id  INTEGER AUTO_INCREMENT,
    dept_name  VARCHAR(30) NOT NULL, 
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id  INTEGER AUTO_INCREMENT,
    role_name  VARCHAR(30) NOT NULL,
    role_salary DECIMAL(10.3) NOT NULL,
    role_dept INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE emp(
    id  INTEGER AUTO_INCREMENT,
    emp_first_name  VARCHAR(30) NOT NULL,
    emp_last_name VARCHAR(30) NOT NULL,
    emp_role INT NOT NULL,
    emp_manager INT,
    PRIMARY KEY(id)
);