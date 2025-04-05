import { AuthClient } from '@/components/auth-client';
import { Link } from '@/lib/i18n/navigation';
import { api } from '@/lib/polar';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');
  const {
    result: { items },
  } = await api.products.list({
    isArchived: false,
    sorting: ['price_amount'],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="max-w-3xl pt-16 mx-auto flex flex-col gap-2 items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          {t('title')}
        </h1>

        <AuthClient />

        <div className="mt-16 grid grid-cols-2 gap-8 w-full">
          {items.map((product) => (
            <div
              className="rounded-xl p-5 bg-zinc-900/80 backdrop-blur-md text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all hover:translate-y-[-5px]"
              key={product.id}
            >
              <span className="w-fit mb-2 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 px-3 py-1 rounded-lg">
                {product.name}
              </span>
              <span className="block text-2xl font-black mt-4">
                ${product.prices[0].priceAmount / 100}
                <small className="text-zinc-500 font-thin">
                  /{product.prices[0].recurringInterval}
                </small>
              </span>
              <p className="text-justify mt-5 text-zinc-400">
                {product.description}
              </p>
              <Link
                className="bg-zinc-800 hover:bg-zinc-600 font-medium block text-center mt-5 border p-2 px-5 rounded-full"
                href={`/checkout?productId=${product.id}`}
              >
                Select plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
