import type { GuidePage } from "./types";

export const GUIDE_SLUGS = [
  "forensic-accounting-disputes-guide",
  "construction-quantum-forensic-guide",
  "digital-forensics-evidence-guide",
  "forensic-economics-competition-guide",
  "hot-tubbing-concurrent-evidence-guide",
  "multi-discipline-forensic-teams",
] as const;

export type GuideSlug = (typeof GUIDE_SLUGS)[number];

const guides: GuidePage[] = [
  {
    slug: "forensic-accounting-disputes-guide",
    title: "Forensic Accounting in Disputes",
    h1: "Forensic Accounting in Disputes: A Complete Guide for Solicitors",
    metaTitle:
      "Forensic Accounting in Disputes: A Complete Guide for Solicitors",
    metaDescription:
      "In-depth guide for UK solicitors on instructing forensic accounting expert witnesses, loss quantification, fraud investigation, credentials, CPR Part 35, and when to instruct.",
    aboutServiceId: "forensic-loss-quantification",
    paragraphs: [
      "Forensic accounting expert witnesses are among the most frequently instructed experts in UK commercial litigation. This guide explains what forensic accountants do in disputes, the key services they provide, the credentials to look for, and how to instruct them effectively under CPR Part 35.",
      "Whether your case involves commercial fraud, shareholder disputes, professional negligence, or matrimonial financial proceedings, understanding the scope and limitations of forensic accounting expertise will help you instruct the right expert and frame your case effectively.",
    ],
    sections: [
      {
        heading: "What Forensic Accountants Do in Disputes",
        content:
          "Forensic accountants apply accounting, auditing, and financial investigation skills to legal disputes. Unlike auditors who provide assurance on financial statements, forensic accountants investigate specific allegations of financial misconduct, quantify losses, and provide expert opinions for courts and tribunals.\n\nTheir core functions in litigation include: quantifying financial losses using but-for counterfactual analysis; investigating fraud and tracing misappropriated assets; valuing businesses in contentious contexts; analysing financial records for evidence of director misconduct; and reconstructing financial records where books have been manipulated.\n\nForensic accountants produce CPR Part 35 compliant expert reports that must include their qualifications, instructions, methodology, assumptions, and opinions. Their primary duty is to the court, not the instructing party.",
      },
      {
        heading: "Key Forensic Accounting Services",
        content:
          "Loss quantification is the most common forensic accounting instruction, determining the financial impact of breach of contract, professional negligence, fraud, or other wrongful conduct using but-for analysis.\n\nFraud investigation and asset tracing involves following fund flows through bank accounts and corporate structures to identify misappropriated assets and support freezing injunction applications.\n\nBusiness and share valuation provides independent opinions on business value for shareholder disputes (s994 Companies Act), matrimonial proceedings (FPR Part 25), and M&A disputes.\n\nInsolvency and preference analysis examines transactions prior to insolvency for evidence of preferences, transactions at undervalue, or wrongful trading.\n\nMatrimonial financial analysis covers business valuation, hidden income analysis, and lifestyle analysis for Family Court proceedings.",
      },
      {
        heading: "Credentials and Qualifications",
        content:
          "The core UK credential for forensic accounting expert witnesses is ACA or FCA (ICAEW chartered accountancy). For fraud-focused work, CFE (Certified Fraud Examiner) is the standard additional qualification. For valuation-heavy cases, CVA (Chartered Valuation Analyst) or CFA (Chartered Financial Analyst) are relevant.\n\nICAEW forensic accreditation demonstrates specialist forensic competence recognised by UK courts. Fellow of the Expert Witness Institute (FEWI) indicates formal expert witness training and experience.\n\nWhen instructing, verify: active professional practice; prior court or tribunal testimony experience; professional indemnity insurance; and sector experience relevant to the case.",
      },
      {
        heading: "CPR Part 35 Compliance",
        content:
          "All forensic accounting expert reports must comply with CPR Part 35 and Practice Direction 35. Key requirements include: a statement of the expert's qualifications and experience; the instructions received; the documents relied upon; the methodology applied; the expert's opinions; and a statement of truth signed by the expert.\n\nThe expert's primary duty is to the court. They must not assume the role of advocate and must distinguish between facts and opinions. Experts must comply with directions for joint expert meetings and joint statements.\n\nFailure to comply with CPR Part 35 can result in the expert's evidence being excluded or heavily discounted. Ensure your letter of instruction is clear and that the expert understands their overriding duty to the court.",
      },
      {
        heading: "When to Instruct a Forensic Accountant",
        content:
          "Instruct a forensic accountant as early as practicable, ideally at the pre-action stage. Early instruction allows the expert to advise on document preservation, shape financial disclosure, and provide quantum analysis that informs settlement strategy.\n\nKey trigger points: when quantum of loss is in dispute; when fraud or financial misconduct is alleged; when business valuation is required; when asset tracing is needed for freezing injunctions; and when financial records require reconstruction or analysis.\n\nIn multi-discipline cases (fraud with digital evidence, IP theft with financial loss), instruct the forensic accountant alongside digital forensics experts, with coordinated letters of instruction.",
      },
    ],
    faqs: [],
    relatedLinks: [
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting Discipline" },
      { href: "/services#forensic-loss-quantification", label: "Forensic Loss Quantification" },
      { href: "/qualifications", label: "Expert Qualifications" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "construction-quantum-forensic-guide",
    title: "Construction Quantum Forensic Experts",
    h1: "Construction Quantum Forensic Experts: A Solicitor's Guide",
    metaTitle:
      "Construction Quantum Forensic Experts: A Solicitor's Guide",
    metaDescription:
      "Guide for UK solicitors on instructing construction quantum and delay forensic experts, JCT, NEC, FIDIC, Scott Schedules, TCC practice, and adjudication evidence.",
    aboutServiceId: "construction-quantum-delay",
    paragraphs: [
      "Construction disputes are expert-intensive by nature. This guide explains the distinct roles of quantum experts, delay experts, and forensic engineers in construction claims, the standard form contract context, and best practice for instructing forensic experts in TCC proceedings and adjudication.",
      "Understanding the difference between quantum and delay expertise, and when each is needed, is essential for framing construction claims and instructing the right experts from the outset.",
    ],
    sections: [
      {
        heading: "Quantum vs Delay vs Forensic Engineering",
        content:
          "Construction disputes involve three distinct but related expert disciplines. Quantum experts (typically MRICS or FRICS chartered quantity surveyors) value the financial impact of claims, loss and expense, variations, prolongation costs, disruption, and final account disputes.\n\nDelay experts (construction programmers) analyse the project programme to determine causation and entitlement to extensions of time. They use methodologies including Time Impact Analysis (TIA), windows analysis, and as-planned vs as-built comparison.\n\nForensic engineers (CEng) address technical failure, defects, design issues, and causation of physical damage or non-performance. Complex construction disputes often require all three disciplines working together to present a complete picture of entitlement and quantum.",
      },
      {
        heading: "Standard Form Contracts: JCT, NEC, and FIDIC",
        content:
          "Forensic quantum experts must understand the specific contractual framework governing the dispute. JCT contracts (Design and Build, Standard Building Contract) contain detailed provisions on variations, loss and expense, and extensions of time that directly affect quantum analysis.\n\nNEC contracts (NEC3, NEC4) use a different mechanism, compensation events rather than variations, requiring quantum experts familiar with NEC terminology and assessment procedures.\n\nFIDIC contracts (Red, Yellow, Silver Books) govern most international construction projects and contain distinct provisions on claims, variations, and delay damages. Experts appearing in international construction arbitration must be familiar with FIDIC claim procedures and the role of the Dispute Adjudication Board (DAB).",
      },
      {
        heading: "Loss and Expense, Prolongation, and Disruption",
        content:
          "Loss and expense claims compensate the contractor for costs incurred due to employer-caused delays or disruptions. Quantum experts quantify these costs by analysing site records, cost reports, and contemporaneous documentation.\n\nProlongation costs are the extended site overheads, preliminaries, and management costs incurred when the contractor remains on site beyond the original completion date. These are distinct from direct delay costs and require careful analysis of the contractor's cost records.\n\nDisruption claims address loss of productivity caused by disruptive events, stacked trades, restricted access, or design changes, rather than overall project delay. The measured mile and other analytical techniques are used to quantify disruption losses.",
      },
      {
        heading: "Scott Schedules and TCC Practice",
        content:
          "Scott Schedules are the standard format for presenting quantum and delay expert evidence in Technology and Construction Court proceedings. Each row sets out an individual claim item, the parties' respective positions, and the expert's opinion on entitlement and quantum.\n\nTCC practice requires experts to exchange reports, meet to narrow issues, and produce a joint statement identifying agreed and disputed matters. The TCC Guide emphasises the importance of early expert engagement and the use of concurrent evidence (hot-tubbing) in appropriate cases.\n\nQuantum experts appearing in the TCC should have prior testimony experience and be familiar with the TCC's case management approach, including the use of Scott Schedules and the requirements for expert evidence under CPR Part 35.",
      },
      {
        heading: "Adjudication and International Arbitration",
        content:
          "Adjudication under the Housing Grants, Construction and Regeneration Act 1996 is a fast-track 28-day process requiring expert evidence to be prepared quickly. Quantum and delay experts must be able to produce focused reports within tight adjudication timetables.\n\nInternational construction arbitration under ICC, LCIA, and FIDIC rules follows the IBA Rules on Evidence. Experts must produce reports addressing qualifications, instructions, methodology, and independence. Hot-tubbing is commonly used in major construction arbitration.\n\nWhen instructing for adjudication or arbitration, ensure the expert has experience in the relevant forum and can meet the required timetable without compromising the quality of analysis.",
      },
    ],
    faqs: [],
    relatedLinks: [
      { href: "/disciplines/forensic-engineering-quantum", label: "Forensic Engineering & Quantum" },
      { href: "/case-types/construction-engineering-disputes", label: "Construction Disputes" },
      { href: "/services#construction-quantum-delay", label: "Construction Quantum & Delay" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "digital-forensics-evidence-guide",
    title: "Digital Forensics Expert Evidence",
    h1: "Digital Forensics Expert Evidence in Civil Disputes: UK Guide",
    metaTitle:
      "Digital Forensics Expert Evidence in Civil Disputes: UK Guide",
    metaDescription:
      "Guide for UK solicitors on digital forensics expert evidence, e-discovery under CPR Part 31, data theft, cybercrime civil recovery, credentials, and CPR Part 35 compliance.",
    aboutServiceId: "digital-forensics-ediscovery",
    paragraphs: [
      "Digital forensics expert evidence is increasingly central to UK civil litigation, from IP theft and data misappropriation to cybercrime civil recovery and e-discovery disputes. This guide explains what digital forensics covers, the procedural framework, and how to instruct digital forensics experts effectively.",
      "Early instruction is critical in digital forensics cases: electronic evidence can be lost, overwritten, or deleted if not preserved promptly after the dispute arises.",
    ],
    sections: [
      {
        heading: "What Digital Forensics Covers",
        content:
          "Digital forensics is the application of scientific investigation techniques to electronic data. In civil disputes, digital forensics experts analyse computers, mobile devices, cloud storage, email servers, network logs, and metadata to establish facts relevant to the case.\n\nKey areas include: data recovery from damaged or deleted storage; analysis of USB device activity and file transfer logs; email forensics and communication analysis; cloud storage and SaaS platform forensics; mobile device forensics (iOS and Android); metadata analysis for document authenticity; and network forensics for unauthorised access or data exfiltration.\n\nAll analysis must maintain chain of custody integrity, a documented record of the seizure, transfer, analysis, and storage of evidence, to ensure court admissibility.",
      },
      {
        heading: "E-Discovery Under CPR Part 31",
        content:
          "CPR Part 31 governs disclosure of documents in UK civil proceedings, including electronically stored information (ESI). Practice Direction 31B sets out specific requirements for electronic disclosure in multi-track cases.\n\nDigital forensics experts assist with: identifying relevant data sources across the parties' IT infrastructure; ensuring forensically sound collection that preserves metadata; processing and filtering large data volumes for review; and advising on proportionality of disclosure scope.\n\nIn disputes where the adequacy of disclosure is itself in issue, digital forensics experts can provide expert evidence on whether the disclosure process was conducted correctly and whether relevant data may have been withheld or destroyed.",
      },
      {
        heading: "Data Theft and IP Misappropriation Cases",
        content:
          "Data theft cases require digital forensics experts to establish: what data was taken; when and how it was accessed; and by whom. Common forensic findings include evidence of bulk file copying to USB devices, forwarding of confidential documents to personal email accounts, and unauthorised uploads to cloud storage services.\n\nIn IP misappropriation cases, digital forensics experts analyse device and server data to establish the factual mechanism of the theft, which the forensic accountant then uses as the basis for loss quantification. The two disciplines produce separate CPR Part 35 reports.\n\nNorwich Pharmacal orders may be used to obtain identifying information from third parties (such as internet service providers or cloud platforms), with forensic experts assisting in analysing the information obtained.",
      },
      {
        heading: "Cybercrime Civil Recovery",
        content:
          "Civil recovery actions following cybercrime, ransomware, business email compromise, and authorised push payment fraud, require digital forensics to establish the mechanism of the attack and forensic accounting to quantify the financial loss.\n\nDigital forensics experts analyse server logs, email headers, malware artefacts, and network traffic to reconstruct the attack timeline and identify the attack vector. This evidence supports both the liability case and any insurance claim.\n\nGDPR data breach litigation also requires digital forensics input to establish the scope of the breach, the data affected, and whether appropriate security measures were in place.",
      },
      {
        heading: "Credentials and CPR Part 35 Compliance",
        content:
          "Key credentials for digital forensics expert witnesses include FBCS (Fellow of the British Computer Society), CEng, EnCE (EnCase Certified Examiner), GCFE (GIAC Certified Forensic Examiner), and GCFA (GIAC Certified Forensic Analyst).\n\nDigital forensics expert reports must comply with CPR Part 35, including a statement of qualifications, instructions, methodology, findings, and opinions. The expert must explain their analysis in terms accessible to a non-technical judge or tribunal.\n\nInstruct early to issue preservation letters to opposing parties and third parties, preventing the destruction of relevant electronic evidence before forensic collection can take place.",
      },
    ],
    faqs: [],
    relatedLinks: [
      { href: "/disciplines/digital-forensics", label: "Digital Forensics Discipline" },
      { href: "/case-types/cybercrime-data-disputes", label: "Cybercrime & Data Disputes" },
      { href: "/services#digital-forensics-ediscovery", label: "Digital Forensics & E-Discovery" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "forensic-economics-competition-guide",
    title: "Forensic Economics & Competition Damages",
    h1: "Forensic Economics & Competition Damages: A Solicitor's Guide",
    metaTitle:
      "Forensic Economics & Competition Damages: A Solicitor's Guide",
    metaDescription:
      "Guide for UK solicitors on forensic economics in competition law, cartel overcharge, pass-on defence, CAT proceedings, investment treaty economics, and counterfactual methodology.",
    aboutServiceId: "economic-damages-analysis",
    paragraphs: [
      "Competition law damages claims and investment treaty arbitration require forensic economics expertise that goes beyond standard forensic accounting. This guide explains the economic methodology, key concepts, and procedural context for instructing forensic economists in UK and international proceedings.",
      "Forensic economists and forensic accountants frequently work together in competition damages claims, the economist constructs the counterfactual model while the accountant verifies assumptions against financial records.",
    ],
    sections: [
      {
        heading: "Cartel Overcharge Methodology",
        content:
          "Cartel overcharge calculations estimate the price premium paid by customers as a result of the cartel arrangement. Forensic economists construct a but-for counterfactual, what prices would have been absent the cartel, and compare this to actual prices paid.\n\nCommon econometric techniques include: difference-in-differences analysis (comparing price changes in affected vs unaffected markets); yardstick comparisons (using prices in similar but unaffected markets as a benchmark); and simulation models based on economic theory of competitive pricing.\n\nThe choice of methodology depends on data availability, market structure, and the nature of the cartel. CAT jurisprudence has established principles for assessing the reliability of different overcharge estimation approaches.",
      },
      {
        heading: "The Pass-On Defence",
        content:
          "The pass-on defence allows cartel defendants to argue that the claimant passed the overcharge on to its own customers, reducing or eliminating its own loss. This defence has been significantly shaped by the EU Damages Directive and CAT case law.\n\nForensic economists address pass-on through pricing analysis and econometric modelling, examining whether and to what extent the claimant increased its own prices in response to the cartel overcharge.\n\nThe pass-on analysis is often the most contested aspect of competition damages claims, requiring rigorous economic evidence and frequently involving separate pass-on experts on each side.",
      },
      {
        heading: "CAT Proceedings",
        content:
          "The Competition Appeal Tribunal (CAT) has jurisdiction over follow-on damages claims following infringement decisions by the CMA or European Commission. CAT proceedings require forensic economics experts familiar with the tribunal's approach to economic evidence.\n\nCAT rules require expert reports to comply with CPR Part 35 standards. Experts attend joint meetings, produce joint statements, and may give oral evidence including hot-tubbing at CAT hearings.\n\nThe CAT has developed a substantial body of case law on damages quantification methodology, pass-on, and the standard of proof for economic evidence, which forensic economists must be familiar with.",
      },
      {
        heading: "Investment Treaty Economics",
        content:
          "Investment treaty arbitration under ICSID and UNCITRAL rules requires forensic economists to quantify damages using the Chorzów Factory standard, full reparation for injury caused by the state's breach of the investment treaty.\n\nCommon methodologies include discounted cash flow (DCF) analysis, market-based valuations, and book value approaches. The choice of methodology depends on the nature of the investment, data availability, and tribunal preferences established in prior awards.\n\nInvestment treaty economics is heavily scrutinised, tribunals frequently appoint their own economic experts and conduct detailed analysis of the parties' DCF models, discount rates, and cash flow projections.",
      },
      {
        heading: "Counterfactual Methodology and Data Requirements",
        content:
          "Counterfactual analysis is the foundation of forensic economics, constructing what would have happened but for the wrongful conduct. The reliability of any damages estimate depends on the quality of the counterfactual and the data supporting it.\n\nForensic economists require: pricing and volume data for the affected period; comparable market data for yardstick analysis; financial records to verify economic assumptions; and industry data for market definition analysis.\n\nEarly engagement with the forensic economist allows identification of data requirements and ensures relevant data is preserved and disclosed. Coordinate with forensic accountants to ensure financial data supporting the economic model is available and verified.",
      },
    ],
    faqs: [],
    relatedLinks: [
      { href: "/disciplines/forensic-economics", label: "Forensic Economics Discipline" },
      { href: "/case-types/competition-law-cartel-damages", label: "Competition Law & Cartel Damages" },
      { href: "/services#economic-damages-analysis", label: "Economic Damages Analysis" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "hot-tubbing-concurrent-evidence-guide",
    title: "Hot-Tubbing & Concurrent Evidence",
    h1: "Hot-Tubbing & Concurrent Evidence: A Guide for Solicitors Using Forensic Experts",
    metaTitle:
      "Hot-Tubbing & Concurrent Evidence: A Guide for Solicitors Using Forensic Experts",
    metaDescription:
      "Guide for UK solicitors on hot-tubbing and concurrent expert evidence, TCC practice, arbitration procedures, preparing forensic experts, and joint statements.",
    aboutServiceId: "expert-determination-adr",
    paragraphs: [
      "Hot-tubbing, concurrent evidence, is increasingly used in UK courts and international arbitration to resolve technical expert disputes efficiently. This guide explains the procedure, when it is ordered, and how to prepare your forensic experts for concurrent evidence sessions.",
      "Forensic experts from all disciplines, accounting, engineering, digital forensics, and economics, should be prepared for hot-tubbing in any complex dispute, particularly in the TCC and CAT.",
    ],
    sections: [
      {
        heading: "What Is Hot-Tubbing?",
        content:
          "Hot-tubbing, formally concurrent evidence, is a procedure where experts from both sides give evidence simultaneously before the judge or tribunal, rather than in the traditional sequential format of examination-in-chief followed by cross-examination.\n\nThe judge or arbitrator directs the discussion, asking questions, probing areas of agreement and disagreement, and inviting experts to respond to each other's opinions in real time. This allows the tribunal to directly compare expert evidence and resolve technical questions more efficiently.\n\nHot-tubbing was pioneered in Australian courts and has been increasingly adopted in the UK, particularly in the Technology and Construction Court, the Competition Appeal Tribunal, and international arbitration.",
      },
      {
        heading: "When Is Hot-Tubbing Ordered?",
        content:
          "Courts and tribunals order hot-tubbing where expert evidence is central to the dispute and traditional cross-examination would be inefficient or ineffective. It is particularly common in: TCC construction disputes involving quantum and delay experts; CAT competition proceedings involving economic experts; digital forensics cases with highly technical evidence; and international arbitration under ICC and LCIA rules.\n\nThe court may order hot-tubbing of its own initiative or on application by either party. CPR Part 35 and the TCC Guide support the use of concurrent evidence in appropriate cases. Tribunals in international arbitration frequently use hot-tubbing as standard practice for expert evidence.",
      },
      {
        heading: "TCC and Arbitration Practice",
        content:
          "In TCC proceedings, hot-tubbing typically follows the exchange of expert reports and a joint statement identifying agreed and disputed issues. The experts are sworn in together and the judge directs the discussion, with advocates permitted to ask supplementary questions.\n\nIn international arbitration, hot-tubbing is commonly used under IBA Rules on Evidence. The tribunal may structure the session by issue, asking each expert to address specific questions before inviting discussion between the experts.\n\nThe format varies, some tribunals prefer a structured question-and-answer approach, while others allow freer discussion. Experts should be prepared for both formats.",
      },
      {
        heading: "Preparing Forensic Experts for Hot-Tubbing",
        content:
          "Preparation for hot-tubbing begins with the joint expert meeting and joint statement. Experts must have clearly identified the areas of agreement and disagreement before the hot-tubbing session, with reasons for any remaining disputes documented.\n\nExperts should be prepared to: explain their methodology clearly and concisely; respond directly to the opposing expert's opinions; acknowledge areas of agreement without compromising their position on disputed issues; and answer the judge's or tribunal's questions directly and honestly.\n\nAdvocates should brief their experts on the hot-tubbing format, the likely areas of focus, and the importance of addressing the tribunal directly rather than through counsel.",
      },
      {
        heading: "Joint Statements Before Hot-Tubbing",
        content:
          "CPR Part 35 requires experts to meet and produce a joint statement identifying agreed facts and opinions, areas of disagreement, and the reasons for disagreement. The joint statement is the foundation for an effective hot-tubbing session.\n\nA well-prepared joint statement narrows the issues significantly, allowing the hot-tubbing session to focus on the genuinely disputed matters rather than rehashing areas of agreement.\n\nIn multi-discipline cases, separate joint statements are produced within each discipline. Coordinate joint meetings across disciplines where issues overlap, for example, where the quantum expert's calculations depend on the delay expert's EOT assessment.",
      },
    ],
    faqs: [],
    relatedLinks: [
      { href: "/glossary", label: "Forensic Expert Witness Glossary" },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/qualifications", label: "Expert Qualifications" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
  {
    slug: "multi-discipline-forensic-teams",
    title: "Multi-Discipline Forensic Teams",
    h1: "Multi-Discipline Forensic Expert Teams: When and How to Instruct Them",
    metaTitle:
      "Multi-Discipline Forensic Expert Teams: When and How to Instruct Them",
    metaDescription:
      "Guide for UK solicitors on instructing multi-discipline forensic expert teams, when multiple disciplines are needed, coordinating reports, joint meetings, and cost management.",
    aboutServiceId: "forensic-loss-quantification",
    paragraphs: [
      "Complex disputes frequently require forensic experts from more than one discipline working together. DisputeForensic.com is uniquely positioned to coordinate multi-discipline forensic teams across accounting, engineering, digital forensics, and economics.",
      "This guide explains when multiple disciplines are needed, how they interact, and best practice for coordinating multi-discipline expert evidence in UK litigation and international arbitration.",
    ],
    sections: [
      {
        heading: "When Multiple Disciplines Are Needed",
        content:
          "Complex disputes rarely fit within a single forensic discipline. Common multi-discipline scenarios include: complex construction fraud (forensic accounting + forensic engineering quantum + digital forensics); IP theft with financial loss (digital forensics + forensic accounting); competition damages claims (forensic economics + forensic accounting); international investment treaty disputes (forensic economics + forensic accounting + sector specialist); cybercrime with financial impact (digital forensics + forensic accounting); and M&A disputes with data issues (forensic accounting + digital forensics).\n\nThe key principle is that each expert addresses only matters within their area of expertise under CPR Part 35. One expert cannot opine on matters requiring a different discipline.",
      },
      {
        heading: "How Disciplines Interact",
        content:
          "In multi-discipline cases, the output of one expert often feeds into the analysis of another. For example: the digital forensics expert establishes what data was stolen and when; the forensic accountant uses those findings to quantify the financial loss. The delay expert establishes entitlement to EOT; the quantum expert values the prolongation costs arising from that entitlement.\n\nClear sequencing of expert work is important. Digital forensics and financial investigation typically precede loss quantification. Delay analysis typically precedes quantum valuation of delay-related costs.\n\nCoordinate letters of instruction to ensure each expert understands how their work relates to the other disciplines engaged on the case.",
      },
      {
        heading: "Coordinating Expert Reports",
        content:
          "Each expert produces a separate CPR Part 35 compliant report addressing their own area of expertise. Reports should cross-reference each other where findings in one discipline support or depend on findings in another.\n\nAvoid overlapping instructions that cause experts to stray into each other's territory. The forensic accountant should not opine on digital forensic findings; the digital forensics expert should not opine on financial loss quantification.\n\nA lead solicitor or expert coordinator should review all reports before exchange to ensure consistency and identify any gaps or contradictions between disciplines.",
      },
      {
        heading: "Joint Meetings with Multi-Discipline Teams",
        content:
          "CPR Part 35 requires experts within the same discipline to meet and produce joint statements. In multi-discipline cases, this means separate joint meetings for each discipline, the forensic accountants meet, the digital forensics experts meet, and so on.\n\nWhere issues cross disciplines, for example, where the quantum expert's calculations depend on the delay expert's findings, consider coordinating joint meetings or holding a multi-discipline meeting to address the interface between disciplines.\n\nIn international arbitration, tribunals may order multi-discipline hot-tubbing sessions where experts from all disciplines appear together, with the tribunal directing discussion across disciplinary boundaries.",
      },
      {
        heading: "Scoping Multi-Discipline Teams",
        content:
          "Multi-discipline expert teams are often essential for complex disputes where incomplete expert evidence would weaken the case.\n\nEffective scoping includes: defining each expert's instruction carefully to avoid duplication; sequencing work so that later experts build on earlier findings rather than duplicating investigation; and using Single Joint Experts within disciplines where appropriate.\n\nEarly case assessment with a multi-discipline coordinator can identify the minimum expert team required and avoid unnecessary instructions. DisputeForensic.com provides coordinated multi-discipline matching to ensure the right experts are instructed from the outset.",
      },
    ],
    faqs: [],
    relatedLinks: [
      { href: "/forensic-disciplines", label: "All Forensic Disciplines" },
      { href: "/services", label: "Forensic Expert Witness Services" },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/contact", label: "Instruct an Expert" },
    ],
  },
];

export function getGuide(slug: string): GuidePage | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): GuidePage[] {
  return guides;
}

export function getGuideSlugs(): string[] {
  return [...GUIDE_SLUGS];
}
