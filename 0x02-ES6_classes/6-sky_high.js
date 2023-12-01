import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = typeof floors === 'number' ? floors : 0;
  }

  // getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarning Message method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
