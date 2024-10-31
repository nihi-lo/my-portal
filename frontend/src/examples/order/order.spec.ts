import { Order } from "./index";

describe("注文エンティティ", () => {
  it("注文を新規作成", () => {
    const orderAt = new Date();
    const order = Order.create({
      orderAt,
    });

    console.log(order.orderAt);

    expect(order.orderAt).toEqual(orderAt);
  });
});
