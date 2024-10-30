import { type ReadonlyDeep } from "type-fest";

import { type Brand } from "@/utils/brand";
import { deepFreeze } from "@/utils/deepFreeze";

abstract class ValueObject<Symbol extends symbol, Attribute extends object> {
  readonly #brand?: Brand<string, Symbol>;
  readonly #attrs: ReadonlyDeep<Attribute>;

  constructor(attrs: Attribute) {
    this.#attrs = deepFreeze(attrs);
  }

  protected get attrs(): ReadonlyDeep<Attribute> {
    return this.#attrs;
  }

  equals(object: unknown): boolean {
    if (object === null || !(object instanceof ValueObject)) {
      return false;
    }

    return JSON.stringify(this.attrs) === JSON.stringify(object.attrs);
  }
}

export { ValueObject };
