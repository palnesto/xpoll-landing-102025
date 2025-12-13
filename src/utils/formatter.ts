import _ from "lodash";
export const formatCurrency = (cents: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
};

export function truncateText(
  text: any,
  maxLength: number,
  ellipsis: string = "..."
): any {
  if (typeof text !== "string") return text; // Return non-string values as is
  if (!text) return text; // Handle null, undefined, or empty strings
  if (text.length <= maxLength) return text; // No truncation needed
  const truncationLength = maxLength - ellipsis.length;
  return text.slice(0, truncationLength) + ellipsis;
}

export function formatToTwoDecimalPlaces(num: number): string {
  return _.round(num, 2).toFixed(2);
}
