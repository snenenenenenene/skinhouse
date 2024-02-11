export default function page({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
