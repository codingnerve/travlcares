import {
  Briefcase,
  Car,
  HeartHandshake,
  House,
  KeyRound,
  PawPrint,
  Plane,
  Store,
  type LucideIcon,
} from "lucide-react";
import type { ProductIconKey } from "@/content/products";

const icons: Record<ProductIconKey, LucideIcon> = {
  car: Car,
  house: House,
  key: KeyRound,
  heart: HeartHandshake,
  plane: Plane,
  store: Store,
  paw: PawPrint,
};

export function ProductIcon({
  name,
  className = "size-6",
}: {
  name: ProductIconKey;
  className?: string;
}) {
  const Icon = icons[name] ?? Briefcase;
  return <Icon className={className} aria-hidden="true" />;
}
