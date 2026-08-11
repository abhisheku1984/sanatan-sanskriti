export default function LoadingSpinner({ message = 'Loading…' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-2 border-border rounded-full" />
        <div className="absolute inset-0 border-2 border-transparent border-t-vermillion rounded-full animate-spin" />
      </div>
      <p className="text-ink-faint text-sm">{message}</p>
    </div>
  );
}
