'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

const defaultLocale = 'en';

type Props = Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string };

export function LocaleLink({ href, ...rest }: Props) {
  const locale = useLocale();
  const path = href || '/';
  const localizedHref = locale === defaultLocale ? path : `/${locale}${path === '/' ? '' : path}`;
  return <Link href={localizedHref} {...rest} />;
}
