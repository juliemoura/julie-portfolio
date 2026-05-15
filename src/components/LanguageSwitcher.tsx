import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

const LABELS: Record<Lang, string> = {
  pt: 'PT',
  en: 'EN',
  fr: 'FR',
}

const FULL: Record<Lang, string> = {
  pt: 'Português',
  en: 'English',
  fr: 'Français',
}

export function LanguageSwitcher() {
  const { lang, setLang, langs, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.langSwitcher.label}
      className="inline-flex items-center gap-0.5 rounded-full border border-cherry-200 dark:border-cherry-800/60 bg-white/60 dark:bg-cherry-950/40 p-0.5 text-xs font-semibold"
    >
      {langs.map((code) => {
        const active = code === lang
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-label={FULL[code]}
            aria-pressed={active}
            className={
              'px-2.5 py-1 rounded-full transition-colors ' +
              (active
                ? 'bg-cherry-600 text-white shadow-sm shadow-cherry-500/40'
                : 'text-cherry-700 dark:text-cherry-300 hover:bg-cherry-100 dark:hover:bg-cherry-900/60')
            }
          >
            {LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
