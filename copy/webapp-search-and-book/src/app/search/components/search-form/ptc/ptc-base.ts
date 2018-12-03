export class PTCBase {
  value: number;
  key: string;
  code: string;
  category: string;

  constructor(options: {
      value?: number,
      key?: string,
      code?: string,
      category?: string;
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.code = options.code;
    this.category = options.category;
  }
}
