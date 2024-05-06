
import Head from "next/head";



// Exporta una función de componente para el Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Aquí puedes incluir tus meta tags con la metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tienda Glow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {children}
      <body></body>
    </html>
  );
}

