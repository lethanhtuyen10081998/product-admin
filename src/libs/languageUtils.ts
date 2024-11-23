import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const setLocale = (locale: string) => {
  Cookies.set('locale', locale, { expires: 365 });
};

export const getLocale = () => {
  const locale = Cookies.get('locale');
  if (locale) {
    return locale;
  }

  return 'vn';
};

export const useSetLocale = () => {
  const router = useRouter();
  useEffect(() => {
    const locale = getLocale();
    setLocale(locale);
    router.push(router.pathname, router.asPath, { locale });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default getLocale;
