export default class CustomerDTO{
  private _storeName: string;
  private _topic: string;
  private _description: string;
  private _contactNo: number;
  private _image: string;
  private _other: Array<any>;


  constructor(storeName: string, topic: string, description: string, contactNo: number, image: string, other: Array<any>) {
    this._storeName = storeName;
    this._topic = topic;
    this._description = description;
    this._contactNo = contactNo;
    this._image = image;
    this._other = other;
  }


  get storeName(): string {
    return this._storeName;
  }

  set storeName(value: string) {
    this._storeName = value;
  }

  get topic(): string {
    return this._topic;
  }

  set topic(value: string) {
    this._topic = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get contactNo(): number {
    return this._contactNo;
  }

  set contactNo(value: number) {
    this._contactNo = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get other(): Array<any> {
    return this._other;
  }

  set other(value: Array<any>) {
    this._other = value;
  }
}
