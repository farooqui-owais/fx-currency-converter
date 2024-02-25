import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_p4kFcLUeFKA6VG6Gm3qwYF61JPaFE0iJOAl3bh2d"
);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  const multiplier = res.data[toCurrency];
  return multiplier * units;
}
