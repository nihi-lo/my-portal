abstract class BaseValueObject<T> {
  constructor(private readonly _props: T) {
    this._props = Object.freeze(_props);
  }

  protected get props(): T {
    return this._props;
  }

  equals(object: unknown): boolean {
    if (object === null || !(object instanceof BaseValueObject)) {
      return false;
    }
    return JSON.stringify(this._props) === JSON.stringify(object._props);
  }
}

export { BaseValueObject };
