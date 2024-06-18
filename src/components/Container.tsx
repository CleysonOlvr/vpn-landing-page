export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-32 py-12">{children}</div>;
}
