import { notFound } from 'next/navigation'
import Head from 'next/head'
import { Header } from 'src/components/header'
import { ReactNode } from 'react'
import { createTranslator, NextIntlClientProvider } from 'next-intl'
import { LANGUAGES } from 'src/lib/constants'
import { Metadata } from 'next'

type Props = {
  children: ReactNode
  params: { locale: string }
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../public/locales/${locale}/translation.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  return LANGUAGES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const messages = await getMessages(locale)

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages })

  return {
    title: t('home.title'),
    description: t('home.title'),
    keywords: 'nextjs,react,typescript,tailwindcss,template,starter,boilerplate',
  }
}

export default async function LocaleLayout({ children, params: { locale } }: any) {
  const messages = await getMessages(locale)
  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
