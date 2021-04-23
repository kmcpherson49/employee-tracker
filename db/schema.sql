CREATE TABLE dept(
    id  INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name  VARCHAR(30) NOT NULL, 
);


CREATE TABLE roles(
    id  INTEGER AUTO_INCREMENT,
    role_name  VARCHAR(30) NOT NULL,
    role_salary VARCHAR(30) NOT NULL,
    role_dept VARCHAR(30) NOT NULL 
);

CREATE TABLE emp(
    id  INTEGER AUTO_INCREMENT,
    emp_first_name  VARCHAR(30) NOT NULL,
    emp_last_name VARCHAR(30) NOT NULL,
    emp_role VARCHAR(30) NOT NULL,
    emp_manager VARCHAR(30) NOT NULL
);