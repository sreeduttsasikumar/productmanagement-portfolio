import "./globals.css";

export const metadata = {
  title: "Sreedutt Sasikumar – Product Management Portfolio",
  description: "A showcase of product management use cases and achievements by Sreedutt Sasikumar.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
