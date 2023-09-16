'use client'

import { useTranslations } from 'next-intl'

export const runtime = 'edge'

export default function Home() {
  const t = useTranslations('home')

  return <div className="flex h-screen items-center justify-center">{t('title')}</div>
}
