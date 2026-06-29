'use client';

type Props = {
  current: number;
  total: number;
  label: string;
};

export function CareerFitProgress({ current, total, label }: Props) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>{label}</span>
        <span className="font-medium text-gray-900">{pct}%</span>
      </div>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-malta-red transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
