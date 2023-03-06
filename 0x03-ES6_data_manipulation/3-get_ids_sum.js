export default function getStudentIdsSum(students) {
  return students.reduce((total, students) => total + students.id,
    0);
}
