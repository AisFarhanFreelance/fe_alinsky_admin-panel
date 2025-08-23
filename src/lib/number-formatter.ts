export const formatNumber = (value: number | string) => {
  if (typeof value === "number") {
    return new Intl.NumberFormat("id-ID").format(value);
  }

  if (typeof value === "string" && value.startsWith("Rp.")) {
    const numericPart = value.replaceAll(/[^\d]/g, "");
    const formatted = new Intl.NumberFormat("id-ID").format(
      Number(numericPart),
    );

    return `Rp. ${formatted}`;
  }

  return value;
};
