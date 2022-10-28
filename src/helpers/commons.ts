export function formatPrice(price: number | string): string {
    return Number.parseFloat(`${price}`).toFixed(2);
}