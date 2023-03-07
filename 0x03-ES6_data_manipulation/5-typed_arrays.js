export default function createInt8TypedArray(length, position, value) {
  if (position <= length) {
    const buffer = new ArrayBuffer(length);
    const newArray = new DataView(buffer);
    newArray.setInt8(position, value);
    return newArray;
  } throw Error('Position outside range');
}
