import { v4 as uuidv4 } from "uuid";

import { ValueObject } from "@/utils/valueObject";

interface IEntityId {
  get value(): string;
}

interface EntityIdAttribute {
  value: string;
}

abstract class EntityId<Symbol extends symbol>
  extends ValueObject<Symbol, EntityIdAttribute>
  implements IEntityId
{
  constructor(attrs?: EntityIdAttribute) {
    super(attrs ?? { value: uuidv4() });

    this.varidateValue(this.value);
  }

  private varidateValue(value: EntityIdAttribute["value"]) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(value)) {
      throw new Error(`validation error: valueはUUIDの形式である必要があります: value="${value}"`);
    }
  }

  get value(): EntityIdAttribute["value"] {
    return this.attrs.value;
  }
}

export { type IEntityId, type EntityIdAttribute, EntityId };
