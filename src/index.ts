import { utm } from '@distributed/utm';
import Cookie from 'cookie-universal';

interface CustodiParams {
  query: string;
  timeout?: number;
}

export function custodi({ timeout = 30, query }: CustodiParams): void {
  const utms = utm(query);
  const now = new Date();
  const cookies = Cookie();

  function updateCookie(key: string, value: string, expires: Date): void {
    if (value) {
      cookies.set(key, value, {
        path: '/',
        expires,
      });
    }
  }

  function updateExpiration(key: string, expires: Date): void {
    const existingValue = cookies.get(key);

    if (existingValue) {
      cookies.set(key, existingValue, {
        expires,
      });
    }
  }

  function removeCookies(): void {
    for (const key in utms) {
      cookies.remove(key);
    }
  }

  const expires = new Date(now.setMinutes(now.getMinutes() + timeout));

  let removed = false;

  for (const key in utms) {
    const param = key;

    updateExpiration(param, expires);

    const value = utms[key];

    if (value) {
      if (!removed) {
        removeCookies();
        removed = true;
      }
      updateCookie(param, value as string, expires);
    }
  }
}
