import { auth, getSession } from '@/lib/auth';

export default async function ProtectedPage() {
  const session = await getSession();

  if (!session) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-2 border-2 p-4">
        Unauthorized
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-2 border-2 p-4"></div>
  );
}
