// Initialize the employee object
let employee = {
    name: 'Employee Name',
    streetAddress: '123 Street'
};

// Functions
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newObj = {...employee};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
