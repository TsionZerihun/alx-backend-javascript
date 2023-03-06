export default function updateStudentGradeByCity(student, city, newGrade) {
  const studInCity = student.filter((student) => student.location === city);
  return studInCity.map((student) => {
    const filterGrades = newGrade.filter((grad) => grad.studentId === student.id);
    if (filterGrades.length > 0) {
      return {
        ...student,
        grade: filterGrades[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
