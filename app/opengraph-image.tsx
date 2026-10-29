import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { brand } from "@/config/site";

export const alt = `${brand.name}: insurance guidance by phone`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const logoData = fs.readFileSync(
    path.join(process.cwd(), "public/images/logo-horizontal-dark.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#102A43",
          color: "#fff",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={360}
            height={100}
            alt={brand.name}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Protection for what matters most.
          </div>
          <div style={{ fontSize: 34, color: "#C3D3E2" }}>
            Explore your insurance options, then call an agent.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
