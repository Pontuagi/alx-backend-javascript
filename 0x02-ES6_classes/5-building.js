export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // sqft getter
  get sqft() {
    return this._sqft;
  }

  // setter for sqft
  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      throw new TypeError('Square footage must be a number.');
    }
  }

  // Abstract method that needs to be implemented by subclasses
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
