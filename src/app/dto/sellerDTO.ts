
export default class sellerDTO{
   private _title:string;
   private _description:string;
   private _contactNo:number;
   private _image:string;
   private _other:Array<any>;


  constructor(title: string, description: string, contactNo: number, image: string, other: Array<any>) {
    this._title = title;
    this._description = description;
    this._contactNo = contactNo;
    this._image = image;
    this._other = other;
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
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
