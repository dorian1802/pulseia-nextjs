'use client';

import { useRouter, usePathname } from 'next/navigation';
import { langs, type Lang } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: Lang) => {
    // Replace current lang in pathname with new lang
    const segments = pathname.split('/');
    if (segments[1] && langs.find(l => l.code === segments[1])) {
      segments[1] = lang;
      router.push(segments.join('/'));
    } else {
      router.push(`/${lang}`);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {langs.map(({ code, name }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
            currentLang === code
              ? 'text-accent-cyan bg-accent-cyan/10'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
