import Image from "next/image";

const VARIANTS = {
  sm: {
    src: "/images/elegant_logo-sm.webp",
    width: 240,
    height: 240,
    sizes: "120px",
  },
  lg: {
    src: "/images/elegant_logo.webp",
    width: 900,
    height: 900,
    sizes: "(max-width: 768px) 60vw, 520px",
  },
};

/**
 * Brand mark — compressed WebP variants for header (sm) and hero (lg).
 */
export default function ElegantLogo({
  className = "",
  priority = false,
  alt = "Open Esquire",
  size = "sm",
}) {
  const variant = VARIANTS[size] ?? VARIANTS.sm;

  return (
    <Image
      src={variant.src}
      alt={alt}
      width={variant.width}
      height={variant.height}
      className={className}
      sizes={variant.sizes}
      unoptimized
      priority={priority}
    />
  );
}
