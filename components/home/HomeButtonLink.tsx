import { LocaleLink } from '@/components/LocaleLink';

type Variant = 'primary' | 'secondary' | 'outline';

type Props = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-malta-red text-white hover:bg-malta-red-600 shadow-sm',
  secondary: 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50',
  outline: 'border border-white/70 bg-white/10 text-white hover:bg-white/20',
};

export function HomeButtonLink({ href, variant = 'primary', children, className = '' }: Props) {
  return (
    <LocaleLink
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors sm:text-base ${variantClasses[variant]} ${className}`}
    >
      {children}
    </LocaleLink>
  );
}
