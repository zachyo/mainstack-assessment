import { format as formatDateFns, parseISO } from "date-fns";
import type { User } from "../types/api";

/**
 * Format amount to "USD 10,000.00" while trimming trailing .00
 */
export function formatCurrencyUSD(amount: number): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  // Trim trailing .00 to match mixed UI examples (e.g., "USD 600" vs "USD 3000.33")
  return formatted.replace(/\.00$/, "");
}

/**
 * Format date string (YYYY-MM-DD or ISO) to "MMM dd,yyyy" (e.g., "Apr 03,2022")
 */
export function formatDateLabel(dateStr: string): string {
  let d: Date;
  try {
    // Attempt ISO parsing
    d = parseISO(dateStr);
  } catch {
    d = new Date(dateStr);
  }
  if (Number.isNaN(d.getTime())) return dateStr;
  return formatDateFns(d, "MMM dd,yyyy");
}

/**
 * Build "First Last" from user, falling back safely
 */
export function formatUserFullName(user: User | null | undefined): string {
  if (!user) return "User";
  const first = user.first_name ?? "";
  const last = user.last_name ?? "";
  const full = `${first} ${last}`.trim();
  return full || "User";
}

/**
 * Compute initials from user name
 */
export function getInitials(user: User | null | undefined): string {
  if (!user) return "NA";
  const parts = [user.first_name, user.last_name].filter(Boolean) as string[];
  if (parts.length === 0) return "NA";
  const initials = parts.map((p) => p[0]?.toUpperCase() ?? "").join("");
  return initials || "NA";
}