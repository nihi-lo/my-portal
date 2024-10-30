import { type Brand } from "@/utils/brand";
import { type IEntityId } from "@/utils/entityId";

abstract class Entity<Symbol extends symbol, EntityId extends IEntityId, Attribute extends object> {
  readonly #brand?: Brand<string, Symbol>;
  readonly #id: EntityId;
  #attrs: Attribute;

  constructor(id: EntityId, attrs: Attribute) {
    this.#id = id;
    this.#attrs = attrs;
  }

  get id(): EntityId {
    return this.#id;
  }

  protected get attrs(): Attribute {
    return this.#attrs;
  }

  equals(object: unknown): boolean {
    if (object === null || !(object instanceof Entity)) {
      return false;
    }

    return this.id === object.id;
  }
}

export { Entity };
