import { useLocale } from 'next-intl'
import { useMemo } from 'react'
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from 'src/lib/utils'
import { Languages, ChevronDown } from 'lucide-react'
import { LANGUAGES } from 'src/lib/constants'
import { usePathname } from 'next-intl/client'
import Link from 'next-intl/link'

const getLocaleDisplayName = (locale: string, displayLocale?: string) => {
  const displayName = new Intl.DisplayNames([displayLocale || locale], {
    type: 'language',
  }).of(locale)!
  return displayName.charAt(0).toLocaleUpperCase() + displayName.slice(1)
}

export const LocaleSwitcher = () => {
  const currentLanguage = useLocale()
  const pathname = usePathname()

  const localesAndNames = useMemo(() => {
    return LANGUAGES.map((locale) => ({
      locale,
      name: getLocaleDisplayName(locale),
    }))
  }, [])

  return (
    <div className="flex items-end">
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-1 fill-black text-black">
            <Languages size={18} />
            {currentLanguage && getLocaleDisplayName(currentLanguage)}
            <ChevronDown size={12} />
          </div>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="absolute mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white p-0 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {localesAndNames.map(({ locale, name }) => {
            const isSelected = currentLanguage === locale
            return (
              <Link href={pathname} locale={locale} key={locale}>
                <div
                  key={locale}
                  className={cn(`relative w-auto cursor-pointer select-none px-4 py-2 text-black hover:bg-zinc-200`)}
                >
                  <span className={cn(`block truncate`, isSelected && 'font-bold text-primary')}>{name}</span>
                </div>
              </Link>
            )
          })}
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </div>
  )
}
