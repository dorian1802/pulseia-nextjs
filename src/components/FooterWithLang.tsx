'use client';

import Footer from './Footer';
import { useRouter, usePathname } from 'next/navigation';
import { type Lang } from '@/lib/i18n';

interface FooterWithLangProps {
  t: React.ComponentProps<typeof Footer>['t'];
  lang: Lang;
}

export default function FooterWithLang({ t, lang }: FooterWithLangProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (newLang: string) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return <Footer t={t} lang={lang} onLangChange={handleLangChange} />;
}
