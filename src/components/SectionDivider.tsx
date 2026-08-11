export default function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-border" />
      <span className="text-turmeric text-xs tracking-widest">✦</span>
      <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-border" />
    </div>
  );
}
