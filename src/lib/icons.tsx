import {
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  Sparkles,
};

export function resolveIcon(iconName?: string | null): LucideIcon {
  return iconMap[iconName ?? ""] ?? GraduationCap;
}