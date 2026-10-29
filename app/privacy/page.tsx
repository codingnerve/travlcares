import { LegalPage } from "@/components/layout/LegalPage";
import { PhoneLink } from "@/components/ui/CallButton";
import { Placeholder } from "@/components/ui/Placeholder";
import { brand, business } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${brand.name} handles information on this website and when you contact us by phone.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy">
      <p>
        This policy explains how{" "}
        {business.legalName ?? <Placeholder>Legal business name</Placeholder>}{" "}
        (&ldquo;{brand.name},&rdquo; &ldquo;we&rdquo;) handles information in
        connection with {brand.domain}.
      </p>

      <h2>This website does not collect enquiries</h2>
      <p>
        {brand.domain} is an information website. It has no contact form, quote
        form, or customer account, and it does not ask you to enter personal
        information. We do not sell insurance policies through the website.
      </p>

      <h2>Information collected automatically</h2>
      <p>
        Like most websites, our hosting provider may automatically record
        technical information when you visit, such as IP address, browser type,
        pages requested, and the date and time of the request. This is used to
        operate, secure, and maintain the site.
      </p>
      <p>
        <Placeholder>
          If analytics, advertising, or call-tracking tools are added, describe
          them here, including what is collected and how to opt out.
        </Placeholder>
      </p>

      <h2>When you call us</h2>
      <p>
        If you call <PhoneLink location="privacy" />, we will receive your
        phone number and whatever you choose to tell us. Please do not share
        sensitive information, such as your Social Security number or payment
        card details, unless we have told you how it will be handled.
      </p>
      <p>
        <Placeholder>
          Describe how calls are handled: whether calls are recorded or
          monitored, how long information is kept, and who it is shared with
          (for example, insurers).
        </Placeholder>
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights regarding your
        personal information, such as access, correction, or deletion.
        <Placeholder>
          {" "}
          Describe how to make a request and applicable state-specific notices
          (for example California) once confirmed with counsel.
        </Placeholder>
      </p>

      <h2>Children</h2>
      <p>
        This website is intended for adults and is not directed to children
        under 13.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy. The effective date at the top shows when it
        was last changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to us by phone at{" "}
        <PhoneLink location="privacy-contact" />.
      </p>
    </LegalPage>
  );
}
