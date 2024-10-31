import { type Brand } from "@/utils/brand";

abstract class BrandClass<Symbol extends symbol> {
  readonly #brand: Brand<string, Symbol>;

  constructor() {
    this.#brand = "BrandClass" as Brand<string, Symbol>;
  }
}

export { BrandClass };
