import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this.amount = amount;
    this.currency = Currency;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be number');
    }
    this._amount = value;
  }

  get Currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be instance of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.displayFullCurrency()}`);
  }
}
