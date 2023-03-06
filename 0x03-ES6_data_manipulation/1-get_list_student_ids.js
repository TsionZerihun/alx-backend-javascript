export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    return arrayOfObjects.map((a) => a.id);
  }

  return [];
}
