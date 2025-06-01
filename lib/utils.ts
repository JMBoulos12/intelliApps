// Importing `clsx` for conditional class name joining
// and importing the `ClassValue` type for type safety
import { clsx, type ClassValue } from "clsx"
// Importing `twMerge` to intelligently merge Tailwind CSS class names
import { twMerge } from "tailwind-merge"

/**
 * Utility function to combine class names using clsx and merge conflicts with tailwind-merge.
 *
 * @param inputs - A list of class name values, including conditionals and arrays
 * @returns A single string of class names with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  // First, join class names conditionally using clsx
  // Then, merge them with tailwind-merge to avoid Tailwind conflicts (e.g., `p-2` and `p-4`)
  return twMerge(clsx(inputs))
}
