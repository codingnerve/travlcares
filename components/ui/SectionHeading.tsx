export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  align = "left",
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow ${dark ? "!text-sun-300" : ""}`}>{eyebrow}</p>
      )}
      <Tag id={id} className={`h-section mt-3 ${dark ? "!text-white" : ""}`}>{title}</Tag>
      {children && (
        <div
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-navy-200" : "text-muted"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
