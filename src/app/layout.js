import "./globals.css";
 
export const metadata = {
  title: "Shop-co",
  description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
  openGraph: {
    title: "Shop-co",
    description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Shop-co Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop-co",
    description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
