import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEIER GMBH BAUUNTERNEHMEN | Startseite – Die Zukunft bauen",
  description: "Offizielle Startseite der Meier GmbH Bauunternehmen. Seit über 50 Jahren Ihr Experte für anspruchsvollen Hoch- und Tiefbau in Deutschland. Präzision. Innovation. Nachhaltigkeit.",
  keywords: ["Meier GmbH", "Startseite", "Bauunternehmen", "Hochbau", "Tiefbau", "BIM", "Deutschland", "Ingenieurbau"],
  authors: [{ name: "Meier GmbH Bauunternehmen" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
