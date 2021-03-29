export default class phoneDTO{
  private _phoneName: string;
  private _prices: Array<any>;
  private _predictedPrice: number;


  constructor(phoneName: string, prices: Array<any>, predictedPrice: number) {
    this._phoneName = phoneName;
    this._prices = prices;
    this._predictedPrice = predictedPrice;
  }


  get phoneName(): string {
    return this._phoneName;
  }

  set phoneName(value: string) {
    this._phoneName = value;
  }

  get prices(): Array<any> {
    return this._prices;
  }

  set prices(value: Array<any>) {
    this._prices = value;
  }

  get predictedPrice(): number {
    return this._predictedPrice;
  }

  set predictedPrice(value: number) {
    this._predictedPrice = value;
  }
}
