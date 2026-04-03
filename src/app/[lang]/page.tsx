import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Expertises from '@/components/Expertises';
import Offer from '@/components/Offer';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FooterWithLang from '@/components/FooterWithLang';
import { getTranslations, isValidLang, type Lang } from '@/lib/i18n';
import { langs } from '@/lib/i18n';

export function generateStaticParams() {
  return langs.map(({ code }) => ({ lang: code }));
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang: langParam } = await params;
  const lang: Lang = isValidLang(langParam) ? langParam : 'en';
  const t = getTranslations(lang);

  return (
    <>
      <Navbar t={t} lang={lang} />
      <main>
        <Hero t={t} lang={lang} />
        <Solutions t={t} />
        <Expertises t={t} />
        <Offer t={t} />
        <Process t={t} />
        <Portfolio t={t} />
        <FAQ t={t} />
        <Contact t={t} />
      </main>
      <FooterWithLang t={t} lang={lang} />
    </>
  );
}
