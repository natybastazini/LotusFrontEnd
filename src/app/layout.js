import { abeezee, inter } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Lotus",
    default: "Para sua maternidade"
  },
  description: "Site Lotus",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={` ${inter.variable} ${abeezee.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}