export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "")
  .trim()
  .replace(/\/+$/, "");

export function isApiConfigured(): boolean {
  return API_BASE_URL.length > 0;
}
