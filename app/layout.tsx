import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '苏雄的读书笔记',
    template: '%s | 苏雄的读书笔记',
  },
  description: '记录阅读的点滴，沉淀思考的碎片',
  keywords: ['读书笔记', '阅读', '笔记', '书籍', '学习'],
  authors: [{ name: '苏雄' }],
  creator: '苏雄',
  metadataBase: new URL('https://reading.suxiong.me'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://reading.suxiong.com',
    title: '苏雄的读书笔记',
    description: '记录阅读的点滴，沉淀思考的碎片',
    siteName: '苏雄的读书笔记',
  },
  twitter: {
    card: 'summary_large_image',
    title: '苏雄的读书笔记',
    description: '记录阅读的点滴，沉淀思考的碎片',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
