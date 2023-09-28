'use client';

import { Theme } from '@radix-ui/themes';
import themeState from '@recoil/theme/atom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    if (typeof window !== 'undefined' && !theme) {
      // 기본 테마가 없을때 선호 설정된 테마 적용
      const isPreferDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

      // recoil persist 동기화를 위한 timeout
      setTimeout(() => {
        setTheme(isPreferDark ? 'dark' : 'light');
      }, 0);
    }
  }, [theme, setTheme]);

  return (
    <Theme appearance={theme || 'light'} accentColor="blue">
      {children}
    </Theme>
  );
};

export default ThemeProvider;
