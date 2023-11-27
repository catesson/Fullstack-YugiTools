'use client'
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { Header } from "./component/layout/Header";
import { ReduxProvider } from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

 const metadata = {
  title: "Yugi Tools",
  description: "Constructeur de deck et gestionnaire de collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="height=device-height, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>

      <body className="h-full min-h-screen w-screen minWidth">
        <ReduxProvider>
          <Header />

          <div className="w-full m-auto ">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
