import { LANGUAGES } from './src/lib/constants'

export default {
  baseLocale: 'en',
  locales: LANGUAGES,
  localePath: 'public/locales',
  openAIApiKey: process.env.OPENAI_API_KEY,
  openAIApiUrl: process.env.OPENAI_API_URL,
}
