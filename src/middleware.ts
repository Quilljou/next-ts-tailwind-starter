import createMiddleware from 'next-intl/middleware'
import { LANGUAGES } from './lib/constants'

export default createMiddleware({
  locales: LANGUAGES,
  defaultLocale: 'en',
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
