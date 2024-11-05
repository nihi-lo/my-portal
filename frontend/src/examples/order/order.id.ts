import { type EntityIdAttribute, EntityId } from "@/utils/entityId";

declare const _orderIdSymbol: unique symbol;

class OrderId extends EntityId<typeof _orderIdSymbol> {
  private constructor(value?: EntityIdAttribute["value"]) {
    super(value ? { value } : undefined);
  }

  static create(): OrderId {
    return new this();
  }

  static reconstruct(id: EntityIdAttribute["value"]): OrderId {
    return new this(id);
  }
}

export { OrderId };
