import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Placeholder } from "@/components/ui/Placeholder";
import { business } from "@/config/site";

export function LegalPage({
  title,
  path,
  children,
}: {
  title: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-paper">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs items={[{ label: title, href: path }]} />
          <h1 className="h-section mt-6">{title}</h1>
          <p className="mt-3 text-muted">
            Effective date:{" "}
            {business.legalEffectiveDate ?? <Placeholder>Effective date</Placeholder>}
          </p>
        </div>
      </section>
      <section className="section-y bg-white">
        <div className="container-page">
          <div
            role="note"
            className="mb-10 max-w-3xl border-l-4 border-sun-400 bg-sun-100 p-5 text-sm text-navy-900"
          >
            <strong>Draft template.</strong> This page is a starting draft
            written for a website with no forms, accounts, or online
            transactions. It has not been reviewed by an attorney and is not
            legal advice. The business must have it reviewed and completed
            before launch.
          </div>
          <div className="prose-copy">{children}</div>
        </div>
      </section>
    </>
  );
}
