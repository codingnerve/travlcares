import { LegalPage } from "@/components/layout/LegalPage";
import { Placeholder } from "@/components/ui/Placeholder";
import { brand, business } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: `The terms for using the ${brand.name} website, including important information about its educational content.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" path="/terms">
      <p>
        These terms apply to your use of {brand.domain}, operated by{" "}
        {business.legalName ?? <Placeholder>Legal business name</Placeholder>}.
        By using the site you agree to them.
      </p>

      <h2>Educational information only</h2>
      <p>
        Content on this website is general and educational. It is not an offer
        or binding quotation of insurance, is not a substitute for the terms of
        any insurance policy, and is not legal, tax, or financial advice.
        Coverage, eligibility, exclusions, limits, and pricing are determined
        by the specific policy and the insurer.
      </p>

      <h2>No policy is issued through this website</h2>
      <p>
        You cannot purchase, bind, or change a policy on this website. Speaking
        with us by phone does not create coverage, and coverage does not begin
        until a policy is issued by an insurer according to its terms.
      </p>

      <h2>Licensing and availability</h2>
      <p>
        Products and services may not be available in all states.{" "}
        {business.licensing ?? (
          <Placeholder>
            Agency licensing and licensed-state disclosures, as required
          </Placeholder>
        )}
      </p>

      <h2>Accuracy</h2>
      <p>
        We try to keep information accurate and current, but we do not warrant
        that it is complete or error-free. Content may change without notice.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site&rsquo;s text, design, and logo are owned by us or our licensors.
        You may view the site for personal, non-commercial purposes but may not
        copy or reuse it without permission.
      </p>

      <h2>Third-party names</h2>
      <p>
        Any other company names mentioned belong to their owners. {brand.name}{" "}
        is not affiliated with other insurance brands unless stated expressly.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        <Placeholder>
          Limitation of liability, governing law, and dispute terms to be
          drafted or confirmed by counsel.
        </Placeholder>
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. Continued use of the site after a change
        means you accept the updated terms.
      </p>
    </LegalPage>
  );
}
