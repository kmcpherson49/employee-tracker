const express = require('express');
const mysql = require('mysql2');
const { ADDRGETNETWORKPARAMS } = require('node:dns');
const { allowedNodeEnvironmentFlags } = require('node:process');
//const inputCheck = require('./utils/inputCheck');
const connect = require('./config/connection')

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// WHEN I start the application THEN I am presented with the following options: 
//view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const viewAll = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "choosetype",
            message: "What would you like to do?",
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }

    ]).then(answers => {
        console.log(answers);
        if (answers.choosetype === 'View all departments') {
            return allDept();
        } else {
            return allRoles();
        } else {
            return allEmp();
        } else {
            return addDept();
        } else {
            return addRole();
        } else {
            return addEmp();
        } else {
            return updateEmp();
        }
    })
}

// WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids
//work on api path. Where does api come from?
const allDept(
    app.get('/api/dept', (req, res) => {
        const sql = `SELECT * FROM dept`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: rows
            });
        });
    });
);

// WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const allRoles(
    app.get('/api/roles', (req, res) => {
        const sql = `SELECT * FROM roles`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: rows
            });
        });
    });
);

// WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const allEmp(
    app.get('/api/emp', (req, res) => {
        const sql = `SELECT * FROM emp`;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: rows
            });
        });
    });
);

// WHEN I choose to add a department THEN I am prompted to enter the name of the department and that department is added to the database
const addDept(
    app.post('/api/dept', ({ body }, res) => {
        const errors = inputCheck(body, 'dept_name', 'dept_id');
        if (errors) {
            res.status(400).json({ error: errors });
            return;
        }

        const sql = `INSERT INTO dept (dept_name, dept_id)
    VALUES (?,?)`;
        const params = [body.dept_name, body.dept_id];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: body
            });
        });
    });
);
// WHEN I choose to add a role THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole(
    app.post('/api/roles', ({ body }, res) => {
        const errors = inputCheck(body, 'role_name', 'role_salary', 'role_dept');
        if (errors) {
            res.status(400).json({ error: errors });
            return;
        }

        const sql = `INSERT INTO roles (role_name, role_salary, role_dept)
    VALUES (?,?,?)`;
        const params = [body.role_name, body.role_salary, body.role_dept];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: body
            });
        });
    });
);

// WHEN I choose to add an employee THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
const addEmp(
    app.post('/api/emp', ({ body }, res) => {
        const errors = inputCheck(body, 'emp_first_name', 'emp_last_name', 'emp_role', 'emp_manager');
        if (errors) {
            res.status(400).json({ error: errors });
            return;
        }

        const sql = `INSERT INTO emp (emp_first_name, emp_last_name, emp_role, emp_manager)
    VALUES (?,?,?,?)`;
        const params = [body.emp_first_name, body.emp_last_name, body.emp_role, body.emp_manager];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: body
            });
        });
    });
);

// WHEN I choose to update an employee role THEN I am prompted to select an employee to update and their new role and this information is updated in the database 