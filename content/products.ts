import type { ProductSlug } from "@/config/site";

export type ProductIconKey =
  | "car"
  | "house"
  | "key"
  | "heart"
  | "plane"
  | "store"
  | "paw";

export type ProductContent = {
  slug: ProductSlug;
  name: string;
  icon: ProductIconKey;
  image: string;
  /** One sentence for cards and the insurance finder. */
  summary: string;
  /** Short phrase for the finder: "I want to protect…" */
  protectLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroCopy: string;
  overview: string[];
  /** What this kind of coverage generally helps protect. */
  helpsProtect: string[];
  /** Who may find it useful. */
  whoMayConsider: string[];
  considerations: { title: string; body: string }[];
  questionsForAgent: string[];
  faqs: { q: string; a: string }[];
  relatedArticles: string[];
  relatedProducts: ProductSlug[];
};

export const productContent: Record<ProductSlug, ProductContent> = {
  auto: {
    slug: "auto",
    name: "Auto Insurance",
    icon: "car",
    image: "/images/products/auto.jpg",
    summary:
      "Coverage options that generally help with damage to your vehicle, injuries, and liability when you drive.",
    protectLabel: "My car and my time on the road",
    metaTitle: "Auto Insurance Guidance | Talk to an Agent",
    metaDescription:
      "Learn how auto insurance coverages like liability, collision and comprehensive generally work, then call Travlcares to talk through your options with an agent.",
    heroHeading: "Auto insurance, explained before you decide.",
    heroCopy:
      "Liability, collision, comprehensive, uninsured motorist: the vocabulary can get in the way. Call Travlcares to talk through what each part generally does and what to ask about.",
    overview: [
      "Auto insurance is really a bundle of separate coverages. Some address what you owe other people if you cause an accident. Others address damage to your own vehicle, or the cost of injuries to you and your passengers.",
      "Which of those coverages you carry, and at what limits and deductibles, is a set of choices rather than a single product. Most states set minimum requirements for liability coverage, and those minimums differ from state to state. Lenders and lessors often add their own requirements.",
      "The goal of a conversation with an agent is not to hurry you toward a policy. It is to make sure you understand the trade-offs between a lower premium and the amount of protection you are choosing.",
    ],
    helpsProtect: [
      "Costs you may owe others for injury or property damage if you are responsible for an accident (liability).",
      "Repairs to your own vehicle after a collision, subject to your deductible (collision).",
      "Non-collision events such as theft, vandalism, falling objects, or weather damage, depending on the policy (comprehensive).",
      "Medical costs and other protections that vary by state and policy.",
    ],
    whoMayConsider: [
      "Drivers buying their first policy and sorting out what is required versus optional.",
      "Anyone who has bought a vehicle, moved to a new state, or added a driver to the household.",
      "Drivers whose lender or lessor requires specific coverages or deductible limits.",
      "People whose policy is up for renewal and who want to review their limits instead of auto-renewing.",
    ],
    considerations: [
      {
        title: "State requirements differ",
        body: "Minimum liability limits, and rules on coverages like uninsured motorist or personal injury protection, vary by state. An agent can explain what generally applies where you live.",
      },
      {
        title: "Minimum limits may not match your exposure",
        body: "State minimums are a floor. If an accident costs more than your limits, you may be responsible for the difference, so it is worth discussing how limits relate to your own circumstances.",
      },
      {
        title: "Deductible versus premium",
        body: "A higher deductible can lower your premium, but it also raises what you pay out of pocket on a claim. Consider what you could comfortably cover on short notice.",
      },
      {
        title: "Who and what is listed",
        body: "Household drivers, how the vehicle is used, and where it is kept can all affect a policy. Accurate information at the start helps avoid surprises later.",
      },
    ],
    questionsForAgent: [
      "Which coverages does my state require, and which are optional?",
      "How do liability limits work, and how are they written (for example, per person and per accident)?",
      "What deductibles apply to collision and comprehensive, and what happens if I raise or lower them?",
      "What is uninsured or underinsured motorist coverage, and is it worth discussing for my situation?",
      "Does a policy generally include rental car or roadside assistance, or are those add-ons?",
      "What should I do right after an accident, and how does the claims process generally begin?",
    ],
    faqs: [
      {
        q: "Is auto insurance required?",
        a: "Nearly every state requires drivers to carry some form of financial responsibility, usually liability coverage at minimum limits, though the specifics differ by state. Ask an agent what applies where you live.",
      },
      {
        q: "What is the difference between collision and comprehensive?",
        a: "Collision generally relates to damage to your vehicle from a crash. Comprehensive generally relates to damage from other events, such as theft, vandalism, or weather. What a specific policy includes depends on its terms.",
      },
      {
        q: "What information should I have when I call?",
        a: "Vehicle details (make, model, year, and VIN if handy), the drivers in your household, your current policy and its renewal date if you have one, and any questions about what you want covered.",
      },
      {
        q: "Can an agent guarantee a price?",
        a: "No. Any price depends on the specific policy, the insurer's underwriting, and your information at the time. An agent can explain what generally affects cost and what to compare.",
      },
    ],
    relatedArticles: ["understanding-deductibles", "premiums-vs-coverage-limits"],
    relatedProducts: ["renters", "home", "life"],
  },

  home: {
    slug: "home",
    name: "Homeowners Insurance",
    icon: "house",
    image: "/images/products/home.jpg",
    summary:
      "Coverage that generally helps with damage to your home, your belongings, and liability connected to your property.",
    protectLabel: "My home and what is inside it",
    metaTitle: "Homeowners Insurance Guidance | Talk to an Agent",
    metaDescription:
      "Understand how homeowners insurance generally works, what is commonly excluded, and what to ask. Call Travlcares to discuss your options with an agent.",
    heroHeading: "Understand what is, and is not, protecting your home.",
    heroCopy:
      "A homeowners policy is more than one promise. Call Travlcares to walk through how the pieces fit together and which questions are worth asking before you rely on it.",
    overview: [
      "Homeowners insurance typically combines several kinds of protection: for the structure of the home, for other structures on the property, for personal belongings, for liability if someone is hurt on your property, and for additional living costs if you cannot stay in the home after a covered loss.",
      "The details matter more here than in almost any other line. Standard policies commonly exclude certain causes of loss, such as flooding or earthquakes, which may need separate coverage. How a loss is valued, as replacement cost or actual cash value, also changes what you would receive.",
      "If you have a mortgage, your lender will likely require coverage. Beyond that requirement, there is real room to choose limits and deductibles that fit your home and finances.",
    ],
    helpsProtect: [
      "The structure of your home and, depending on the policy, attached or detached structures like a garage or fence.",
      "Personal belongings such as furniture, clothing, and electronics, subject to limits and conditions.",
      "Liability if a visitor is injured or you accidentally damage someone else's property.",
      "Additional living expenses if a covered loss makes your home temporarily unlivable.",
    ],
    whoMayConsider: [
      "New homebuyers who need coverage in place for closing.",
      "Existing owners whose home value, renovations, or belongings have changed since they last reviewed their policy.",
      "Homeowners who are unsure whether flood, earthquake, or other perils are part of their coverage.",
      "Owners who rent out part of their property or run a business from home and want to understand how that is treated.",
    ],
    considerations: [
      {
        title: "Replacement cost versus actual cash value",
        body: "Replacement cost generally pays to repair or rebuild without deducting for age; actual cash value generally accounts for depreciation. The difference can be significant, so ask how each applies to the structure and to belongings.",
      },
      {
        title: "Common exclusions",
        body: "Flooding, earthquakes, and certain kinds of water or sewer backup are commonly excluded from standard policies. Separate coverage or endorsements may be available. Ask about the perils that are realistic where you live.",
      },
      {
        title: "Dwelling limit and rebuild cost",
        body: "The limit on the structure should be considered against what it could cost to rebuild, which is not the same as market value or purchase price.",
      },
      {
        title: "Separate deductibles",
        body: "Some policies carry a different, often percentage-based, deductible for certain events such as wind or hail. Knowing this ahead of time prevents unpleasant surprises.",
      },
    ],
    questionsForAgent: [
      "How is the limit on my dwelling usually determined, and how do I know if it is still adequate?",
      "Is coverage for belongings based on replacement cost or actual cash value?",
      "Which common causes of loss are excluded, and are there ways to address them?",
      "Do any special deductibles apply, such as for wind, hail, or named storms?",
      "How are valuable items such as jewelry or collectibles handled?",
      "What does the policy say about home businesses, short-term rentals, or detached structures?",
    ],
    faqs: [
      {
        q: "Does homeowners insurance cover floods?",
        a: "Standard homeowners policies commonly exclude flood damage. Flood coverage is generally a separate policy or endorsement. Ask an agent how that applies to your property.",
      },
      {
        q: "Is my mortgage lender requiring coverage?",
        a: "Lenders typically require homeowners coverage on mortgaged homes and may specify minimum amounts or deductible limits. Your loan documents are the place to check, and an agent can help you understand them.",
      },
      {
        q: "How often should I review my policy?",
        a: "Many people review at renewal and after major events such as renovations, large purchases, or changes in who lives in the home.",
      },
      {
        q: "What should I have ready when I call?",
        a: "Basic details about the home (age, size, construction, and any updates), your current policy and renewal date if you have one, and a list of questions about what you want covered.",
      },
    ],
    relatedArticles: ["exclusions-and-policy-conditions", "understanding-deductibles"],
    relatedProducts: ["renters", "auto", "life"],
  },

  renters: {
    slug: "renters",
    name: "Renters Insurance",
    icon: "key",
    image: "/images/products/renters.jpg",
    summary:
      "Coverage that generally helps with your belongings and personal liability when you rent your home.",
    protectLabel: "My belongings in a rented home",
    metaTitle: "Renters Insurance Guidance | Talk to an Agent",
    metaDescription:
      "Learn what renters insurance generally covers, how it differs from a landlord's policy, and what to ask. Call Travlcares to speak with an agent.",
    heroHeading: "Your landlord's policy is not your policy.",
    heroCopy:
      "A landlord's insurance generally focuses on the building, not on your belongings. Call Travlcares to talk through how renters coverage works and what you might want to ask about.",
    overview: [
      "Renters insurance is built around the person living in the space rather than the building. It generally addresses your personal belongings, your liability to others, and the cost of living elsewhere temporarily if a covered loss makes your rental unlivable.",
      "Because the building is typically insured by the owner, the question becomes how much your own belongings are worth and how much risk you carry for things like accidental damage to the unit or injuries to a guest.",
      "Some leases require renters insurance. Even where they do not, it is a reasonable topic to understand before you need it.",
    ],
    helpsProtect: [
      "Personal belongings such as clothing, furniture, and electronics against covered losses, subject to limits.",
      "Liability if you are responsible for injuring a visitor or accidentally damaging someone else's property.",
      "Additional living expenses if a covered loss means you cannot stay in your rental.",
      "Belongings away from home, in some policies, subject to limits and conditions.",
    ],
    whoMayConsider: [
      "Anyone signing a lease, especially if the lease requires proof of coverage.",
      "Roommates trying to work out who is covered and under which policy.",
      "Renters who have accumulated more belongings, electronics, or valuables than they realize.",
      "Students living off campus and those whose belongings were previously on a family policy.",
    ],
    considerations: [
      {
        title: "Take stock of what you own",
        body: "A rough inventory, even photos on your phone, helps you think about how much coverage for belongings makes sense and can be useful if you ever file a claim.",
      },
      {
        title: "Roommates and who is named",
        body: "Whether roommates are covered by your policy depends on the policy and on who is named. Ask how it generally works for shared households.",
      },
      {
        title: "Limits on valuables",
        body: "Many policies cap coverage for items like jewelry, collectibles, or high-end electronics. If you own such items, ask whether additional protection is available.",
      },
      {
        title: "Exclusions still apply",
        body: "As with other lines, certain causes of loss, such as flooding, may be excluded. Ask what applies to your situation.",
      },
    ],
    questionsForAgent: [
      "Does my landlord's insurance cover any of my belongings or liability?",
      "How is coverage for belongings valued: replacement cost or actual cash value?",
      "What does the liability part of a renters policy generally address?",
      "Are my roommates covered, or should they have their own policies?",
      "How are expensive items such as laptops, bikes, or jewelry treated?",
      "What does additional living expense coverage usually pay for?",
    ],
    faqs: [
      {
        q: "Does my landlord's insurance cover my belongings?",
        a: "Generally, a landlord's policy focuses on the building and the landlord's own liability, not a tenant's personal property. Check your lease and ask an agent what applies to you.",
      },
      {
        q: "Does renters insurance cover roommates?",
        a: "It depends on the policy and who is named on it. Roommates are often advised to understand their own coverage. An agent can explain the options.",
      },
      {
        q: "Is renters insurance required?",
        a: "Not by law in most places, but some landlords require it as a lease condition. Review your lease and ask the property manager what proof is needed.",
      },
      {
        q: "What information do I need on a call?",
        a: "Your rental address, a rough sense of what you own and what is most valuable, any lease requirements, and your current coverage if you have it.",
      },
    ],
    relatedArticles: ["choosing-the-right-coverage", "questions-to-ask-before-choosing"],
    relatedProducts: ["home", "auto", "pet"],
  },

  life: {
    slug: "life",
    name: "Life Insurance",
    icon: "heart",
    image: "/images/products/life.jpg",
    summary:
      "Coverage designed to provide a financial benefit to the people you name if you pass away.",
    protectLabel: "The people who depend on me",
    metaTitle: "Life Insurance Guidance | Talk to an Agent",
    metaDescription:
      "Understand the basics of term and permanent life insurance, beneficiaries, and the questions worth asking. Call Travlcares to speak with an agent.",
    heroHeading: "A conversation about the people who count on you.",
    heroCopy:
      "Life insurance is a decision about the future, made in the present. Call Travlcares to talk through the types of coverage and the questions that matter.",
    overview: [
      "Life insurance generally pays a benefit to the beneficiaries you choose when the insured person dies. How much, for how long, and at what cost depends on the type of policy and the details of your situation.",
      "Term life covers a set period, such as 10, 20, or 30 years. Permanent life, a category that includes whole and universal life, is designed to last throughout a person's life and can include a cash value component. Each has different features, costs, and trade-offs.",
      "Most policies involve underwriting, which can include questions about health and lifestyle. Approval and pricing are decided by the insurer, not by the person you speak with, and nothing can be guaranteed in advance.",
    ],
    helpsProtect: [
      "Income replacement for dependents who rely on your earnings.",
      "Outstanding obligations such as a mortgage or other debts, depending on how the benefit is used.",
      "Final expenses and other costs your family may face.",
      "Longer-term goals such as education costs, based on how you and your beneficiaries choose to use the benefit.",
    ],
    whoMayConsider: [
      "New parents, or people with dependents who rely on their income.",
      "Homeowners or borrowers with significant long-term obligations.",
      "People whose family or financial situation has recently changed, such as marriage or a new job.",
      "Anyone who wants to understand how coverage through an employer compares with a separate policy.",
    ],
    considerations: [
      {
        title: "Term versus permanent",
        body: "Term coverage is generally simpler and temporary; permanent coverage is designed to last and may build cash value but typically costs more. The right fit depends on your goals.",
      },
      {
        title: "How much coverage",
        body: "People think about this in different ways: income replacement, debts, future expenses. An agent can explain common approaches, but the amount is your decision.",
      },
      {
        title: "Underwriting and approval",
        body: "Insurers review applications and decide whether to offer coverage and at what price. Be accurate on any application, since misstatements can affect claims later.",
      },
      {
        title: "Beneficiaries",
        body: "Who you name and how you name them matters. Review beneficiary designations after major life events.",
      },
    ],
    questionsForAgent: [
      "What is the practical difference between term and permanent life insurance?",
      "How do people typically think about how much coverage they need?",
      "What kinds of information are usually reviewed during underwriting?",
      "What happens at the end of a term policy?",
      "How do I name or change beneficiaries, and what should I consider?",
      "Are there riders or add-ons worth understanding, and what do they generally do?",
    ],
    faqs: [
      {
        q: "What is the difference between term and whole life insurance?",
        a: "Term life covers a specified period. Whole life is a type of permanent coverage designed to last throughout life and typically includes a cash value component. Costs, features, and trade-offs differ.",
      },
      {
        q: "Will I be approved?",
        a: "Approval is decided by the insurer after review. No one can promise approval in advance. An agent can explain what is generally involved.",
      },
      {
        q: "Do I need a medical exam?",
        a: "Some policies involve an exam or health questions, others use different underwriting. What applies depends on the product and the insurer.",
      },
      {
        q: "What should I have ready when I call?",
        a: "A rough idea of who you want to protect, any major obligations like a mortgage, any existing life coverage (including through work), and your questions.",
      },
    ],
    relatedArticles: ["choosing-the-right-coverage", "questions-to-ask-before-choosing"],
    relatedProducts: ["home", "auto", "business"],
  },

  travel: {
    slug: "travel",
    name: "Travel Insurance",
    icon: "plane",
    image: "/images/products/travel.jpg",
    summary:
      "Coverage that generally relates to trip costs, travel delays, medical needs away from home, and lost belongings.",
    protectLabel: "My trip and the money I put into it",
    metaTitle: "Travel Insurance Guidance | Talk to an Agent",
    metaDescription:
      "Learn how travel insurance generally works, from trip cancellation to emergency medical coverage, and what to check before you buy. Call Travlcares to talk it through.",
    heroHeading: "Before the trip: know what the policy would, and would not, do.",
    heroCopy:
      "Travel policies vary a great deal in what they include and when they apply. Call Travlcares to talk through what to look for before you travel.",
    overview: [
      "Travel insurance is a family of coverages that can relate to the cost of a trip, medical needs while traveling, delays, and lost or damaged baggage. Different plans include different combinations, and the covered reasons for cancellation or interruption are typically spelled out in specific terms.",
      "Timing matters. Some benefits depend on when you buy relative to your first trip payment, and pre-existing medical conditions are commonly treated in particular ways. Health insurance at home often does not extend fully abroad, which is part of why travelers ask about this coverage.",
      "Because the terms are so specific, the most useful thing you can do is read the plan description and ask questions before you pay.",
    ],
    helpsProtect: [
      "Prepaid, non-refundable trip costs if a covered reason forces you to cancel or interrupt the trip.",
      "Emergency medical costs while traveling, depending on the plan.",
      "Travel delays, missed connections, and related expenses, subject to plan conditions.",
      "Baggage and personal items that are lost, delayed, or damaged, subject to limits.",
    ],
    whoMayConsider: [
      "Travelers with significant prepaid, non-refundable costs.",
      "Anyone traveling internationally, who wants to understand how medical care away from home is handled.",
      "Families and groups planning trips years or months in advance.",
      "Travelers with health considerations who want to understand how plans treat pre-existing conditions.",
    ],
    considerations: [
      {
        title: "Covered reasons are specific",
        body: "Cancellation benefits typically apply only for reasons listed in the plan. Changing your mind is generally not one of them, so read the covered reasons carefully.",
      },
      {
        title: "Pre-existing conditions",
        body: "Plans commonly define and treat pre-existing conditions in particular ways, sometimes with conditions tied to when you buy. Ask how this works.",
      },
      {
        title: "Timing of purchase",
        body: "Some benefits are time-sensitive relative to your initial trip deposit. Don't assume you can add coverage at any point.",
      },
      {
        title: "Medical coverage is not the same as health insurance",
        body: "Travel medical benefits have their own limits and rules, and they may not replace your regular health coverage. Ask how they coordinate.",
      },
    ],
    questionsForAgent: [
      "Which reasons for cancellation or interruption are covered, and which are not?",
      "How does the plan treat pre-existing medical conditions?",
      "Are there deadlines tied to when I book the trip or make my first payment?",
      "How does emergency medical coverage work abroad, and does it include evacuation?",
      "What limits apply to baggage, delays, and valuables?",
      "How do I make a claim, and what documentation will I need to keep?",
    ],
    faqs: [
      {
        q: "Does travel insurance cover cancelling for any reason?",
        a: "Most plans cover cancellation only for specified reasons. Some plans offer broader options with their own conditions and limits. Read the plan terms and ask about what applies to you.",
      },
      {
        q: "Does my health insurance work abroad?",
        a: "It depends on your plan, and many domestic plans provide limited or no coverage outside the United States. Check with your insurer and ask an agent how travel medical benefits generally work.",
      },
      {
        q: "When should I buy a plan?",
        a: "Timing can affect which benefits are available, so it is worth asking before you make your first trip payment or soon after.",
      },
      {
        q: "What information should I have on hand?",
        a: "Trip dates and destinations, the cost of prepaid arrangements, who is traveling, and any questions about health or activities you plan to do.",
      },
    ],
    relatedArticles: ["exclusions-and-policy-conditions", "questions-to-ask-before-choosing"],
    relatedProducts: ["life", "auto", "pet"],
  },

  business: {
    slug: "business",
    name: "Business Insurance",
    icon: "store",
    image: "/images/products/business.jpg",
    summary:
      "Coverage options that generally relate to liability, property, employees, and other risks of operating a business.",
    protectLabel: "My business and the people who work in it",
    metaTitle: "Business Insurance Guidance | Talk to an Agent",
    metaDescription:
      "Explore how general liability, property, workers' compensation and other business coverages generally work. Call Travlcares to talk through your options.",
    heroHeading: "Your business is more than one risk. Talk it through.",
    heroCopy:
      "From general liability to workers' compensation, business coverage depends on what you do and who you employ. Call Travlcares to start the conversation.",
    overview: [
      "Business insurance is not one product. Common building blocks include general liability, commercial property, business interruption, professional liability, commercial auto, cyber, and workers' compensation. Which of them matter depends on the industry, the number of employees, the equipment, and the contracts involved.",
      "Some coverage is driven by requirements. Most states require employers to carry workers' compensation in some form, and clients, landlords, or lenders may ask for particular coverage or certificates of insurance.",
      "Smaller businesses sometimes look at packages that combine certain coverages. Whether that fits depends on the business, which is where an informed conversation helps.",
    ],
    helpsProtect: [
      "Claims from third parties alleging bodily injury or property damage connected to your operations (general liability).",
      "Business property such as equipment, inventory, and premises contents, depending on the policy.",
      "Lost income when a covered event forces a temporary closure, depending on the policy (business interruption).",
      "Employee injuries or illnesses connected to work (workers' compensation), as required or applicable in your state.",
    ],
    whoMayConsider: [
      "New business owners who want to understand which coverages are commonly discussed.",
      "Owners who have been asked by a client or landlord for a certificate of insurance.",
      "Businesses preparing to hire employees for the first time.",
      "Owners whose operations, equipment, or revenue have grown since they last reviewed coverage.",
    ],
    considerations: [
      {
        title: "Match coverage to how you operate",
        body: "A consultant, a restaurant, and a contractor face very different exposures. Be ready to describe what you actually do day to day.",
      },
      {
        title: "Workers' compensation rules vary",
        body: "Requirements depend on state law and on how many employees you have and how they are classified. Ask an agent what generally applies to you.",
      },
      {
        title: "Contract and certificate requirements",
        body: "Clients, landlords, or lenders may specify limits or ask to be listed as additional insureds. Share these requirements early.",
      },
      {
        title: "Policy exclusions and limits",
        body: "Business policies can exclude specific activities or kinds of loss. Understanding those carve-outs is as important as understanding what's included.",
      },
    ],
    questionsForAgent: [
      "Which coverages do businesses like mine commonly discuss?",
      "What is the difference between general liability and professional liability?",
      "Are workers' compensation requirements likely to apply to my business?",
      "How do business interruption benefits generally work, and what triggers them?",
      "What do I need to do to provide a certificate of insurance to a client?",
      "Are there combined packages for small businesses, and what do they typically include?",
    ],
    faqs: [
      {
        q: "Do I need business insurance?",
        a: "Some coverage is legally required (such as workers' compensation for many employers), some is required by contracts or lenders, and some is optional. An agent can help you sort out which category different coverages fall into for your business.",
      },
      {
        q: "What is a certificate of insurance?",
        a: "It is a document summarizing the coverage a business carries, often requested by clients or landlords as proof of insurance. It does not change the policy itself.",
      },
      {
        q: "Does home insurance cover my home business?",
        a: "Homeowners and renters policies commonly limit or exclude business activity. Ask an agent how your policy treats it and what other coverage may be worth discussing.",
      },
      {
        q: "What should I have ready when I call?",
        a: "A description of what the business does, its location, number of employees, revenue range, major equipment, and any contract or client insurance requirements.",
      },
    ],
    relatedArticles: ["exclusions-and-policy-conditions", "premiums-vs-coverage-limits"],
    relatedProducts: ["life", "auto", "home"],
  },

  pet: {
    slug: "pet",
    name: "Pet Insurance",
    icon: "paw",
    image: "/images/products/pet.jpg",
    summary:
      "Coverage options that generally relate to veterinary costs for accidents and illness.",
    protectLabel: "My dog, cat, or other pet",
    metaTitle: "Pet Insurance Guidance | Talk to an Agent",
    metaDescription:
      "Learn how pet insurance generally works: reimbursement, deductibles, waiting periods, and exclusions. Call Travlcares to talk through your options.",
    heroHeading: "Planning for the vet bill you hope never comes.",
    heroCopy:
      "Pet insurance varies in how it reimburses, what it excludes, and when coverage starts. Call Travlcares to talk through how it generally works.",
    overview: [
      "Pet insurance is generally designed to reimburse a portion of veterinary costs after you pay the bill, subject to the plan's deductible, reimbursement rate, and annual or per-condition limits. Some plans focus on accidents only, others add coverage for illness, and some offer optional wellness or routine care add-ons.",
      "Several features shape how a plan works in practice: waiting periods before coverage begins, how pre-existing conditions are handled, breed or age considerations, and what is excluded. These are the details that most often differ from what people expect.",
      "A call is a chance to understand these terms side by side before you commit.",
    ],
    helpsProtect: [
      "Veterinary costs related to accidents such as injuries, depending on the plan.",
      "Costs related to covered illnesses, depending on the plan.",
      "Optional wellness or preventive care when the plan offers it as an add-on.",
      "Out-of-pocket exposure when an unexpected veterinary bill arises.",
    ],
    whoMayConsider: [
      "New pet owners thinking about veterinary costs over the life of a pet.",
      "Owners of breeds or ages where certain health issues are discussed.",
      "People who want to avoid being forced into difficult decisions by a large unexpected bill.",
      "Owners comparing plans and unsure what terms like reimbursement rate or annual limit really mean.",
    ],
    considerations: [
      {
        title: "Waiting periods",
        body: "Coverage often does not start immediately for illness or certain conditions. Ask how long waiting periods last and what they apply to.",
      },
      {
        title: "Pre-existing conditions",
        body: "Conditions that exist or show signs before coverage begins are commonly excluded. Understanding the definition used by a plan matters.",
      },
      {
        title: "Deductible, reimbursement and limits",
        body: "The deductible, the percentage reimbursed, and annual or lifetime limits together determine what you may pay out of pocket.",
      },
      {
        title: "How claims are paid",
        body: "Many plans reimburse after you pay the vet. Ask how claims are submitted and how long reimbursement generally takes.",
      },
    ],
    questionsForAgent: [
      "What is the difference between accident-only and accident-and-illness plans?",
      "How are waiting periods structured?",
      "How does the plan define and treat pre-existing conditions?",
      "Is the deductible annual or per condition, and how does reimbursement work?",
      "Are there annual or lifetime limits, and do they change as my pet ages?",
      "What is not covered, such as certain procedures or hereditary conditions?",
    ],
    faqs: [
      {
        q: "Does pet insurance cover pre-existing conditions?",
        a: "Pre-existing conditions are commonly excluded, but how they are defined varies by plan. Ask for the specific definition.",
      },
      {
        q: "Does it pay the vet directly?",
        a: "Many plans reimburse the owner after the bill is paid, while arrangements vary. Ask how claims are handled under any plan you consider.",
      },
      {
        q: "Does pet insurance cover routine checkups?",
        a: "Routine and preventive care is typically not part of a basic plan but may be available as an optional add-on. Ask what is included.",
      },
      {
        q: "What should I have ready when I call?",
        a: "Your pet's species, breed, age, and any health history, plus your questions about cost structure and coverage.",
      },
    ],
    relatedArticles: ["understanding-deductibles", "exclusions-and-policy-conditions"],
    relatedProducts: ["renters", "home", "travel"],
  },
};
