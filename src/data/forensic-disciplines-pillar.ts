import type { PillarSection } from "./types";

export const FORENSIC_DISCIPLINES_PILLAR_H1 =
  "Forensic Expert Witness Disciplines: The Complete Guide";

export const FORENSIC_DISCIPLINES_PILLAR_META = {
  title:
    "Forensic Expert Witness Disciplines | Accounting, Engineering, Digital & Economics",
  description:
    "The complete guide to forensic expert witness disciplines for litigation and arbitration worldwide: forensic accounting, forensic engineering, digital forensics, forensic economics, and when each is needed.",
};

const COMPARISON_TABLE = `<table>
<thead>
<tr><th>Discipline</th><th>Primary Expertise</th><th>Typical Disputes</th><th>Key Credentials</th></tr>
</thead>
<tbody>
<tr><td>Forensic Accounting</td><td>Financial analysis, fraud, valuation</td><td>Commercial disputes, fraud, matrimonial, insolvency</td><td>ACA, CFE, CFA, CVA</td></tr>
<tr><td>Forensic Engineering &amp; Quantum</td><td>Construction, technical failure, quantum</td><td>Construction claims, product liability, TCC disputes</td><td>MRICS, FRICS, CEng, MCIOB</td></tr>
<tr><td>Digital Forensics</td><td>Electronic evidence, cybercrime, data</td><td>IP theft, cybercrime, e-discovery, data disputes</td><td>FBCS, CEng, EnCE, GCFE</td></tr>
<tr><td>Forensic Economics</td><td>Economic analysis, competition, markets</td><td>Competition law, regulatory, investment treaty</td><td>PhD Economics, CFA, regulatory experience</td></tr>
</tbody>
</table>`;

const COMBINATION_TABLE = `<table>
<thead>
<tr><th>Dispute Type</th><th>Forensic Disciplines Typically Needed</th></tr>
</thead>
<tbody>
<tr><td>Complex construction fraud</td><td>Forensic accounting + forensic engineering quantum + digital forensics</td></tr>
<tr><td>IP theft with financial loss</td><td>Digital forensics + forensic accounting</td></tr>
<tr><td>Competition damages claim</td><td>Forensic economics + forensic accounting</td></tr>
<tr><td>International investment treaty</td><td>Forensic economics + forensic accounting + sector specialist</td></tr>
<tr><td>Cybercrime with financial impact</td><td>Digital forensics + forensic accounting</td></tr>
<tr><td>M&amp;A dispute with data issues</td><td>Forensic accounting + digital forensics</td></tr>
</tbody>
</table>`;

