import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-cherry-200 dark:border-cherry-800/40 py-8 px-6 text-center">
      <p className="text-sm text-cherry-700/80 dark:text-cherry-300/70">
        {t.footer.made}
        <strong className="text-cherry-800 dark:text-cherry-200">{t.footer.by}</strong>
        {' · '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
