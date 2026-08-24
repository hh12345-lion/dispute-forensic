import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata = createMetadata({
  title: "Terms of Use | DisputeForensic.com",
  description: "Terms of use for DisputeForensic.com referral service.",
  path: "/terms",
  noindex: true,
  nofollow: false,
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" breadcrumbs={[{ label: "Terms of Use" }]} />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>About This Service</h2>
          <p>
            DisputeForensic.com is a referral and matching service that connects
            legal professionals worldwide with qualified forensic expert witnesses
            across all disciplines. We are not a law firm and do not provide legal
            advice.
          </p>

          <h2>No Client Relationship</h2>
          <p>
            Submitting an enquiry does not create a solicitor-client relationship
            with DisputeForensic.com. Any engagement is directly between you and
            the instructed forensic expert witness.
          </p>

          <h2>Expert Selection</h2>
          <p>
            We endeavour to match enquiries with suitably qualified forensic
            experts based on the discipline, dispute type, and information
            provided. Final selection and instruction remain the responsibility
            of the instructing solicitor or party.
          </p>

          <h2>Multi-Discipline Referrals</h2>
          <p>
            Where a dispute requires experts from more than one forensic
            discipline, we may coordinate introductions across disciplines.
            Each expert remains independently responsible for evidence within
            their area of expertise under CPR Part 35 or applicable arbitration
            rules.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, DisputeForensic.com accepts
            no liability for the content of expert reports, oral evidence, or any
            outcome of litigation or arbitration. Our liability is limited to the
            matching service itself.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. The courts
            of England and Wales have exclusive jurisdiction.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <SiteEmailLink className="text-accent hover:underline" />.
          </p>

          <p className="text-sm text-body/70">Last updated: May 2025</p>
        </article>
      </Section>
    </>
  );
}
