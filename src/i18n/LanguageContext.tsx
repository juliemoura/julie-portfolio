import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  detectBrowserLang,
  translations,
  type Dict,
  type Lang,
  SUPPORTED_LANGS,
} from './translations'

const STORAGE_KEY = 'portfolio.lang'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
  langs: Lang[]
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored
  } catch {
    // ignore storage errors (private mode, etc.)
  }
  return detectBrowserLang()
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = translations[lang].htmlLang
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', translations[lang].meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: translations[lang], langs: SUPPORTED_LANGS }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
