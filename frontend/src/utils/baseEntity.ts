interface BaseEntityProps {
  /** Entity ID */
  id: string;
}

abstract class BaseEntity<T extends BaseEntityProps> {
  readonly #id: string;
  #props: Omit<T, "id">;

  constructor(props: T) {
    const { id, ...otherProps } = props;

    this.#id = id;
    this.#props = otherProps;
  }

  get id(): string {
    return this.#id;
  }

  protected get props(): Omit<T, "id"> {
    return this.#props;
  }

  equals(object: unknown): boolean {
    if (object === null || !(object instanceof BaseEntity)) {
      return false;
    }

    return this.id === object.id;
  }
}

export { BaseEntity, type BaseEntityProps };
