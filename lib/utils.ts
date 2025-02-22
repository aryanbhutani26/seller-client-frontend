<<<<<<< HEAD
// Simple utility function for combining class names
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
=======
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
>>>>>>> upstream/main
