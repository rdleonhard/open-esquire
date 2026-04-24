import Image from "next/image";

const SRC = "/images/elegant_logo.png";

/**
 * Brand mark from public/images/elegant_logo.png.
 * Constrain with Tailwind: e.g. `h-9 w-auto` (header) or `h-48 w-auto max-w-full` (hero).
 */
export default function ElegantLogo({
  className = "",
  priority = false,
  alt = "Open Esquire",
}) {
  return (
    <Image
      src={SRC}
      alt={alt}
      width={480}
      height={160}
      className={className}
      sizes="(max-width: 768px) 200px, 400px"
      unoptimized
      priority={priority}
    />
  );
}
