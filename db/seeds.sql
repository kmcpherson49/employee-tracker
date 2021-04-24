USE employee_tracker_db;

INSERT INTO dept (dept_name) VALUES ("Software Engineer");
INSERT INTO dept (dept_name) VALUES ("Human Resources");
INSERT INTO dept (dept_name) VALUES ("Accounting");

INSERT INTO roles (role_name, role_salary, role_dept) VALUES ("Junior Engineer", 50000, 3);
INSERT INTO roles (role_name, role_salary, role_dept) VALUES ("HR Manager", 80000, 4);
INSERT INTO roles (role_name, role_salary, role_dept) VALUES ("Payroll", 40000, 7);

INSERT INTO emp (emp_first_name, emp_last_name, emp_role, emp_manager) VALUES ("Kevin", "Smith", 3, NULL);
INSERT INTO emp (emp_first_name, emp_last_name, emp_role, emp_manager) VALUES ("Susan", "Jones", 4, 6);
INSERT INTO emp (emp_first_name, emp_last_name, emp_role, emp_manager) VALUES ("Marcy", "Brown", 2, 8);