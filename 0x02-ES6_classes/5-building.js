export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : 0;
  }

  // sqft getter
  get sqft() {
    return this._sqft;
  }

  // Abstract method that needs to be implemented by subclasses
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
