import { CherryIcon } from './CherryIcon'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'

export function Header() {
  const { t } = useLanguage()
  const links = [
    { href: '#sobre', label: t.nav.about },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#projetos', label: t.nav.projects },
    { href: '#contato', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cherry-50/70 dark:bg-cherry-950/60 border-b border-cherry-200/60 dark:border-cherry-800/40">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a
          href="#topo"
          aria-label={t.nav.brandAria}
          className="flex items-center gap-2 text-cherry-700 dark:text-cherry-300 hover:text-cherry-600 transition-colors"
        >
          <CherryIcon size={28} />
          <span className="font-display text-xl font-bold">Julie Moura</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-8 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-cherry-900 dark:text-cherry-200 hover:text-cherry-600 dark:hover:text-cherry-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}
