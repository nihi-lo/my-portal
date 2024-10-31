import { type BrandType } from "@/utils/brandType";

abstract class BrandClass<Symbol extends symbol> {
  readonly #brand: BrandType<string, Symbol>;

  constructor() {
    this.#brand = "BrandClass" as BrandType<string, Symbol>;
  }
}

export { BrandClass };
