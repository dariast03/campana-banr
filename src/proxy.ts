import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { updateSession } from '@/lib/supabase/middleware';
import { type NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  // First, handle internationalization
  const intlResponse = await intlMiddleware(request);
  if (intlResponse) return intlResponse;

  // Then, handle Supabase session
  return await updateSession(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
