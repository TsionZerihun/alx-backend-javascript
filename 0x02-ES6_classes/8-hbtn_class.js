export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // eslint-disable-next-line consistent-return
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('size must be number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('location must be number');
    }
    this._location = value;
  }
}
