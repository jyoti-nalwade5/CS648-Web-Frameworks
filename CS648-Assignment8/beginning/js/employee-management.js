/*eslint-env browser*/

window.addEventListener('load', function(){
    displayEmployee();
    $("add").addEventListener("click",addEmployee);
});

var employeeList = [
    { name: "Roger Whitney", title: "QA Engineer", extension: 1111 },
    { name: "Zac Ruvalcaba", title: "Manager", extension:  2222 },
    { name: "Nitish Dave",  title: "Web Developer",  extension: 3333 },
    { name: "James Cox",  title: "Associate", extension: 4444 },
    { name: "Amanda Jose",  title: "Administrator", extension: 5555 },
];

$ = function (id){
    "use strict";
    return document.getElementById(id);
}

function displayEmployee(){
    "use strict";
        var tablebody,i, row, deleteBtn, employeeCount
        var tablebody = $('tbody');
        tablebody.innerHTML = '';
    
        for (i = 0; i < employeeList.length; i++) {
            row = document.createElement('tr');
            row.insertCell(0).innerHTML = employeeList[i].name;
            row.insertCell(1).innerHTML = employeeList[i].title;
            row.insertCell(2).innerHTML = employeeList[i].extension;
    
            deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('id', employeeList[i].extension);
            deleteBtn.innerHTML = "Delete";
            deleteBtn.addEventListener('click', function (e) {
                var extension = e.currentTarget.id;
                deleteEmployee(extension);
            });
    
            row.insertCell(3).append(deleteBtn);
    
            tablebody.append(row);
        }
    
        employeeCount = $('employeeNo');
        employeeCount.innerHTML = employeeList.length;
    }
        
    function deleteEmployee(extension) {
        employeeList = employeeList.filter(function (employee) {
            return employee.extension != extension;
        });
    
        displayEmployee();
    }

    function addEmployee(event) {
        event.preventDefault();
    
        var hasError = false;
        var form = event.currentTarget.closest('form');
        var name = form.querySelector('input[id="name"]');
        var title = form.querySelector('input[id="title"]');
        var extension = form.querySelector('input[id="extension"]');
    
        var requiredFields = [name, title, extension];
        for (var i = 0; i < requiredFields.length; i++) {
            if (requiredFields[i].value === '') {
                displayError(requiredFields[i]);
                hasError = true;
            }
        }
    
        if (hasError) {
            return false;
        }
    
        employeeList.push({
            name: name.value,
            title: title.value,
            extension: extension.value
        });
    
        displayEmployee();
        resetForm(form);
    }
    
    function resetForm(form) {
        form.reset();
        var errorNodes = form.querySelectorAll('.error');
        for (var i = 0; i < errorNodes.length; i++) {
            errorNodes[i].classList.add('hide');
        }
    }
    
    function displayError(element) {
        var error = element.parentNode.querySelector('.error');
        error.innerHTML = "Required field !";
        error.classList.remove('hide');
    }
    