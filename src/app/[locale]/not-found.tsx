'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Button } from 'src/components/ui/button'

export default function ErrorPage() {
  const t = useTranslations('notfound')

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-left">
      <h1>{t('oops')}</h1>
      <p>{t('title')}</p>
      <Button asChild>
        <Link href="/">{t('backtohomepage')}</Link>
      </Button>
    </div>
  )
}
