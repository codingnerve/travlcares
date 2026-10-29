import type { ProductSlug } from "@/config/site";

export type Article = {
  slug: string;
  title: string;
  /** Short title for homepage tiles. */
  short: string;
  description: string;
  image: string;
  readingMinutes: number;
  intro: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  takeaway: string;
  relatedProducts: ProductSlug[];
  relatedArticles: string[];
};

export const articles: Article[] = [
  {
    slug: "understanding-deductibles",
    title: "Understanding Deductibles: What You Pay Before Insurance Pays",
    short: "Understanding deductibles",
    description:
      "A plain-language explanation of insurance deductibles, how they relate to premiums, and what to consider when choosing one.",
    image: "/images/articles/deductibles.jpg",
    readingMinutes: 4,
    intro:
      "A deductible is the amount you are generally responsible for paying toward a covered loss before the insurer pays its share. It is one of the most common terms in insurance and one of the most commonly misunderstood.",
    sections: [
      {
        heading: "How a deductible generally works",
        paragraphs: [
          "Suppose a covered repair costs $2,000 and your policy has a $500 deductible. In general terms, you would be responsible for the first $500 and the insurer would consider paying the remaining $1,500, subject to the policy's limits and conditions. This is an illustration, not a prediction of how any particular claim would be handled.",
          "Deductibles can be written in different ways. Some are a flat dollar amount. Some are a percentage of a coverage limit, which is common for certain weather-related losses on property policies. Some apply per claim, others per year, and in health-related products they may reset on a schedule.",
        ],
      },
      {
        heading: "The trade-off with premiums",
        paragraphs: [
          "In many types of insurance, choosing a higher deductible can reduce the premium, because you take on more of the cost of a smaller loss. A lower deductible can mean a higher premium but less out of pocket when a claim happens.",
          "Whether a given trade-off is worth it depends on your finances, not just the numbers on the page.",
        ],
      },
      {
        heading: "Questions worth asking yourself",
        paragraphs: [
          "Before choosing a deductible, it can help to think through a few practical points.",
        ],
        list: [
          "Could I comfortably pay this amount on short notice if I needed to make a claim?",
          "Does my lender or lessor require a maximum deductible?",
          "Is there more than one deductible on the policy, such as a separate one for certain events?",
          "Do I tend to file small claims, or would I only claim for larger losses?",
        ],
      },
    ],
    takeaway:
      "A deductible is a choice about how much risk you keep and how much you transfer. If you would like help thinking it through, an agent can explain how deductibles work on the specific policies you are considering.",
    relatedProducts: ["auto", "home", "pet"],
    relatedArticles: ["premiums-vs-coverage-limits", "questions-to-ask-before-choosing"],
  },
  {
    slug: "premiums-vs-coverage-limits",
    title: "Premiums vs. Coverage Limits: Two Numbers, Two Different Jobs",
    short: "Premiums vs. coverage limits",
    description:
      "Learn the difference between what you pay for insurance and the maximum a policy may pay, and why comparing only one can mislead you.",
    image: "/images/articles/coverage-limits.jpg",
    readingMinutes: 4,
    intro:
      "When people compare insurance, they often focus on one number: the price. But price is only half of the story. The other half is how much protection the policy is built to provide.",
    sections: [
      {
        heading: "What each term means",
        paragraphs: [
          "The premium is what you pay to keep the policy in force, whether monthly, quarterly, or annually. The coverage limit is, roughly, the most the policy will pay for a particular type of loss. A policy may have several limits, such as one per person, one per accident, and one for property damage.",
        ],
      },
      {
        heading: "Why a lower premium is not always the better deal",
        paragraphs: [
          "A policy with a low premium might also have low limits, high deductibles, or more exclusions. If a loss exceeds the limit, you may be responsible for the rest. Comparing premiums without comparing limits and deductibles can be like comparing prices on two products without checking what each one does.",
          "It also works the other way. A higher limit can provide more protection but is not automatically right for every situation. The question is what fits your circumstances.",
        ],
      },
      {
        heading: "Things to compare side by side",
        paragraphs: [],
        list: [
          "The limit for each type of coverage, and how each is written.",
          "The deductible that applies to each coverage.",
          "What is excluded or limited.",
          "Any conditions you need to meet for coverage to apply.",
        ],
      },
    ],
    takeaway:
      "Treat the premium as one input rather than the whole answer. An agent can walk through how limits and deductibles interact with price on the options you are considering.",
    relatedProducts: ["auto", "home", "business"],
    relatedArticles: ["understanding-deductibles", "choosing-the-right-coverage"],
  },
  {
    slug: "choosing-the-right-coverage",
    title: "Choosing the Right Coverage: A Practical Starting Point",
    short: "Choosing appropriate coverage",
    description:
      "A step-by-step way to think about what you need to protect, what is required, and what is optional before you talk to an agent.",
    image: "/images/articles/choosing-coverage.jpg",
    readingMinutes: 5,
    intro:
      "There is no single correct amount of insurance. Choosing coverage is about matching protection to your situation. A little preparation makes any conversation with an agent more useful.",
    sections: [
      {
        heading: "Start with what you want to protect",
        paragraphs: [
          "Make a short list of the things that would cause real hardship if they were lost, damaged, or if you were held responsible for them: a home, a car, income, a business, a trip, a pet. This list becomes the backbone of your conversation.",
        ],
      },
      {
        heading: "Separate what is required from what is optional",
        paragraphs: [
          "Some coverage is required by law, such as liability coverage for drivers in most states, or by a lender, lessor, or landlord. Other coverage is optional. Knowing which is which helps you decide where there is room for choice.",
        ],
      },
      {
        heading: "Think about what you could absorb yourself",
        paragraphs: [
          "Consider the largest unexpected cost you could pay without serious strain. This is useful when deciding about deductibles and when thinking about which risks you want to transfer to an insurer.",
        ],
      },
      {
        heading: "Gather the basics before you call",
        paragraphs: [],
        list: [
          "Your current policies, if any, and their renewal dates.",
          "Details about what you want to protect: addresses, vehicles, dates, or business information.",
          "Any requirements from a lender, lease, or contract.",
          "A list of the questions you most want answered.",
        ],
      },
    ],
    takeaway:
      "Good coverage choices usually come from clear priorities and clear questions. When you are ready, an agent can help you think through the options available.",
    relatedProducts: ["auto", "renters", "life"],
    relatedArticles: ["questions-to-ask-before-choosing", "premiums-vs-coverage-limits"],
  },
  {
    slug: "questions-to-ask-before-choosing",
    title: "Questions to Ask Before You Choose a Policy",
    short: "Questions to ask before you choose",
    description:
      "A practical checklist of questions to ask an agent or insurer before selecting an insurance policy.",
    image: "/images/articles/questions-to-ask.jpg",
    readingMinutes: 3,
    intro:
      "The right questions can reveal more than a quote ever will. Here is a checklist you can bring to any conversation about insurance.",
    sections: [
      {
        heading: "About what is covered",
        paragraphs: [],
        list: [
          "What specific events or losses does this policy cover?",
          "What is excluded, and are there ways to address those gaps?",
          "Are there limits on certain items or categories?",
        ],
      },
      {
        heading: "About what you pay",
        paragraphs: [],
        list: [
          "What is the premium and how often is it due?",
          "What deductibles apply, and are there different ones for different events?",
          "Can the premium change at renewal, and what generally affects that?",
        ],
      },
      {
        heading: "About how it works in practice",
        paragraphs: [],
        list: [
          "What conditions must be met for coverage to apply?",
          "How do I report a claim, and what happens next?",
          "How do I make changes to the policy or cancel it?",
          "Where can I read the full policy terms before I decide?",
        ],
      },
    ],
    takeaway:
      "You do not need to know the industry vocabulary to ask good questions. Plain-language questions are exactly what an agent should be ready to answer.",
    relatedProducts: ["auto", "home", "travel"],
    relatedArticles: ["choosing-the-right-coverage", "exclusions-and-policy-conditions"],
  },
  {
    slug: "exclusions-and-policy-conditions",
    title: "Exclusions and Policy Conditions: The Fine Print That Matters",
    short: "Exclusions and policy conditions",
    description:
      "Understand what exclusions and conditions are in an insurance policy and why reading them is as important as reading what is covered.",
    image: "/images/articles/exclusions.jpg",
    readingMinutes: 4,
    intro:
      "A policy is defined as much by what it leaves out as by what it includes. Exclusions and conditions are where many misunderstandings about coverage begin.",
    sections: [
      {
        heading: "What an exclusion is",
        paragraphs: [
          "An exclusion is a cause of loss, type of property, or situation the policy states it will not cover. Common examples across different lines include certain kinds of water damage on property policies, intentional acts, or pre-existing conditions in some travel and pet policies. What is excluded varies a great deal by product and by insurer.",
        ],
      },
      {
        heading: "What a condition is",
        paragraphs: [
          "Conditions are the things you must do, or circumstances that must be true, for coverage to apply. Examples may include reporting a loss within a certain period, protecting property from further damage, providing documentation, or keeping information up to date.",
        ],
      },
      {
        heading: "How to find them",
        paragraphs: [
          "The full policy document, not a marketing summary, is where exclusions and conditions are set out. Look for sections labeled exclusions, limitations, conditions, or duties after a loss. If the language is unclear, that is a good moment to ask for an explanation before you rely on the policy.",
        ],
      },
      {
        heading: "Why it matters before a claim",
        paragraphs: [
          "It is far easier to ask about exclusions before you have a loss than after. Knowing what is not covered gives you the chance to address a gap, adjust expectations, or choose a different option.",
        ],
      },
    ],
    takeaway:
      "General information about exclusions is helpful, but your actual policy controls. Always review the terms of any policy you are considering and ask an agent if something is unclear.",
    relatedProducts: ["home", "travel", "pet"],
    relatedArticles: ["questions-to-ask-before-choosing", "understanding-deductibles"],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
