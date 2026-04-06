// Experiment-5: Employee Management System
// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Employee Management System loaded');
});

// Employee array to store employees
let employees = [];

// Add employee function
function addEmployee() {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const salary = document.getElementById('salary').value;
    const dept = document.getElementById('dept').value;

    if (name && id && salary && dept) {
        employees.push({ name, id, salary: parseFloat(salary), dept });
        console.log('Employee added:', { name, id, salary, dept });
        clearInputs();
        alert('Employee added successfully!');
    } else {
        alert('Please fill all fields');
    }
}

// Display employees function
function displayEmployees() {
    const output = document.getElementById('output');
    if (employees.length === 0) {
        output.innerHTML = '<p class="alert alert-warning">No employees to display</p>';
        return;
    }
    
    let html = '<h4>All Employees:</h4><ul class="list-group">';
    employees.forEach(emp => {
        html += `<li class="list-group-item"><strong>${emp.name}</strong> - ID: ${emp.id}, Salary: $${emp.salary}, Dept: ${emp.dept}</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
}

// Filter employees function
function filterEmployees() {
    const dept = prompt('Enter department to filter:');
    if (!dept) return;
    
    const filtered = employees.filter(emp => emp.dept.toLowerCase() === dept.toLowerCase());
    const output = document.getElementById('output');
    
    if (filtered.length === 0) {
        output.innerHTML = `<p class="alert alert-info">No employees found in ${dept} department</p>`;
        return;
    }
    
    let html = `<h4>Employees in ${dept}:</h4><ul class="list-group">`;
    filtered.forEach(emp => {
        html += `<li class="list-group-item"><strong>${emp.name}</strong> - ID: ${emp.id}, Salary: $${emp.salary}</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
}

// Total salary function
function totalsalary() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const output = document.getElementById('output');
    output.innerHTML = `<div class="alert alert-success"><h4>Total Salary: $${total.toFixed(2)}</h4></div>`;
}

// Average salary function
function avgSalary() {
    if (employees.length === 0) {
        document.getElementById('output').innerHTML = '<p class="alert alert-warning">No employees to calculate average</p>';
        return;
    }
    
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const average = total / employees.length;
    const output = document.getElementById('output');
    output.innerHTML = `<div class="alert alert-success"><h4>Average Salary: $${average.toFixed(2)}</h4></div>`;
}

// Count by department function
function countDept() {
    const deptCount = {};
    employees.forEach(emp => {
        deptCount[emp.dept] = (deptCount[emp.dept] || 0) + 1;
    });
    
    const output = document.getElementById('output');
    if (Object.keys(deptCount).length === 0) {
        output.innerHTML = '<p class="alert alert-warning">No employees to count</p>';
        return;
    }
    
    let html = '<h4>Employees by Department:</h4><ul class="list-group">';
    Object.entries(deptCount).forEach(([dept, count]) => {
        html += `<li class="list-group-item"><strong>${dept}</strong>: ${count} employee(s)</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
}

// Clear input fields
function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('dept').value = '';
}
