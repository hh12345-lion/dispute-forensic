import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";

const DISCIPLINES = [
  { label: "Forensic Accounting", href: "/disciplines/forensic-accounting" },
  { label: "Engineering & Quantum", href: "/disciplines/forensic-engineering-quantum" },
  { label: "Digital Forensics", href: "/disciplines/digital-forensics" },
  { label: "Forensic Economics", href: "/disciplines/forensic-economics" },
];

/**
 * Homepage opening on umber: the title and enquiry actions on the left, a collage of cut-corner
 * photographs across the disciplines on the right, and the four disciplines along the foot.
 */
export function HomeHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-umber text-cream">
      <img
        src="/brand/monogram-light.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -bottom-24 w-[30rem] max-w-none opacity-[0.05]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-center lg:px-8 lg:pt-20 lg:pb-20">
        <div className="min-w-0">
          <h1 className="text-balance font-serif text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream/80">{subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="chamfer-sm inline-flex min-h-[48px] items-center bg-copper px-7 font-serif text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Submit Enquiry
            </Link>
            <Link
              href="/forensic-disciplines"
              className="inline-flex min-h-[48px] items-center border border-cream/30 px-7 font-serif text-sm font-semibold text-cream transition-colors hover:border-copper hover:text-white"
            >
              Explore Disciplines
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-[22rem] w-full max-w-[30rem] sm:h-[26rem]">
          <figure className="chamfer absolute left-0 top-0 h-[68%] w-[72%] bg-wine">
            <Image src={photos.tbmCutter.src} alt={photos.tbmCutter.alt} fill priority sizes="360px" className="object-cover" />
          </figure>
          <figure className="chamfer absolute bottom-0 right-0 h-[52%] w-[56%] bg-wine ring-0">
            <Image src={photos.headCrash.src} alt={photos.headCrash.alt} fill sizes="280px" className="object-cover" />
          </figure>
          <figure className="chamfer absolute bottom-6 left-6 h-[28%] w-[36%] bg-wine">
            <Image src={photos.maxwellChambers.src} alt={photos.maxwellChambers.alt} fill sizes="180px" className="object-cover" />
          </figure>
          <span aria-hidden="true" className="absolute right-4 top-6 h-16 w-16 rotate-45 border-4 border-copper" />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-wine">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {DISCIPLINES.map((d, i) => (
            <li key={d.href} className={`border-white/10 ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} lg:border-l lg:first:border-l-0`}>
              <Link href={d.href} className="group flex items-center gap-3 px-4 py-5 font-serif text-sm font-semibold text-cream transition-colors hover:bg-white/5 sm:px-6 lg:px-8">
                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rotate-45 bg-copper transition-transform group-hover:rotate-[135deg]" />
                {d.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
