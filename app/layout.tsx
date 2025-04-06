import "./globals.css";

export const metadata = {
  title: "Maersk Portfolio",
  description: "Use case portfolio of delivery optimization at Maersk",
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
