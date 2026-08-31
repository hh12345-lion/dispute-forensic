"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { PhoneField, formatPhoneFromFormData } from "./PhoneField";

/**
 * Webhook primary (/api/submit-lead), then soft-fail Sheets + email (/api/contact)
 * on one shared tab with Form Type.
 */
export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = formatPhoneFromFormData(data);

    if (!fullName || !email) {
      setStatus("error");
      setErrorMessage("Please enter your full name and email.");
      return;
    }

    const payload = {
      fullName,
      email,
      phone: phone || "",
      formType: "contact" as const,
    };

    try {
      const webhookRes = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!webhookRes.ok) {
        setStatus("error");
        setErrorMessage(
          webhookRes.status === 503
            ? "Lead delivery is not configured. Please email us directly."
            : "Something went wrong. Please try again or email us directly."
        );
        return;
      }

      // Soft-fail secondary contact path if present (do not cancel via navigation).
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch {
        /* ignore — submit-lead already handled webhook + Sheets */
      }

      router.push("/thank-you");
    } catch {
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
