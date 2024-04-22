// import { Inter } from "next/font/google";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import '@/styles/typography.scss'
import Footer from "@/components/shared/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-roboto",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL('https://3banksoffer.vercel.app/'),
  title: "3banksoffer",
  description: "Find the right one for your project - Get 3 banks offers",
  openGraph: {
    title: "3banksoffer",
    description: "Find the right one for your project - Get 3 banks offers",
    images: [
      {
        url: "/hero_image.png",
        width: 800,
        height: 600,
        alt: "3banksoffer"
      },
    ],
    type: "website",
    // url: "https://3banksoffer.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${poppins.variable}`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
