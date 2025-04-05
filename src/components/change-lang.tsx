'use client';

import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { Button } from './ui/button';

export default function ChangeLang({ title }: { title: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (lang: 'en' | 'es') => {
    router.push(pathname, { locale: lang });
  };

  return (
    <div className="flex items-center gap-2 self-start">
      <Button variant="secondary" onClick={() => handleLangChange('en')}>
        🇬🇧 English
      </Button>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        {title}
      </h1>
      <Button variant="secondary" onClick={() => handleLangChange('es')}>
        🇪🇸 Español
      </Button>
    </div>
  );
}
