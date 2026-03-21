'use client';

import { Link } from '@/i18n/navigation';

type Props = Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string };

/** Locale-aware link (uses next-intl routing: EN unprefixed, TR under /tr). */
export function LocaleLink({ href, ...rest }: Props) {
  return <Link href={href || '/'} {...rest} />;
}
