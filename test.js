class Range {
  #gau = 'gau';

  constructor(from, to) {
    this.#gau = 'meo';
    this.from = from;
    this.to = to;
  }

  get gau() { return this.#gau; }
  static shit() { return 'shit!' }
  static #bum = 'boom boom';
}
console.log(Range.prototype.constructor === Range);
var r = new Range(1, 3);
console.log(r.from, Range.shit(), r.gau);
Range.bum = 'leo leu';
console.log(Range.bum);
