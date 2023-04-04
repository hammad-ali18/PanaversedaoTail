// These styles apply to every route in the application
import './globals.css';
import Header from '@/Components/layout/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {children}</body>
    </html>
  );
}