abstract class BaseEntity<T> {
  constructor(
    private readonly _id: string,
    private _props: T,
  ) {}

  get id(): string {
    return this._id;
  }

  protected get props(): T {
    return this._props;
  }

  equals(object: unknown): boolean {
    if (object === null || !(object instanceof BaseEntity)) {
      return false;
    }
    return this.id === object.id;
  }
}

export { BaseEntity };
