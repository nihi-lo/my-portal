import { Order } from "./index";

describe("注文", () => {
  it("新しい注文を作成", () => {
    const orderAt = new Date();
    const order = Order.create({
      orderAt,
    });

    console.log(order.orderAt);

    expect(order.orderAt).toEqual(orderAt);
  });
});
