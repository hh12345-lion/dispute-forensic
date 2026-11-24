import type { ContentPage } from "./types";

export const CASE_TYPE_SLUGS = [
  "commercial-fraud-financial-crime",
  "construction-engineering-disputes",
  "cybercrime-data-disputes",
  "competition-law-cartel-damages",
  "ip-theft-misappropriation",
  "shareholder-commercial-disputes",
  "professional-negligence",
  "international-arbitration",
  "matrimonial-financial-disputes",
  "regulatory-investigations",
] as const;

export type CaseTypeSlug = (typeof CASE_TYPE_SLUGS)[number];

const caseTypes: ContentPage[] = [
  {
    slug: "commercial-fraud-financial-crime",
    title: "Commercial Fraud & Financial Crime",
    h1: "Commercial Fraud & Financial Crime Forensic Expert Witness UK",
    // Previously "Commercial Fraud & Financial Crime Forensic Expert Witness UK" (too long; it was cut mid-phrase in results).
    metaTitle: "Commercial Fraud & Financial Crime Expert Witness",
    metaDescription:
      "Forensic expert witnesses for commercial fraud and financial crime in the UK, asset tracing, freezing injunctions, POCA proceedings, and civil fraud claims. Forensic accounting and digital forensics.",
    paragraphs: [
      "Commercial fraud and financial crime claims require forensic expert evidence to trace fund flows, quantify losses, and support interim relief applications. Civil fraud claims in the High Court and Commercial Court typically involve allegations of dishonest misrepresentation, breach of fiduciary duty, or conspiracy to defraud, supported by forensic accounting analysis of financial records and digital forensics examination of electronic evidence.",
      "Forensic accountants play a central role in commercial fraud claims, tracing assets through complex corporate structures and offshore jurisdictions, quantifying the loss caused by the fraud, and reconstructing financial records where books and records have been manipulated. Their evidence supports freezing injunction applications by identifying the assets to be frozen and establishing the quantum of the claim, demonstrating a good arguable case and a real risk of dissipation.",
      "Digital forensics experts complement forensic accounting in modern fraud cases by recovering deleted communications, analysing device and email data to establish patterns of concealment, and authenticating electronic documents. In complex cases involving multiple jurisdictions, forensic economists may also be engaged to quantify market or investment losses. A combined multi-discipline approach ensures both the factual mechanism of the fraud and its financial impact are established with court-admissible evidence.",
    ],
    faqs: [
      {
        question:
          "Which forensic disciplines are needed in a commercial fraud claim?",
        answer:
          "Commercial fraud claims typically require forensic accountants (to trace fund flows, quantify losses, and analyse financial records) and often also digital forensics experts (to recover deleted communications, analyse device data, and authenticate electronic documents). In complex cases involving multiple jurisdictions, forensic economists may also be needed to quantify market or investment losses.",
      },
      {
        question:
          "What forensic evidence supports a freezing injunction application?",
        answer:
          "Freezing injunction applications are supported by forensic accounting evidence identifying the assets to be frozen and establishing the quantum of the claim, demonstrating there is a good arguable case and a real risk of dissipation. Digital forensics evidence may also be used to demonstrate the defendant's pattern of concealment or transfer of assets.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
      { href: "/services#fraud-investigation-asset-tracing", label: "Fraud Investigation & Asset Tracing" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "construction-engineering-disputes",
    title: "Construction & Engineering Disputes",
    h1: "Construction & Engineering Dispute Forensic Expert Witness UK",
    // Previously "Construction & Engineering Dispute Forensic Expert Witness UK" (too long; it was cut mid-phrase in results).
    metaTitle: "Construction & Engineering Dispute Expert Witness",
    metaDescription:
      "Forensic quantum, delay, and engineering expert witnesses for UK construction disputes, TCC proceedings, adjudication, and international construction arbitration under JCT, NEC, and FIDIC.",
    paragraphs: [
      "Construction and engineering disputes are among the most expert-intensive areas of UK litigation. Major construction claims require forensic quantum experts to value loss and expense, variations, prolongation costs, and final account items; delay experts to analyse extensions of time and programme causation; and forensic engineers to address technical failure, defects, and design issues. In disputes involving financial misconduct, forensic accountants are also engaged.",
      "In Technology and Construction Court (TCC) proceedings, forensic quantum experts specialise in disruption and prolongation claims, variations, repricing and price adjustments, remeasurement, interim and final account disputes, and many other types of loss, cost or price-based claims. Experts exchange CPR Part 35 compliant reports, meet to narrow issues, produce joint statements, and may give concurrent evidence (hot-tubbing) at trial.",
      "Construction disputes also arise in adjudication, a fast-track statutory process under the Housing Grants, Construction and Regeneration Act 1996, and in international construction arbitration under ICC, LCIA, and FIDIC rules. The same forensic disciplines apply, though procedural requirements differ. Experienced testifying experts who understand both domestic and international construction dispute procedures are essential for major projects.",
    ],
    faqs: [
      {
        question:
          "What forensic experts are typically needed in a major construction dispute?",
        answer:
          "Major construction disputes typically require: a quantum expert (MRICS/FRICS) to value loss and expense, variations, and final account items; a delay expert (construction programmer) to analyse extensions of time; and sometimes a forensic engineer (CEng) for technical failure or defects issues. In disputes involving financial misconduct, a forensic accountant is also engaged.",
      },
      {
        question:
          "How does forensic expert evidence work in TCC proceedings?",
        answer:
          "In TCC proceedings, forensic quantum experts specialise in disruption and prolongation claims, variations, repricing and price adjustments, remeasurement, interim and final account disputes, and many other types of loss, cost or price-based claims. Experts exchange reports, meet to narrow issues, produce a joint statement, and may give concurrent evidence (hot-tubbing) at trial.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/forensic-engineering-quantum", label: "Forensic Engineering & Quantum" },
      { href: "/services#construction-quantum-delay", label: "Construction Quantum & Delay" },
      { href: "/sectors/construction-infrastructure", label: "Construction & Infrastructure Sector" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "cybercrime-data-disputes",
    title: "Cybercrime & Data Disputes",
    h1: "Cybercrime & Data Dispute Forensic Expert Witness UK",
    metaTitle: "Cybercrime & Data Dispute Forensic Expert Witness UK",
    metaDescription:
      "Digital forensics and forensic accounting expert witnesses for cybercrime, data theft, ransomware, e-discovery, and GDPR data breach litigation in the UK.",
    paragraphs: [
      "Cybercrime and data disputes increasingly require forensic expert evidence to establish what happened, who was responsible, and what financial loss resulted. Civil recovery actions following cybercrime, employee data theft, ransomware incidents, and business interruption claims all turn on digital forensic analysis of electronic evidence combined with financial loss quantification.",
      "Digital forensics experts are crucial in cases involving cybercrime, fraud, online harassment, IP theft, and disputes over electronic communication. In data theft disputes, they recover and analyse digital evidence to establish what data was taken, when and how it was accessed, and by whom, producing court-admissible findings under CPR Part 35 with full chain of custody documentation.",
      "Where cybercrime or data theft has caused financial loss, both digital forensics and forensic accounting disciplines are typically needed. The digital forensics expert establishes the facts of the breach; the forensic accountant quantifies the financial loss caused by the breach, lost revenue, remediation costs, and loss of business. Both produce separate CPR Part 35 reports addressing their respective expertise. E-discovery disputes under CPR Part 31 also require digital forensics input to assess whether disclosure was conducted correctly.",
    ],
    faqs: [
      {
        question:
          "What does a digital forensics expert witness do in a data theft dispute?",
        answer:
          "Digital forensics experts are crucial in cases involving cybercrime, fraud, online harassment, IP theft, and disputes over electronic communication. In data theft disputes, they recover and analyse digital evidence to establish: what data was taken; when and how it was accessed; and by whom, producing court-admissible findings under CPR Part 35.",
      },
      {
        question:
          "When is both a digital forensics expert and forensic accountant needed in a cybercrime case?",
        answer:
          "Where cybercrime or data theft has caused financial loss, both disciplines are typically needed. The digital forensics expert establishes the facts of the breach (what happened, who did it, what was taken); the forensic accountant quantifies the financial loss caused by the breach (lost revenue, remediation costs, loss of business). Both produce separate CPR Part 35 reports addressing their respective expertise.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/services#digital-forensics-ediscovery", label: "Digital Forensics & E-Discovery" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "competition-law-cartel-damages",
    title: "Competition Law & Cartel Damages",
    h1: "Competition Law & Cartel Damages Forensic Expert Witness UK",
    metaTitle:
      "Competition Law & Cartel Damages Forensic Expert Witness UK",
    metaDescription:
      "Forensic economics and accounting expert witnesses for UK competition law damages claims, cartel overcharge, pass-on defence, abuse of dominance, and CAT proceedings.",
    paragraphs: [
      "Competition law damages claims require forensic economics experts who can construct counterfactual models showing what prices would have been absent the anticompetitive conduct and quantify the resulting overcharge or competitive harm. Following the implementation of the EU Damages Directive into UK law, follow-on damages claims before the Competition Appeal Tribunal (CAT) have increased significantly, requiring rigorous economic expert evidence.",
      "Forensic economists address cartel overcharge calculations using econometric techniques including difference-in-differences analysis, yardstick comparisons, and simulation models. They also address the pass-on defence, where defendants argue the claimant passed the overcharge on to its own customers, through pricing analysis and econometric modelling. The pass-on defence has been significantly shaped by CAT jurisprudence and requires specialist economic analysis.",
      "Forensic accountants complement forensic economists in competition damages claims by analysing financial records to verify the economic expert's assumptions against actual data, reconstructing pricing and cost structures, and quantifying the financial impact of the overcharge at the entity level. Both disciplines produce CPR Part 35 compliant reports, attend joint meetings, and may give concurrent evidence in CAT proceedings.",
    ],
    faqs: [
      {
        question:
          "What forensic expert evidence is needed in a competition damages claim?",
        answer:
          "Competition damages claims require forensic economics experts who can construct counterfactual models showing what prices would have been absent the anticompetitive conduct, and quantify the resulting overcharge or loss. Forensic accountants may also be engaged to analyse financial records and verify the economic expert's assumptions against actual data.",
      },
      {
        question: "What is the pass-on defence in cartel damages cases?",
        answer:
          "The pass-on defence allows defendants to argue that the claimant passed the overcharge on to its own customers, reducing or eliminating its own loss. Forensic economists address this through pricing analysis and econometric modelling. The defence has been significantly shaped by the EU Damages Directive and UK Competition Appeal Tribunal (CAT) jurisprudence.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
      { href: "/services#economic-damages-analysis", label: "Economic Damages Analysis" },
      { href: "/guides/forensic-economics-competition-guide", label: "Forensic Economics & Competition Guide" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "ip-theft-misappropriation",
    title: "IP Theft & Misappropriation",
    h1: "IP Theft & Misappropriation Forensic Expert Witness UK",
    metaTitle: "IP Theft & Misappropriation Forensic Expert Witness UK",
    metaDescription:
      "Forensic expert witnesses for IP theft and trade secret misappropriation in the UK, digital forensics to establish theft, forensic accounting to quantify losses, and Norwich Pharmacal orders.",
    paragraphs: [
      "IP theft and trade secret misappropriation claims require forensic evidence from two disciplines: digital forensics to establish that the theft occurred, and forensic accounting to quantify the financial loss. Trade secret cases, employee IP misappropriation, and breach of confidence claims all turn on electronic evidence of what was taken and financial analysis of the resulting harm.",
      "Digital forensics experts establish the factual mechanism of IP theft by analysing device data, email servers, and cloud storage for evidence of misappropriation. Methods include USB device activity analysis (identifying when large volumes of data were copied), email forensics (identifying forwarding to personal accounts), cloud storage analysis (identifying unauthorised uploads), and metadata analysis (establishing when documents were accessed, copied, or modified). Findings are presented with chain of custody integrity for court admissibility.",
      "Forensic accountants quantify the financial loss from IP theft, whether as lost profits, reasonable royalty, or account of profits. Norwich Pharmacal orders may be used to identify wrongdoers or trace assets, with forensic experts assisting in analysing the information obtained. Both digital forensics and forensic accounting experts produce separate CPR Part 35 compliant reports addressing their respective areas of expertise.",
    ],
    faqs: [
      {
        question: "How do forensic experts help in an IP theft claim?",
        answer:
          "IP theft claims typically require two forensic disciplines: digital forensics experts (to establish that the theft occurred, by analysing device data, email servers, and cloud storage for evidence of misappropriation); and forensic accounting experts (to quantify the financial loss, whether as lost profits, reasonable royalty, or account of profits). Both produce CPR Part 35 compliant reports.",
      },
      {
        question:
          "What digital forensic methods are used to prove trade secret theft?",
        answer:
          "Digital forensic methods for trade secret cases include: analysis of USB device activity (identifying when large volumes of data were copied); email forensics (identifying forwarding to personal accounts); cloud storage analysis (identifying unauthorised uploads); and metadata analysis (establishing when documents were accessed, copied, or modified). Forensic experts present these findings with chain of custody integrity for court admissibility.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/sectors/technology-software-digital", label: "Technology & Software Sector" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "shareholder-commercial-disputes",
    title: "Shareholder & Commercial Disputes",
    h1: "Shareholder & Commercial Dispute Forensic Expert Witness UK",
    metaTitle:
      "Shareholder & Commercial Dispute Forensic Expert Witness UK",
    metaDescription:
      "Forensic accounting and digital forensics expert witnesses for UK shareholder disputes, s994 petitions, share valuation, and director misconduct investigations.",
    paragraphs: [
      "Shareholder disputes under s994 Companies Act 2006 and commercial disputes between business partners frequently require forensic accounting evidence for share valuation and financial investigation of alleged misconduct. Unfair prejudice petitions, just and equitable winding-up applications, and partnership dissolution disputes all turn on forensic analysis of the company's financial records.",
      "Forensic accountants in shareholder disputes provide evidence on share valuation (fair value under s994), financial investigation of alleged misconduct (dividend stripping, related party transactions, hidden assets), and quantification of loss caused by director wrongdoing. They analyse bank statements, board minutes, management accounts, expense claims, and tax returns to identify transactions that may constitute unfair prejudice.",
      "Where shareholder disputes involve concealed communications or document manipulation, digital forensics experts may also be instructed to recover and authenticate evidence from devices, email systems, and cloud storage. A combined forensic accounting and digital forensics approach ensures both the financial misconduct and any concealed evidence of wrongdoing are established for the court.",
    ],
    faqs: [
      {
        question: "What forensic evidence is needed in a shareholder dispute?",
        answer:
          "Shareholder disputes typically require forensic accounting evidence, for share valuation (fair value under s994 Companies Act 2006) and financial investigation of alleged misconduct (dividend stripping, related party transactions, hidden assets). Where disputes involve concealed communications or document manipulation, digital forensics experts may also be instructed to recover and authenticate evidence.",
      },
      {
        question:
          "How does a forensic accountant investigate director misconduct in a shareholder dispute?",
        answer:
          "The forensic accountant analyses the company's financial records, bank statements, board minutes, management accounts, expense claims, and tax returns, to identify transactions that may constitute unfair prejudice: excessive remuneration, unauthorised benefits, related-party transactions at non-arm's-length values, or diversion of business opportunity.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/services#business-share-valuation", label: "Business & Share Valuation" },
      { href: "/services#forensic-loss-quantification", label: "Forensic Loss Quantification" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "professional-negligence",
    title: "Professional Negligence",
    h1: "Professional Negligence Forensic Expert Witness UK",
    metaTitle: "Professional Negligence Forensic Expert Witness UK",
    metaDescription:
      "Forensic expert witnesses for professional negligence claims in the UK, accountant, auditor, IT, software, and engineering negligence. Standard of care and loss quantification.",
    paragraphs: [
      "Professional negligence claims require forensic expert evidence to establish both the standard of care applicable to the profession and the resulting financial loss. The forensic discipline engaged depends on the profession alleged to have been negligent: forensic accountants for accountant, auditor, or financial adviser negligence; digital forensics experts for IT consultant or software developer negligence; and forensic engineers for structural, civil, or technical engineering negligence.",
      "In all professional negligence cases, the forensic expert must opine on the standard of care, what a reasonably competent professional in that field would have done, and the but-for counterfactual loss caused by the breach. The SAAMCo principle (South Australia Asset Management Corp v York Montague Ltd) limits damages to losses within the scope of the professional's duty, and forensic experts must address this limitation when quantifying loss.",
      "Expert reports that fail to address SAAMCo are vulnerable to challenge and may result in significant reductions in recoverable damages. Forensic experts must distinguish between losses caused by the negligence and losses that would have occurred regardless of the breach. This requires careful but-for analysis and, in complex cases, scenario modelling to isolate the impact of the negligent conduct.",
    ],
    faqs: [
      {
        question:
          "Which forensic discipline is needed for professional negligence claims?",
        answer:
          "The forensic discipline depends on the profession alleged to have been negligent: forensic accountants address accountant, auditor, or financial adviser negligence; digital forensics experts address IT consultant or software developer negligence; forensic engineers address structural, civil, or technical engineering negligence. In all cases, the expert must opine on both the standard of care and the resulting loss.",
      },
      {
        question:
          "What is the SAAMCo principle and how does it affect forensic expert evidence?",
        answer:
          "The SAAMCo principle limits damages in professional negligence cases to losses within the scope of the professional's duty. Forensic experts must address this limitation when quantifying loss, distinguishing between losses caused by the negligence and losses that would have occurred regardless. Expert reports that fail to address SAAMCo are vulnerable to challenge.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
      { href: "/sectors/professional-services", label: "Professional Services Sector" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "international-arbitration",
    title: "International Arbitration",
    h1: "International Arbitration Forensic Expert Witness UK",
    metaTitle: "International Arbitration Forensic Expert Witness UK",
    metaDescription:
      "Forensic expert witnesses for international arbitration in the UK, ICC, LCIA, ICSID, UNCITRAL. Forensic accounting, economics, engineering, and digital forensics for cross-border disputes.",
    paragraphs: [
      "International arbitration is one of the primary forums for complex cross-border disputes requiring forensic expert evidence. Forensic expert witnesses in international arbitration are familiar with all legal and arbitration procedures and venues, with extensive testifying experience under ICC, ICSID, LCIA, ICDR, SCC, AAA, HKIAC, and SIAC rules. They are involved at every stage from pre-action advice to oral and written expert testimony.",
      "The IBA Rules on the Taking of Evidence in International Arbitration (Articles 5 and 6) govern party-appointed and tribunal-appointed expert procedures in most international arbitrations. Forensic experts must comply with these rules alongside their professional standards, producing reports that address qualifications, instructions, methodology, and a statement of independence. Hot-tubbing and concurrent expert sessions are commonly used in international arbitration.",
      "International arbitration most commonly involves forensic accountants for quantum of damages, lost profits, and financial analysis; forensic economists for investment treaty damages, competition-related disputes, and complex market analysis; forensic engineering quantum experts and delay analysts in construction arbitration; and digital forensics experts where electronic evidence is central. Multi-discipline forensic teams are standard in major international arbitration, with the Chorzów Factory standard governing investment treaty quantum.",
    ],
    faqs: [
      {
        question:
          "How do forensic expert witnesses work in international arbitration?",
        answer:
          "Forensic expert witnesses in international arbitration are familiar with all legal and arbitration procedures and venues, with extensive testifying experience under ICC, ICSID, LCIA, ICDR, SCC, AAA, HKIAC, and SIAC rules. They get involved at every stage from pre-action advice to oral and written expert testimony. The IBA Rules on Evidence (Articles 5 and 6) govern party expert and tribunal-appointed expert procedures in most international arbitrations.",
      },
      {
        question:
          "What forensic disciplines are most common in international arbitration?",
        answer:
          "International arbitration most commonly involves forensic accountants (for quantum of damages, lost profits, and financial analysis) and forensic economists (for investment treaty damages, competition-related disputes, and complex market analysis). In construction arbitration, forensic engineering quantum experts and delay analysts are also regularly engaged. Digital forensics experts appear where electronic evidence is central to the dispute.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/services#expert-determination-adr", label: "Expert Determination & ADR" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "matrimonial-financial-disputes",
    title: "Matrimonial Financial Disputes",
    h1: "Matrimonial Financial Dispute Forensic Expert Witness UK",
    metaTitle: "Matrimonial Financial Dispute Forensic Expert Witness UK",
    metaDescription:
      "Forensic accounting and digital forensics expert witnesses for UK matrimonial financial disputes, business valuation, hidden income, concealed assets, and FPR Part 25 compliance.",
    paragraphs: [
      "Matrimonial financial disputes under the Family Procedure Rules (FPR Part 25) frequently require forensic expert evidence on business valuation, hidden income, and asset disclosure. High-value matrimonial cases involving business-owning spouses, complex asset structures, and suspected non-disclosure are particularly expert-intensive.",
      "Forensic accountants in matrimonial cases provide FPR Part 25 compliant expert reports on business valuation (what the business owned by a spouse is worth), hidden income analysis (what earnings are truly available for maintenance), and lifestyle analysis (establishing the standard of living during the marriage). They investigate related-party transactions, unexplained wealth, and discrepancies between disclosed and actual financial positions.",
      "Digital forensics is increasingly used in high-value matrimonial disputes where one party is suspected of concealing assets through digital means, cryptocurrency wallets, offshore accounts managed online, or financial records stored on devices or cloud services. Digital forensics experts recover and analyse this evidence under FPR Part 25 compliant procedures, complementing the forensic accountant's financial analysis.",
    ],
    faqs: [
      {
        question: "When is digital forensics needed in divorce proceedings?",
        answer:
          "Digital forensics is increasingly used in high-value matrimonial disputes where one party is suspected of concealing assets through digital means, cryptocurrency wallets, offshore accounts managed online, or financial records stored on devices or cloud services. Digital forensics experts recover and analyse this evidence under FPR Part 25 compliant procedures.",
      },
      {
        question:
          "What forensic accounting evidence is needed in matrimonial disputes?",
        answer:
          "Forensic accountants in matrimonial cases provide FPR Part 25 compliant expert reports on: business valuation (what the business owned by a spouse is worth); hidden income analysis (what earnings are truly available for maintenance); and lifestyle analysis (establishing the standard of living during the marriage).",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
      { href: "/services#business-share-valuation", label: "Business & Share Valuation" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "regulatory-investigations",
    title: "Regulatory Investigations",
    h1: "Regulatory Investigation Forensic Expert Witness UK",
    metaTitle: "Regulatory Investigation Forensic Expert Witness UK",
    metaDescription:
      "Forensic expert witnesses for UK regulatory investigations, FCA, CMA, SFO, and HMRC proceedings. Forensic accounting and economics for regulatory compliance and enforcement.",
    paragraphs: [
      "Regulatory investigations by the FCA, CMA, SFO, and HMRC frequently require forensic expert evidence to establish facts relevant to alleged regulatory breaches. Forensic accountants analyse financial records to identify market manipulation, insider trading, mis-selling, capital adequacy failures, and fraud. Forensic economists provide evidence on market impact and competitive effects in CMA competition investigations.",
      "In FCA regulatory proceedings, forensic accountants analyse financial records to establish facts relevant to alleged regulatory breaches, market manipulation, insider trading, mis-selling, or capital adequacy failures. Forensic economists may also provide evidence on market impact. Forensic experts work with both the regulated firm and the regulator depending on instruction, and may subsequently give evidence in enforcement proceedings.",
      "SFO investigations (Serious Fraud Office) typically require forensic accounting evidence to trace proceeds of fraud, quantify losses, and reconstruct financial records. Digital forensics experts assist with large-scale e-discovery and the analysis of electronic evidence across complex multi-party datasets. Expert witnesses may subsequently give evidence in Crown Court proceedings or civil recovery actions under the Proceeds of Crime Act.",
    ],
    faqs: [
      {
        question:
          "How do forensic experts support FCA regulatory proceedings?",
        answer:
          "In FCA regulatory proceedings, forensic accountants analyse financial records to establish facts relevant to alleged regulatory breaches, market manipulation, insider trading, mis-selling, or capital adequacy failures. Forensic economists may also provide evidence on market impact. Forensic experts work with both the regulated firm and the regulator depending on instruction.",
      },
      {
        question: "What forensic evidence is needed in SFO investigations?",
        answer:
          "SFO investigations (Serious Fraud Office) typically require forensic accounting evidence to trace proceeds of fraud, quantify losses, and reconstruct financial records. Digital forensics experts assist with large-scale e-discovery and the analysis of electronic evidence across complex multi-party datasets. Expert witnesses may subsequently give evidence in Crown Court or civil recovery proceedings.",
      },
    ],
    relatedLinks: [
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
      { href: "/services#regulatory-investigation-support", label: "Regulatory & Investigation Support" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
];

export function getCaseType(slug: string): ContentPage | undefined {
  return caseTypes.find((c) => c.slug === slug);
}

export function getAllCaseTypes(): ContentPage[] {
  return caseTypes;
}

export function getCaseTypeSlugs(): string[] {
  return [...CASE_TYPE_SLUGS];
}
