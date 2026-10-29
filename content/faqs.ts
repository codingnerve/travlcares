export type Faq = { q: string; a: string };

/** Homepage and general FAQs. Product-specific FAQs live in products.ts. */
export const generalFaqs: Faq[] = [
  {
    q: "How can I speak with an insurance agent?",
    a: "Call the Travlcares phone number shown on this page. On a mobile device, tapping any call button will open your phone's dialer.",
  },
  {
    q: "What information should I have ready when I call?",
    a: "It helps to have the basics of what you want to protect (for example vehicle, home, or trip details), any current policy and its renewal date, and a short list of your questions. Please do not share sensitive details such as your Social Security number until you have confirmed how that information will be handled.",
  },
  {
    q: "Can someone help me understand different coverage options?",
    a: "That is the purpose of the call. An agent can explain how different types of coverage generally work and what to consider. Actual coverage always depends on the terms of the specific policy.",
  },
  {
    q: "Does every policy cover the same situations?",
    a: "No. Policies differ in what they cover, what they exclude, their limits, and their deductibles. Two policies with the same name can be quite different, which is why the policy terms matter.",
  },
  {
    q: "How do deductibles work?",
    a: "A deductible is the amount you are generally responsible for before the insurer pays its share of a covered loss. Deductibles vary by policy and coverage. Our guide to deductibles explains the basics with an example.",
  },
  {
    q: "How can I find out which insurance products are available?",
    a: "Browse the insurance products on this website, or call Travlcares and ask. Availability can depend on where you live, so an agent can tell you what is available for your situation.",
  },
];
