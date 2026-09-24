import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Visual height in CSS pixels */
  height?: number;
  priority?: boolean;
};

/** Cropped original asset with transparent background */
const INTRINSIC_W = 590;
const INTRINSIC_H = 681;
const ASPECT = INTRINSIC_W / INTRINSIC_H;

export function BrandLogo({
  className,
  height = 36,
  priority = false,
}: BrandLogoProps) {
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src="/apertio-logo.png"
      alt="Apertio"
      width={INTRINSIC_W}
      height={INTRINSIC_H}
      priority={priority}
      quality={100}
      unoptimized
      sizes={`${Math.ceil(width)}px`}
      className={cn("object-contain", className)}
      style={{ height, width: "auto" }}
    />
  );
}
