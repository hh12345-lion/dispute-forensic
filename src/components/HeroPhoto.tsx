"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { photoFor } from "@/lib/page-photos";

/**
 * The page photograph in a frame with cut corners, the shape of the speech mark in the monogram,
 * offset over a copper plate. Rendered on the server; the path only picks the photograph.
 */
export function HeroPhoto() {
  const photo = photoFor(usePathname());
  if (!photo) return null;
  return (
    <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div aria-hidden="true" className="chamfer absolute inset-0 translate-x-3 translate-y-3 bg-copper" />
      <div className="chamfer relative aspect-[4/3] bg-stone">
        <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 1024px) 90vw, 460px" className="object-cover" />
      </div>
    </figure>
  );
}
