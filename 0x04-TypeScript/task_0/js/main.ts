export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {firstName: "Tsion", lastName: "elele", age: 27, location: "addis ababa"};
const students2: Student = {firstName: "Tsion", lastName: "eleke", age: 17, location: "addis-ababa"};
const studentsList: Student[]= [student1, students2];
const table:any = [[]];
for (const value of studentsList.values()){
    table.push(value.location);
    table.push(value.firstName);

}
