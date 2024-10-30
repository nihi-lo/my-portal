import { Entity } from "@/utils/entity";

import { OrderId } from "./order.id";

declare const _symbol: unique symbol;

interface OrderAttribute {
  orderAt: Date;
}

class Order extends Entity<typeof _symbol, OrderId, OrderAttribute> {
  private constructor(id: OrderId, attrs: OrderAttribute) {
    super(id, attrs);
  }

  static create(attrs: OrderAttribute): Order {
    return new this(OrderId.create(), attrs);
  }

  static reconstruct(args: { id: OrderId } & OrderAttribute): Order {
    const { id, ...attrs } = args;

    return new this(id, attrs);
  }

  get orderAt(): OrderAttribute["orderAt"] {
    return this.attrs.orderAt;
  }
}

export { OrderId, type OrderAttribute, Order };
