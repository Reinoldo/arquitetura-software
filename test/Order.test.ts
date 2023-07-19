import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

test("Nao deve criar um pedido com CPF invalido", function () {
    expect(() => new Order("198.454.187-07")).toThrow("Cpf inválido");
});

test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("198.454.187-08");
    order.addItem(new Item(1, "bateria", 300), 1);
    order.addItem(new Item(1, "tela", 3000), 1);
    order.addItem(new Item(1, "mouse", 400), 1);
    expect(order.getTotal()).toBe(3700);
});

test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
    const order = new Order("198.454.187-08");
    order.addItem(new Item(1, "bateria", 300), 1);
    order.addItem(new Item(1, "tela", 3000), 1);
    order.addItem(new Item(1, "mouse", 400), 1);
    order.addCupom(new Coupon(20, "REI20"));

    expect(order.getTotal()).toBe(2960);
});

test("Não deve aplicar cupom de desconto expirado", function () {
    const order = new Order("198.454.187-08");
    order.addItem(new Item(1, "bateria", 300), 1);
    order.addItem(new Item(1, "tela", 3000), 1);
    order.addCupom(new Coupon(20, "REI20"));
    expect(order.getTotal()).toBe(2960);
});
