const bins = require('./bins.json');

export function discoverCreditCardFlag(cardNumber: string): string | undefined {
  for (const key in bins) {
    if (bins[key].some((b: number) => cardNumber.startsWith(`${b}`))) {
      return key;
    }
  }
}
