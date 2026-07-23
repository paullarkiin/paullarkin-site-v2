type DateStyle = "month" | "full";

export function formatDate(iso: string, style: DateStyle = "month"): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;

  const options: Intl.DateTimeFormatOptions =
    style === "full"
      ? { day: "numeric", month: "short", year: "numeric" } // 24 Jul 2026
      : { month: "long", year: "numeric" }; // July 2026

  return new Intl.DateTimeFormat("en-GB", {
    ...options,
    timeZone: "UTC",
  }).format(date);
}
