export const metadata = {
  title: "Maersk Portfolio",
  description: "Use case portfolio of delivery optimization at Maersk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#f9f9f9' }}>
        {children}
      </body>
    </html>
  );
}
