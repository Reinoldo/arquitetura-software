import Cpf from "./Cpf";
import Coupon from "./Coupon";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf;
    orderItens: OrderItem[];
    coupon?: Coupon;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItens = [];
    }

    addItem(item: Item, quantity: number) {
        this.orderItens.push(new OrderItem(item.idItem, item.price, quantity));
    }

    getTotal() {
        let total = this.orderItens.reduce((total, item) => {
            total += item.getTotal();
            return total;
        }, 0);
        if (this.coupon) {
            total -= total * this.coupon.calculateDiscount();
        }
        return total;
    }

    addCupom(coupon: Coupon) {
        this.coupon = coupon;
    }
}
