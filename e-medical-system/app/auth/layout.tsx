export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-blue-50 to-blue-100">{children}</body>
    </html>
  );
}
