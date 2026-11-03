import {
  Fish,
  Handshake,
  MapPinned,
  Package,
  PhoneCall,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/content/site";

type IconName = (typeof features)[number]["icon"];

const icons: Record<IconName, LucideIcon> = {
  scale: Scale,
  fish: Fish,
  package: Package,
  map: MapPinned,
  phone: PhoneCall,
  handshake: Handshake,
};

export function FeatureIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.35} aria-hidden="true" />;
}
