"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { PhoneField, formatPhoneFromFormData } from "./PhoneField";

const disciplines = [
  "",
  "Forensic Accounting",
  "Forensic Engineering / Quantum",
  "Digital Forensics",
  "Forensic Economics",
  "Multiple Disciplines",
  "Not Sure",
];

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formspreeUrl = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submitToFormspree(form: HTMLFormElement): Promise<boolean> {
    if (!formspreeUrl) return false;
    try {
      const data = new FormData(form);
      data.set("phone", formatPhoneFromFormData(data));
      const res = await fetch(formspreeUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = formatPhoneFromFormData(data);
    const description = String(data.get("description") || "").trim();

    if (!fullName || !email || !description) {
      setStatus("error");
      setErrorMessage("Please enter your name, email, and a brief description.");
      return;
    }

    const payload = {
      fullName,
      email,
      phone,
      discipline: String(data.get("discipline") || "").trim(),
      description,
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      if (res.status === 503 && (await submitToFormspree(form))) {
        router.push("/thank-you");
        return;
      }

      setStatus("error");
      setErrorMessage(
        res.status === 503
          ? "Lead delivery is not configured. Please email us directly."
          : "Something went wrong. Please try again or email us directly."
      );
    } catch {
      if (await submitToFormspree(form)) {
        router.push("/thank-you");
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 border border-border bg-surface px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <PhoneField inputClass={inputClass} labelClass={labelClass} />

      <div className="min-w-0">
        <label htmlFor="discipline" className={labelClass}>
          Forensic discipline (optional)
        </label>
        <select id="discipline" name="discipline" className={inputClass} defaultValue="">
          <option value="">Select if known</option>
          {disciplines.slice(1).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>
          Brief description *
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          placeholder="Dispute type, jurisdiction, and what you need from the expert"
          className={`${inputClass} min-h-[100px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage ?? "Something went wrong. Please email "}{" "}
          <SiteEmailLink className="underline" />.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-[44px] w-full items-center justify-center border border-accent bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto sm:text-sm"
      >
        {status === "loading" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
