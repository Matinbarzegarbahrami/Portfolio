import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const cookie = await cookies()
  const locale = cookie.get("locale")?.value || "en";

  return {
    locale,
    messages: (await import(`../app/src/messages/${locale}.json`)).default
  };
});