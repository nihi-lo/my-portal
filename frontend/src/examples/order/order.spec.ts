import { Order } from "./index";

describe("注文エンティティ", () => {
  it("注文を新規作成", () => {
    const orderAt = new Date();
    const order = Order.create({
      orderAt,
    });

    expect.soft(order.orderAt).toStrictEqual(orderAt);
  });
});
