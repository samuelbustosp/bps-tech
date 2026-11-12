import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bps | Software Factory · Ingeniería de Datos, BI & Machine Learning",
  description:
    "Software factory especializada en desarrollo de software a medida, ingeniería y pipelines de datos, Business Intelligence, dashboards ejecutivos, Machine Learning y planificación técnica rigurosa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
