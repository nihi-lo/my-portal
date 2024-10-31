import { type ReadonlyDeep } from "type-fest";

import { BrandClass } from "@/utils/brandClass";
import { deepFreeze } from "@/utils/deepFreeze";

abstract class ValueObject<
  Symbol extends symbol,
  Attribute extends object,
> extends BrandClass<Symbol> {
  readonly #attrs: ReadonlyDeep<Attribute>;

  constructor(attrs: Attribute) {
    super();

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
