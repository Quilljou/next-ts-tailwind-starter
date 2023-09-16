import { redirect } from 'next/navigation'
import { DEFAULT_LOCALE } from 'src/lib/constants'

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(DEFAULT_LOCALE)
}
