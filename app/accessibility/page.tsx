import { LegalPage } from "@/components/layout/LegalPage";
import { PhoneLink } from "@/components/ui/CallButton";
import { Placeholder } from "@/components/ui/Placeholder";
import { brand } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accessibility",
  description: `${brand.name}'s approach to making this website usable for everyone, and how to reach us if you have difficulty.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility" path="/accessibility">
      <p>
        We want everyone to be able to use {brand.domain}. We build with
        semantic HTML, keyboard-friendly navigation, visible focus indicators,
        readable color contrast, text alternatives for meaningful images, and
        respect for reduced-motion preferences.
      </p>

      <h2>Speak with us by phone</h2>
      <p>
        Our primary service is by telephone. If you have trouble using any part
        of this website, call <PhoneLink location="accessibility" /> and we
        will help you directly.
      </p>

      <h2>Feedback</h2>
      <p>
        If you find a barrier on this site, please let us know by phone so we
        can address it.
        <Placeholder> Add a conformance statement and a TTY/relay or email contact if provided </Placeholder>
      </p>

      <h2>Ongoing work</h2>
      <p>
        Accessibility is an ongoing effort. We have not completed a formal
        third-party audit, and some content may not yet meet every guideline.
      </p>
    </LegalPage>
  );
}
