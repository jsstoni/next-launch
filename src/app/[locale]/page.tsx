import { AuthClient } from '@/components/auth-client';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-2 border-2 p-4">
      <h1 className="text-4xl font-black">{t('title')}</h1>
      <AuthClient />
    </div>
  );
}
