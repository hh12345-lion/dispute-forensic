import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata = createMetadata({
  title: "Privacy Policy | DisputeForensic.com",
  description: "Privacy policy for DisputeForensic.com.",
  path: "/privacy",
  noindex: true,
  nofollow: false,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Data Controller</h2>
          <p>
            DisputeForensic.com is the data controller for personal data
            submitted through this website. Contact:{" "}
            <SiteEmailLink className="text-accent hover:underline" />.
          </p>

          <h2>What Data We Collect</h2>
          <p>
            When you submit an enquiry form, we collect your name, email address,
            phone number (if provided), optional discipline selection, and the
            case details you choose to share in your message. Submissions are
            processed via our secure API and may be stored in Google Sheets when
            configured, or forwarded to Formspree as a fallback.
          </p>

          <h2>Lawful Basis</h2>
          <p>
            We process your data on the basis of legitimate interests (responding
            to your enquiry and matching you with suitable forensic expert
            witnesses) and, where applicable, your consent.
          </p>

          <h2>How We Use Your Data</h2>
          <p>
            We use your data solely to respond to your enquiry, match you with
            qualified forensic expert witnesses across the relevant discipline,
            and communicate about your case. We do not sell your data to third
            parties.
          </p>

          <h2>Data Retention</h2>
          <p>
            Enquiry data is retained for up to 24 months unless a longer period
            is required for ongoing case matching or legal obligations.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, rectify,
            erase, restrict processing, object, and data portability. Contact us
            at{" "}
            <SiteEmailLink className="text-accent hover:underline" /> to
            exercise your rights.
          </p>

          <h2>Cookies & Analytics</h2>
          <p>
            We may use cookies and similar technologies for essential site
            functionality and, where configured, analytics services. Non-essential
            cookies are only placed with your consent where required by law.
          </p>

          <h2>International Transfers</h2>
          <p>
            Where third-party processors are used (for example Google Sheets or
            Formspree), data may be processed outside your country. Appropriate
            safeguards are applied where required by applicable law.
          </p>

          <p className="text-sm text-body/70">Last updated: May 2025</p>
        </article>
      </Section>
    </>
  );
}
