import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...classes: (string | undefined | null | false)[]) {
  return twMerge(clsx(...classes));
}
