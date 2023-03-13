export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {firstName: "Tsion", lastName: "elele", age: 27, location: "addis ababa"};
const students2: Student = {firstName: "Tsion", lastName: "eleke", age: 17, location: "addis-ababa"};
const studentsList: Student[]= [student1, students2];

const tableTemplate = (students: Student[]): void =>{
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const tableBody = document.createElement('td');
    const tableRow = document.createElement('tr');

    headerRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
    headerRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHeader.insertAdjacentElement('beforeend', headerRow);


    for (const student of students) {
        tableRow.insertAdjacentHTML('beforeend', '<td>${student.firsrName}</td>');
        tableRow.insertAdjacentHTML('beforeend', '<td>${student.location}</td>');
        tableBody.insertAdjacentElement('beforeend', tableRow);
    }

    table.insertAdjacentElement('beforeend', tableHeader);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);

};

tableTemplate(studentsList);