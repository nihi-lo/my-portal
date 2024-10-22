import { type ReadonlyDeep } from "type-fest";

import { deepFreeze } from "@/utils/deepFreeze";

abstract class BaseValueObject<T> {
  readonly #props: ReadonlyDeep<T>;

  constructor(props: T) {
    this.#props = deepFreeze(props);
  }

  protected get props(): ReadonlyDeep<T> {
    return this.#props;
  }

  equals(object: unknown): boolean {
    if (object === null || !(object instanceof BaseValueObject)) {
      return false;
    }

    return JSON.stringify(this.props) === JSON.stringify(object.props);
  }
}

export { BaseValueObject };
