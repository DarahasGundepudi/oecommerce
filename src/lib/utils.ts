import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Resolves a product image path to its correct URL.
 * External URLs (http/https) are returned as-is.
 * Local paths like "/images/foo.jpg" are prefixed with Vite's BASE_URL
 * so they work from the hosting root. */
export function imgUrl(path: string | undefined): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
