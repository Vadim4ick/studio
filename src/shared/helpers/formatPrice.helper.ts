export const formatPrice = (amount: string | number) =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumSignificantDigits: 1,
  }).format(+amount)
