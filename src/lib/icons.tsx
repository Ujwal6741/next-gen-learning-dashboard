import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function resolveIcon(iconName: string): LucideIcon {
  const fallback = Icons.GraduationCap;
  const icon = Icons[iconName as keyof typeof Icons];
  return typeof icon === "function" ? icon : fallback;
}