export const forensicDisciplinesPillarSections: PillarSection[] = [
  {
    heading: "What Is a Forensic Expert Witness?",
    content:
      "A forensic expert witness is a qualified specialist who applies the methodology and standards of their discipline, whether accounting, engineering, computing, or economics, to the specific evidential requirements of legal proceedings. The word \"forensic\" derives from the Latin forensis (of the forum), meaning knowledge presented in a public, legal setting. All forensic expert witnesses in UK civil proceedings owe their primary duty to the court under CPR Part 35, not to the instructing party.\n\nUnlike a lay witness who can only testify about facts they personally observed, a forensic expert witness may express opinions within their area of expertise. These opinions must be based on sufficient data, reliable methodology, and the expert's professional judgment. The expert must distinguish clearly between facts and opinions in their report, and must not assume the role of advocate for the instructing party.\n\nForensic expert witnesses appear across the full range of UK legal proceedings: High Court commercial litigation, Technology and Construction Court (TCC) proceedings, Family Court financial remedy cases, Competition Appeal Tribunal (CAT) proceedings, regulatory enforcement actions, and international arbitration under ICC, LCIA, ICSID, and UNCITRAL rules. The procedural framework differs between forums, but the core requirement for independence and objectivity applies universally.\n\nDisputeForensic.com is the only UK portal covering all four core forensic disciplines under one roof, forensic accounting, forensic engineering and quantum, digital forensics, and forensic economics, enabling solicitors to instruct coordinated multi-discipline expert teams for complex disputes.",
  },
  {
    heading: "The Four Core Forensic Expert Witness Disciplines",
    content:
      "UK litigation draws on four distinct forensic expert witness disciplines, each with its own professional standards, credentials, and typical dispute contexts. Understanding the scope and boundaries of each discipline is essential for instructing the right expert and avoiding the common error of expecting one expert to cover multiple unrelated areas of expertise.\n\n" +
      COMPARISON_TABLE +
      "\n\nEach discipline is explored in detail below. For discipline-specific expert witness services, see our dedicated discipline pages at /disciplines/forensic-accounting, /disciplines/forensic-engineering-quantum, /disciplines/digital-forensics, and /disciplines/forensic-economics. For case-type guidance on which disciplines are typically needed, see /case-types.",
  },
  {
    heading: "1. Forensic Accounting",
    content:
      "Forensic accounting is the application of accounting, auditing, and financial investigation skills to legal disputes. A forensic accounting expert witness combines the rigour of financial investigation with the court admissibility requirements of expert witness procedure, producing independent evidence on financial losses, fraud, asset tracing, and business valuation.\n\nForensic accountants are needed in a wide range of disputes: commercial fraud and financial crime claims requiring asset tracing and loss quantification; shareholder disputes under s994 Companies Act 2006 requiring share valuation and financial investigation of director misconduct; professional negligence claims against accountants and auditors; matrimonial financial proceedings requiring business valuation and hidden income analysis under FPR Part 25; and insolvency matters involving preference analysis and wrongful trading.\n\nKey services provided by forensic accounting expert witnesses include: loss quantification using but-for counterfactual analysis; fraud investigation and asset tracing through complex corporate structures; business and share valuation in contentious contexts; financial reconstruction where records have been manipulated; and regulatory investigation support for FCA, SFO, and HMRC proceedings.\n\nThe core UK credentials are ACA/FCA (ICAEW chartered accountancy), often combined with CFE (Certified Fraud Examiner) for fraud-focused work, or CVA/CFA for valuation-heavy cases. ICAEW forensic accreditation and Fellow of the Expert Witness Institute (FEWI) are additional markers of specialist expertise recognised by UK courts. Prior court or tribunal testimony experience is essential.",
  },
  {
    heading: "2. Forensic Engineering & Quantum",
    content:
      "Forensic engineering and quantum expertise applies engineering, construction, and quantity surveying skills to dispute resolution. In construction disputes, three distinct but related expert disciplines are engaged: quantum experts who value the financial impact of claims; delay experts who analyse programme causation and extensions of time; and forensic engineers who address technical failure, defects, and design issues.\n\nForensic engineering and quantum experts work across all standard form contracts, JCT, NEC, and FIDIC, and in both domestic proceedings (TCC, adjudication) and international construction arbitration (ICC, LCIA, FIDIC-DAB). Key claim types include loss and expense, prolongation, disruption, variations, repricing, remeasurement, and interim and final account disputes.\n\nScott Schedules are the standard format for presenting quantum expert evidence in TCC proceedings. Experts exchange CPR Part 35 compliant reports, meet to narrow issues, produce joint statements, and may give concurrent evidence (hot-tubbing) at trial. Adjudication under the Housing Grants, Construction and Regeneration Act 1996 requires expert evidence within tight 28-day timetables.\n\nKey credentials include MRICS/FRICS (quantity surveying), CEng (chartered engineer), MCIOB/FCIOB (construction management), and FCIArb/MCIArb (arbitration). Formal expert witness training through the Expert Witness Institute or Academy of Experts is strongly recommended. Prior TCC and adjudication testimony experience is essential for major construction disputes.",
  },
  {
    heading: "3. Digital Forensics",
    content:
      "Digital forensics is the application of scientific investigation techniques to electronic data, computers, mobile devices, cloud storage, email servers, and network infrastructure, to establish facts relevant to legal proceedings. Digital forensics expert witnesses are increasingly central to UK civil litigation as disputes involving electronic evidence become more common.\n\nDigital forensics experts handle: data recovery and analysis from damaged or deleted storage; cybercrime investigations including ransomware and business email compromise; e-discovery and electronic disclosure under CPR Part 31; metadata analysis for document authenticity and provenance; mobile device forensics (iOS and Android); cloud forensics across SaaS platforms; and IP theft and company data disputes.\n\nIn civil proceedings, digital forensics experts prove or disprove allegations of data theft, IP misappropriation, and document authenticity. They assess the reliability of digital evidence under CPR Part 35 and advise on whether electronic disclosure processes were conducted correctly. Chain of custody integrity, a documented record of the seizure, transfer, analysis, and storage of evidence, is maintained throughout to ensure court admissibility.\n\nKey credentials include FBCS (Fellow of the British Computer Society), CEng (Chartered Engineer), EnCE (EnCase Certified Examiner), and GCFE (GIAC Certified Forensic Examiner). Digital forensics experts are frequently instructed alongside forensic accountants in cases where financial loss follows data breach or cybercrime.",
  },
  {
    heading: "4. Forensic Economics",
    content:
      "Forensic economics is the application of economic theory and econometric methodology to legal disputes. Forensic economist expert witnesses quantify economic losses, assess market impacts, and provide expert evidence in competition law proceedings, regulatory investigations, and international arbitration.\n\nIn competition law, forensic economists construct counterfactual models showing what prices would have been absent anticompetitive conduct and quantify the resulting overcharge or competitive harm. They address pass-on defences through pricing analysis and econometric modelling, a defence significantly shaped by the EU Damages Directive and UK Competition Appeal Tribunal (CAT) jurisprudence.\n\nIn international arbitration, forensic economists apply the Chorzów Factory standard for full reparation of injury, constructing DCF models and market-based valuations for investment treaty damages under ICSID and UNCITRAL rules. Investment treaty economics requires rigorous counterfactual analysis supported by econometric evidence and financial data verification.\n\nForensic economists are needed when loss quantification requires economic methodology beyond standard accounting analysis, in competition law damages claims, international investment treaty arbitration, and regulatory proceedings where market definition and competitive effects are in dispute. Key credentials include PhD Economics, CFA, Who's Who Legal Economist ranking, and CMA/FCA regulatory experience. Forensic economists frequently work alongside forensic accountants who verify economic assumptions against financial records.",
  },
  {
    heading: "When Multiple Forensic Disciplines Are Needed",
    content:
      "Complex disputes often require experts from more than one forensic discipline working together. Attempting to cover multiple disciplines with a single expert risks CPR Part 35 non-compliance and exclusion of evidence. The correct approach is to instruct separate experts in each relevant discipline with coordinated letters of instruction.\n\n" +
      COMBINATION_TABLE +
      "\n\nIn multi-discipline cases, the output of one expert often feeds into the analysis of another. The digital forensics expert establishes what data was stolen; the forensic accountant quantifies the financial loss. The delay expert establishes entitlement to EOT; the quantum expert values the prolongation costs. Clear sequencing and coordination of expert work is essential.\n\nDisputeForensic.com coordinates multi-discipline forensic teams across all four disciplines, ensuring consistent instruction, coordinated reporting, and efficient cost management. See our guide at /guides/multi-discipline-forensic-teams for detailed guidance on instructing multi-discipline teams.",
  },
  {
    heading: "CPR Part 35, Applies to All Forensic Disciplines",
    content:
      "All forensic expert witnesses in UK civil proceedings are governed by CPR Part 35, regardless of their discipline. The primary duty to the court, requirement for a statement of truth, and obligations around joint expert meetings and joint statements apply equally to forensic accountants, forensic engineers, digital forensics experts, and forensic economists.\n\nThe Ikarian Reefer [1993] 2 Lloyd's Rep 68 established the core expert witness duties, independence, objectivity, and the primacy of the duty to the court, which are now codified in CPR Part 35 and the accompanying Practice Direction. Experts must not assume the role of advocate and must distinguish between facts and opinions in their reports.\n\nKey CPR Part 35 requirements include: expert reports must contain a statement of the expert's qualifications, instructions, and assumptions; the expert must provide a statement of truth; the expert must comply with directions for joint expert meetings and joint statements; and the court may restrict expert evidence or appoint its own expert where appropriate.\n\nFailure to comply with CPR Part 35 can result in the expert's evidence being excluded, heavily discounted, or subject to adverse costs consequences. See /qualifications for full guidance on CPR Part 35 compliance across all forensic disciplines.",
  },
  {
    heading: "Hot-Tubbing (Concurrent Evidence)",
    content:
      "Hot-tubbing, formally known as concurrent evidence, is a procedure increasingly used in technical cases where experts from both sides give evidence simultaneously before the judge or tribunal. The judge can directly compare expert opinions and probe disagreements in real time, rather than hearing each expert separately through examination-in-chief and cross-examination.\n\nHot-tubbing is particularly common in digital forensics cases where technical evidence is highly specialised, in complex construction disputes where multiple disciplines are engaged, and in CAT competition proceedings involving economic experts. It is also standard practice in international arbitration under ICC and LCIA rules.\n\nPreparation for hot-tubbing requires experts to have participated in joint meetings, produced a joint statement identifying agreed and disputed issues, and be ready to explain their methodology and opinions clearly under direct questioning from the tribunal. Forensic experts should be prepared for concurrent evidence in any complex UK dispute.\n\nSee our dedicated guide at /guides/hot-tubbing-concurrent-evidence-guide for detailed guidance on preparing forensic experts for concurrent evidence sessions in TCC and arbitration contexts.",
  },
];

export function getForensicDisciplinesPillarSections(): PillarSection[] {
  return forensicDisciplinesPillarSections;
}

export function getForensicDisciplinesPillarWordCount(): number {
  return forensicDisciplinesPillarSections
    .map((s) => s.content.replace(/<[^>]+>/g, " "))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}
