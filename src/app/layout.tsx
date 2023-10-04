import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import RecoilRootWrapper from '@components/RecoilWrapper';
import ThemeProvider from '@components/ThemeProvider';
import StyledComponentsRegistry from '@lib/registy';
import GlobalStyles from '@components/GlobalStyles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '영문주소로 변환',
  description: '한국 주소를 영문 주소로 변환하세요.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <RecoilRootWrapper>
            <ThemeProvider>{children}</ThemeProvider>
            <GlobalStyles />
          </RecoilRootWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
