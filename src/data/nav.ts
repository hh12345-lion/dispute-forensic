import type { FooterColumn, NavGroup, NavLink } from "./types";
import { getAllServices } from "./services";
import { getAllDisciplines } from "./disciplines";
import { getAllCaseTypes } from "./case-types";
import { getAllSectors } from "./sectors";

export const navServiceLinks: NavLink[] = getAllServices().map((s) => ({
  href: `/services#${s.id}`,
  label: s.name,
}));

export const navDisciplineLinks: NavLink[] = [
  { href: "/disciplines", label: "All Disciplines" },
  ...getAllDisciplines().map((d) => ({
    href: `/disciplines/${d.slug}`,
    label: d.title.replace(" Expert Witness UK", "").replace(" UK", ""),
  })),
];

export const navCaseTypeLinks: NavLink[] = [
  { href: "/case-types", label: "All Case Types" },
  ...getAllCaseTypes().map((c) => ({
    href: `/case-types/${c.slug}`,
    label: c.title,
  })),
];

export const navSectorLinks: NavLink[] = [
  { href: "/sectors", label: "All Sectors" },
  ...getAllSectors().map((s) => ({
    href: `/sectors/${s.slug}`,
    label: s.title.replace(" Forensic Expert Witness UK", "").replace(" UK", ""),
  })),
];

export const navResourcesLinks: NavLink[] = [
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];

export const mobileNavGroups: NavGroup[] = [
  {
    label: "Services",
    items: [{ href: "/services", label: "All Services" }, ...navServiceLinks],
  },
  {
    label: "Disciplines",
    items: [
      { href: "/forensic-disciplines", label: "Forensic Disciplines" },
      ...navDisciplineLinks,
    ],
  },
  {
    label: "Case Types",
    items: navCaseTypeLinks,
  },
  {
    label: "Sectors",
    items: navSectorLinks,
  },
  {
    label: "Resources",
    items: navResourcesLinks,
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Disciplines",
    links: [
      {
        href: "/disciplines/forensic-accounting",
        label: "Forensic Accounting",
      },
      {
        href: "/disciplines/forensic-engineering-quantum",
        label: "Forensic Engineering & Quantum",
      },
      { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
      { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
      { href: "/forensic-disciplines", label: "All Forensic Disciplines" },
    ],
  },
  {
    title: "Case Types",
    links: [
      {
        href: "/case-types/commercial-fraud-financial-crime",
        label: "Commercial Fraud",
      },
      {
        href: "/case-types/construction-engineering-disputes",
        label: "Construction Disputes",
      },
      {
        href: "/case-types/cybercrime-data-disputes",
        label: "Cybercrime & Data",
      },
      {
        href: "/case-types/competition-law-cartel-damages",
        label: "Competition Law",
      },
      { href: "/case-types/ip-theft-misappropriation", label: "IP Theft" },
      { href: "/case-types", label: "View all 10" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/guides", label: "Solicitor Guides" },
      { href: "/glossary", label: "Glossary" },
      { href: "/how-to-instruct", label: "How to Instruct" },
      { href: "/forensic-disciplines", label: "Forensic Disciplines" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/experts", label: "Our Experts" },
      { href: "/qualifications", label: "Qualifications" },
      { href: "/contact", label: "Contact" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
];

export const footerDisclaimer =
  "DisputeForensic.com connects legal professionals worldwide with forensic expert witnesses across all disciplines. We are not a law firm and do not provide legal advice.";

export const footerCopyright = "© 2025 DisputeForensic. All rights reserved.";
