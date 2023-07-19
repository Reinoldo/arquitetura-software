export default class Coupon {
    constructor(readonly percentage: number, readonly code: string) {}

    calculateDiscount() {
        return this.percentage / 100;
    }
}
