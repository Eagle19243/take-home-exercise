export const countries = [
  {
    id: 0,
    name: "Hong Kong",
    rate: 1,
    currency: "HKD",
  },
  {
    id: 1,
    name: "USA",
    rate: 2,
    currency: "USD",
  },
  {
    id: 2,
    name: "Australia",
    rate: 3,
    currency: "AUD",
  },
];

export const packages = [
  {
    label: "Standard",
    value: 0,
  },
  {
    label: "Safe",
    value: 0.5,
  },
  {
    label: "Super Safe",
    value: 0.75,
  },
];

export function premium(selectedCountry, info) {
  const country = countries.find((c) => c.id === selectedCountry);
  const value =
    (Number(info.age) || 0) *
    country.rate *
    10 *
    (1 + packages[info.package].value);
  return `${value}${country.currency}`;
}

export function pack(selectedCountry, info, p) {
  if (p.value === 0) {
    return p.label;
  }

  const country = countries.find((c) => c.id === selectedCountry);
  const value = (Number(info.age) || 0) * country.rate * 10 * p.value;
  return `${p.label} (+${value}${country.currency} ${p.value * 100}%)`;
}
