export default class laptopDTO{
  private _laptopName: string;
  private _prices: Array<any>;
  private _predictedPrice: number;


  constructor(laptopName: string, prices: Array<any>, predictedPrice: number) {
    this._laptopName = laptopName;
    this._prices = prices;
    this._predictedPrice = predictedPrice;
  }


  get laptopName(): string {
    return this._laptopName;
  }

  set laptopName(value: string) {
    this._laptopName = value;
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
