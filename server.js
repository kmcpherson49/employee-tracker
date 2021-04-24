const inquirer = require('inquirer');
const mysql = require('mysql2');

//const inputCheck = require('./utils/inputCheck');
const connection = require('./config/connection')


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
        switch(answers.choosetype) {
         case 'View all departments':
             allDept();
             break;
        case 'View all roles':
            allRoles();
            break;
        case 'View all employees':
            allEmp();
            break;
        // case 'Add a department':
        //     addDept();
        //     break;
        // case 'Add a role':
        //     addRoles();
        //     break;
        // case 'Add an employee':
        //     addEmp();
        //     break;
        // case 'Update an employee role':
        //     updateEmp();
        }
    })
}

// // WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids
function allDept(){
    let query = "SELECT * FROM dept";
    connection.query(query, function (err, res){
        console.log("departments")
        res.forEach(departments => {
            console.log(`ID: ${departments.id} | NAME: ${departments.dept_name}`)
        })
    })
};

// // WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function allRoles(){
    let query = "SELECT * FROM roles";
    connection.query(query, function (err, res){
        console.log("roles")
        res.forEach(roles => {
            console.log(`ID: ${roles.id} | NAME: ${roles.role_name} | SALARY: ${roles.role_salary} | DEPT ID: ${roles.role_dept}`)
        })
    })
};

// // WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function allEmp(){
    let query = "SELECT * FROM emp";
    connection.query(query, function (err, res){
        console.log("employee")
        res.forEach(employee => {
            console.log(`ID: ${employee.id} | NAME: ${employee.emp_first_name} ${employee.emp_last_name} | ROLE ID: ${employee.emp_role} | MANAGER ID: ${employee.emp_manager}`)
        })
    })
};

// // WHEN I choose to add a department THEN I am prompted to enter the name of the department and that department is added to the database
// function addDept(
//     app.post('/api/dept', ({ body }, res) => {
//         const errors = inputCheck(body, 'dept_name', 'dept_id');
//         if (errors) {
//             res.status(400).json({ error: errors });
//             return;
//         }

//         const sql = `INSERT INTO dept (dept_name, dept_id)
//     VALUES (?,?)`;
//         const params = [body.dept_name, body.dept_id];

//         db.query(sql, params, (err, result) => {
//             if (err) {
//                 res.status(400).json({ error: err.message });
//                 return;
//             }
//             res.json({
//                 message: 'success',
//                 data: body
//             });
//         });
//     });
// );
// // WHEN I choose to add a role THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// const addRole(
//     app.post('/api/roles', ({ body }, res) => {
//         const errors = inputCheck(body, 'role_name', 'role_salary', 'role_dept');
//         if (errors) {
//             res.status(400).json({ error: errors });
//             return;
//         }

//         const sql = `INSERT INTO roles (role_name, role_salary, role_dept)
//     VALUES (?,?,?)`;
//         const params = [body.role_name, body.role_salary, body.role_dept];

//         db.query(sql, params, (err, result) => {
//             if (err) {
//                 res.status(400).json({ error: err.message });
//                 return;
//             }
//             res.json({
//                 message: 'success',
//                 data: body
//             });
//         });
//     });
// );

// // WHEN I choose to add an employee THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
// const addEmp(
//     app.post('/api/emp', ({ body }, res) => {
//         const errors = inputCheck(body, 'emp_first_name', 'emp_last_name', 'emp_role', 'emp_manager');
//         if (errors) {
//             res.status(400).json({ error: errors });
//             return;
//         }

//         const sql = `INSERT INTO emp (emp_first_name, emp_last_name, emp_role, emp_manager)
//     VALUES (?,?,?,?)`;
//         const params = [body.emp_first_name, body.emp_last_name, body.emp_role, body.emp_manager];

//         db.query(sql, params, (err, result) => {
//             if (err) {
//                 res.status(400).json({ error: err.message });
//                 return;
//             }
//             res.json({
//                 message: 'success',
//                 data: body
//             });
//         });
//     });
// );

// WHEN I choose to update an employee role THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
//updateEmp
viewAll();