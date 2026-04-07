let employees = [];

// ADD EMPLOYEE
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        dept: dept
    };

    employees.push(emp);
    alert("Employee Added!");
}

// DISPLAY ALL
function displayEmployees() {
    let text = "<h4>All Employees</h4>";

    for (let e of employees) {
        text += `Name: ${e.name}, ID: ${e.id}, Salary: ${e.salary}, Dept: ${e.dept} <br>`;
    }

    document.getElementById("output").innerHTML = text;
}

// FILTER SALARY > 50000
function filterEmployees() {
    let list = employees.filter(e => e.salary > 50000);

    let text = "<h4>Salary > 50000</h4>";

    for (let e of list) {
        text += `${e.name} - ${e.salary} <br>`;
    }

    document.getElementById("output").innerHTML = text;
}

// TOTAL SALARY
function totalSalary() {
    let total = 0;

    for (let e of employees) {
        total += e.salary;
    }

    document.getElementById("output").innerHTML = "Total Salary = " + total;
}

// AVERAGE SALARY
function avgSalary() {
    let total = 0;

    for (let e of employees) {
        total += e.salary;
    }

    let avg = employees.length ? total / employees.length : 0;

    document.getElementById("output").innerHTML = "Average Salary = " + avg;
}

// COUNT BY DEPARTMENT
function countDept() {
    let dept = prompt("Enter Department name:");
    let count = 0;

    for (let e of employees) {
        if (e.dept.toLowerCase() === dept.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        "Employees in " + dept + " = " + count;
}