import { Entity } from "@/utils/entity";

import { type OrderAttribute as Attribute } from "./order.attr";
import { OrderId as Id } from "./order.id";

declare const _symbol: unique symbol;

class Order extends Entity<typeof _symbol, Id, Attribute> {
  private constructor(id: Id, attrs: Attribute) {
    super(id, attrs);
  }

  static create(attrs: Attribute): Order {
    return new this(Id.create(), attrs);
  }

  static reconstruct(args: { id: Id } & Attribute): Order {
    const { id, ...attrs } = args;

    return new this(id, attrs);
  }

  get orderAt(): Attribute["orderAt"] {
    return this.attrs.orderAt;
  }
}

export { Order };
