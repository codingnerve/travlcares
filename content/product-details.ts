import type { ProductSlug } from "@/config/site";

export type CoverageType = {
  name: string;
  /** What this coverage generally does. */
  body: string;
  /** What to think about or ask. */
  consider: string;
};

export type ProductDetail = {
  coverageIntro: string;
  coverageTypes: CoverageType[];
  glossaryIntro: string;
  glossary: { term: string; definition: string }[];
};

export const productDetails: Record<ProductSlug, ProductDetail> = {
  auto: {
    coverageIntro:
      "An auto policy is usually built from separate coverages, each with its own limit and sometimes its own deductible. Names and availability vary by state and insurer, so treat this as a general map rather than a description of any one policy.",
    coverageTypes: [
      {
        name: "Liability coverage",
        body: "Generally addresses costs you may owe other people if you are responsible for an accident: their injuries and damage to their property. It is typically written as separate limits for bodily injury and property damage.",
        consider:
          "Most states set minimum liability limits. Ask how your limits compare with the minimums and what happens if a claim exceeds them.",
      },
      {
        name: "Collision coverage",
        body: "Generally relates to repairing or replacing your own vehicle after a collision with another vehicle or object, subject to your deductible and the policy's valuation rules.",
        consider:
          "Ask how the deductible applies and how the vehicle's value is determined if it cannot be repaired.",
      },
      {
        name: "Comprehensive coverage",
        body: "Generally relates to damage to your vehicle from events other than a collision, such as theft, vandalism, fire, or weather, depending on the policy.",
        consider:
          "Ask which events are listed and whether glass damage is treated differently.",
      },
      {
        name: "Uninsured and underinsured motorist coverage",
        body: "Generally relates to injuries, and in some states property damage, when the other driver has no insurance or too little to cover the loss. Rules vary considerably by state.",
        consider:
          "Ask whether this coverage is required or offered where you live, and how its limits are set.",
      },
      {
        name: "Medical payments or personal injury protection",
        body: "In some states and policies, coverage that relates to medical costs for you and your passengers after an accident regardless of who is at fault. Availability and rules differ by state.",
        consider:
          "Ask whether it is required in your state and how it coordinates with your health insurance.",
      },
    ],
    glossaryIntro:
      "A few terms come up in nearly every auto insurance conversation. Definitions here are general; your policy's wording controls.",
    glossary: [
      {
        term: "Premium",
        definition:
          "The amount you pay to keep the policy in force, billed monthly, quarterly, or for a longer term.",
      },
      {
        term: "Deductible",
        definition:
          "The amount you are generally responsible for before the insurer pays its share of a covered loss.",
      },
      {
        term: "Liability limit",
        definition:
          "The maximum a policy will generally pay for a particular type of liability claim, often written as per-person and per-accident amounts.",
      },
      {
        term: "Declarations page",
        definition:
          "The summary page of a policy listing the insured drivers and vehicles, coverages, limits, deductibles, and policy period.",
      },
      {
        term: "Actual cash value",
        definition:
          "A way of valuing a vehicle that generally accounts for its age and condition just before the loss, rather than the cost of a new one.",
      },
      {
        term: "Total loss",
        definition:
          "When repair costs are considered too high relative to the vehicle's value, the insurer may treat the vehicle as a total loss and settle on its value under the policy terms.",
      },
    ],
  },

  home: {
    coverageIntro:
      "A homeowners policy is organized into several parts, each with its own limit. The names below are common, but forms and wording differ between insurers.",
    coverageTypes: [
      {
        name: "Dwelling coverage",
        body: "Generally relates to repairing or rebuilding the structure of your home, including attached parts such as a garage, after a covered loss.",
        consider:
          "Ask how the limit is set and whether it is based on rebuilding cost rather than market value.",
      },
      {
        name: "Other structures",
        body: "Generally relates to detached structures on the property, such as a fence, shed, or detached garage.",
        consider:
          "Ask how the limit is calculated and whether any structure used for business is treated differently.",
      },
      {
        name: "Personal property",
        body: "Generally relates to belongings such as furniture, clothing, and electronics when lost or damaged by a covered cause. Policies often cap certain categories like jewelry or collectibles.",
        consider:
          "Ask whether belongings are valued at replacement cost or actual cash value, and what sub-limits apply.",
      },
      {
        name: "Liability protection",
        body: "Generally relates to claims that you are responsible for someone else's injury or property damage connected to your home or your actions, including legal defense costs subject to policy terms.",
        consider:
          "Ask what the limit is and whether it extends to activities away from the home.",
      },
      {
        name: "Loss of use",
        body: "Generally relates to additional living costs, such as temporary lodging, if a covered loss makes your home unlivable.",
        consider:
          "Ask whether it is limited by amount or by time and what documentation is needed.",
      },
    ],
    glossaryIntro:
      "Homeowners policies come with a lot of vocabulary. These definitions are general and meant to help you ask better questions.",
    glossary: [
      {
        term: "Replacement cost",
        definition:
          "A valuation method that generally pays to repair or replace damaged property without deducting for age or wear, up to policy limits.",
      },
      {
        term: "Actual cash value",
        definition:
          "A valuation method that generally accounts for depreciation, so the payment may be less than the cost of a new item.",
      },
      {
        term: "Peril",
        definition:
          "A cause of loss, such as fire, wind, or theft. Policies list the perils they cover or exclude.",
      },
      {
        term: "Endorsement",
        definition:
          "An addition to a policy that changes or adds coverage, sometimes called a rider.",
      },
      {
        term: "Sub-limit",
        definition:
          "A lower limit that applies to a specific category within a broader coverage, such as jewelry within personal property.",
      },
    ],
  },

  renters: {
    coverageIntro:
      "Renters insurance is smaller than a homeowners policy, since the owner insures the building. Its main parts relate to you and your belongings.",
    coverageTypes: [
      {
        name: "Personal property coverage",
        body: "Generally relates to your belongings in the rental, such as furniture, clothing, and electronics, when lost or damaged by a covered cause.",
        consider:
          "Ask whether belongings are valued at replacement cost or actual cash value, and how a rough inventory could help.",
      },
      {
        name: "Personal liability",
        body: "Generally relates to claims that you are responsible for injuring someone or damaging their property, including some legal costs subject to policy terms.",
        consider:
          "Ask what the limit is and how it applies if a guest is injured in your unit.",
      },
      {
        name: "Additional living expenses",
        body: "Generally relates to extra costs, such as temporary lodging, if a covered loss makes your rental unlivable.",
        consider:
          "Ask what kinds of costs are included and whether there is a time or dollar cap.",
      },
      {
        name: "Scheduled valuables",
        body: "Some policies let you list specific high-value items, such as jewelry or equipment, to address sub-limits on those categories.",
        consider:
          "Ask which items typically have sub-limits and what documentation is required to schedule them.",
      },
    ],
    glossaryIntro:
      "Renters insurance has a short vocabulary, but a few terms are worth knowing before you call.",
    glossary: [
      {
        term: "Personal property",
        definition:
          "Your movable belongings, as opposed to the building itself.",
      },
      {
        term: "Liability",
        definition:
          "Legal responsibility for harm or damage to others.",
      },
      {
        term: "Additional living expenses",
        definition:
          "Extra costs of living elsewhere temporarily after a covered loss at your home.",
      },
      {
        term: "Replacement cost",
        definition:
          "A valuation method that generally pays to replace items without deducting for age, up to policy limits.",
      },
      {
        term: "Named insured",
        definition:
          "A person listed on the policy as an insured. Whether roommates are included depends on the policy.",
      },
    ],
  },

  life: {
    coverageIntro:
      "Life insurance comes in a few broad families. Each is designed for a different purpose, and each has trade-offs in cost and flexibility.",
    coverageTypes: [
      {
        name: "Term life insurance",
        body: "Generally provides coverage for a set period, such as 10, 20, or 30 years. If the insured person dies during the term, the policy generally pays a benefit to the named beneficiaries.",
        consider:
          "Ask what happens when the term ends, and whether the policy can be renewed or converted.",
      },
      {
        name: "Whole life insurance",
        body: "A type of permanent coverage designed to last throughout life and typically including a cash value component that grows under the policy's terms.",
        consider:
          "Ask how premiums, cash value, and any loans against the policy work, and how it compares in cost with term.",
      },
      {
        name: "Universal life insurance",
        body: "A type of permanent coverage that typically offers more flexibility in premiums and death benefit, with a cash value component tied to the policy's terms.",
        consider:
          "Ask how flexibility works in practice and what could cause the policy to lapse.",
      },
      {
        name: "Riders and add-ons",
        body: "Optional features that can be added to some policies, for example for accelerated benefits in certain circumstances or waiving premiums if the insured becomes disabled.",
        consider:
          "Ask what each rider costs, what triggers it, and what limits apply.",
      },
    ],
    glossaryIntro:
      "Life insurance has its own vocabulary. These are the terms that come up most often.",
    glossary: [
      {
        term: "Death benefit",
        definition:
          "The amount a policy generally pays to the beneficiaries when the insured person dies, subject to policy terms.",
      },
      {
        term: "Beneficiary",
        definition: "The person or entity you name to receive the death benefit.",
      },
      {
        term: "Underwriting",
        definition:
          "The insurer's process of reviewing an application to decide whether to offer coverage and at what price.",
      },
      {
        term: "Cash value",
        definition:
          "A savings-like component in many permanent policies that accumulates under the policy's terms.",
      },
      {
        term: "Rider",
        definition: "An optional feature added to a policy for an additional cost or by agreement.",
      },
      {
        term: "Lapse",
        definition:
          "When a policy ends because required premiums were not paid.",
      },
    ],
  },

  travel: {
    coverageIntro:
      "Travel plans combine several kinds of benefits, and the mix differs from plan to plan. Each benefit typically has its own limit, conditions, and covered reasons.",
    coverageTypes: [
      {
        name: "Trip cancellation",
        body: "Generally relates to reimbursement of prepaid, non-refundable trip costs if you must cancel for a reason listed in the plan.",
        consider:
          "Ask for the list of covered reasons and what documentation is needed.",
      },
      {
        name: "Trip interruption",
        body: "Generally relates to unused trip costs and, in some plans, additional costs to return home, if a covered reason forces you to cut a trip short.",
        consider:
          "Ask how it differs from cancellation and what limits apply.",
      },
      {
        name: "Emergency medical and evacuation",
        body: "Generally relates to medical costs while traveling and, in some plans, transportation to appropriate medical care.",
        consider:
          "Ask how it coordinates with your regular health insurance and what limits apply.",
      },
      {
        name: "Baggage and delay benefits",
        body: "Generally relates to lost, damaged, or delayed baggage and, in some plans, expenses caused by significant travel delays.",
        consider:
          "Ask about per-item limits, waiting periods for delay benefits, and what receipts are needed.",
      },
    ],
    glossaryIntro:
      "These terms appear in most travel insurance plan descriptions.",
    glossary: [
      {
        term: "Covered reason",
        definition:
          "A specific event listed in the plan that qualifies for a cancellation or interruption benefit.",
      },
      {
        term: "Pre-existing condition",
        definition:
          "A health condition that existed before coverage began. Plans define this in different ways and treat it differently.",
      },
      {
        term: "Non-refundable",
        definition:
          "Trip costs that you cannot recover from the provider if you cancel, which is what cancellation benefits generally relate to.",
      },
      {
        term: "Medical evacuation",
        definition:
          "Transportation to a medical facility or home when care at your location is not adequate, subject to plan terms.",
      },
      {
        term: "Waiting period",
        definition:
          "A time that must pass before certain benefits, such as delay benefits, begin to apply.",
      },
    ],
  },

  business: {
    coverageIntro:
      "Business coverage is typically assembled from several policies or a combined package. Which pieces matter depends on the industry, location, equipment, and employees.",
    coverageTypes: [
      {
        name: "General liability",
        body: "Generally relates to claims by third parties alleging bodily injury or property damage connected to your business operations.",
        consider:
          "Ask what is excluded, such as professional advice, and whether contracts require specific limits.",
      },
      {
        name: "Commercial property",
        body: "Generally relates to buildings, equipment, inventory, and other business property when damaged by covered causes.",
        consider:
          "Ask how property is valued, which perils are covered, and how equipment off premises is treated.",
      },
      {
        name: "Business interruption",
        body: "Generally relates to lost income and certain continuing expenses when a covered event forces a temporary closure.",
        consider:
          "Ask what triggers it, how long it applies, and how income is calculated.",
      },
      {
        name: "Workers' compensation",
        body: "Generally relates to medical costs and lost wages for employees injured or made ill by their work. Most states require employers to carry it in some form, with rules that vary.",
        consider:
          "Ask what applies in your state and how employees and contractors are classified.",
      },
      {
        name: "Professional and cyber liability",
        body: "Professional liability generally relates to claims arising from advice or services you provide. Cyber coverage generally relates to costs connected to data breaches and certain online incidents.",
        consider:
          "Ask whether your type of business typically considers them and what each excludes.",
      },
    ],
    glossaryIntro:
      "Business insurance language can be dense. These are common terms to know.",
    glossary: [
      {
        term: "Certificate of insurance",
        definition:
          "A document summarizing a business's coverage, often requested by clients or landlords as proof of insurance.",
      },
      {
        term: "Additional insured",
        definition:
          "A party, often a client or landlord, who is added to a policy for certain protections under its terms.",
      },
      {
        term: "Business owner's policy",
        definition:
          "A package some insurers offer for smaller businesses that combines certain coverages, such as liability and property.",
      },
      {
        term: "Experience modification",
        definition:
          "A factor used in some workers' compensation pricing that reflects a business's claims history relative to peers.",
      },
      {
        term: "Aggregate limit",
        definition:
          "The most a policy will pay in total over a policy period, regardless of the number of claims.",
      },
    ],
  },

  pet: {
    coverageIntro:
      "Pet insurance plans differ most in what kinds of conditions they cover and how reimbursement is calculated.",
    coverageTypes: [
      {
        name: "Accident-only plans",
        body: "Generally relate to veterinary costs for injuries from accidents, such as a broken bone, and not to illness.",
        consider:
          "Ask which accidents and treatments are listed and how waiting periods apply.",
      },
      {
        name: "Accident and illness plans",
        body: "Generally add coverage for illnesses, which may include infections or digestive problems, subject to exclusions and waiting periods.",
        consider:
          "Ask which conditions are excluded, such as hereditary or pre-existing conditions.",
      },
      {
        name: "Wellness or routine care add-ons",
        body: "Optional coverage that some insurers offer for preventive care such as vaccinations or checkups, typically with fixed annual amounts.",
        consider:
          "Ask what the add-on costs compared with what it reimburses.",
      },
      {
        name: "Reimbursement structure",
        body: "How a plan reimburses is as important as what it covers: deductible, reimbursement percentage, and annual or lifetime limits all affect what you pay.",
        consider:
          "Ask whether the deductible is annual or per condition and whether limits change as your pet ages.",
      },
    ],
    glossaryIntro:
      "A few terms help make sense of pet insurance plan documents.",
    glossary: [
      {
        term: "Reimbursement rate",
        definition:
          "The percentage of an eligible veterinary bill the plan generally reimburses after the deductible.",
      },
      {
        term: "Waiting period",
        definition:
          "A period after the policy starts during which certain claims are not yet covered.",
      },
      {
        term: "Pre-existing condition",
        definition:
          "A condition that existed or showed signs before coverage began, commonly excluded.",
      },
      {
        term: "Annual limit",
        definition:
          "The most a plan will generally reimburse during a policy year.",
      },
      {
        term: "Hereditary condition",
        definition:
          "A condition passed through breeding. Some plans cover these and others exclude them.",
      },
    ],
  },
};

export const productSubpages = [
  {
    topic: "coverage-types",
    label: "Types of coverage",
    short: "Coverage types",
  },
  {
    topic: "key-terms",
    label: "Key terms explained",
    short: "Key terms",
  },
] as const;

export type ProductTopic = (typeof productSubpages)[number]["topic"];
