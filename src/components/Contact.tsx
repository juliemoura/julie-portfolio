import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

const EMAIL = 'mourajulie0@gmail.com'
const PHONE_DISPLAY = '+55 21 96541-8368'
const PHONE_HREF = 'tel:+5521965418368'

export function Contact() {
  const { t } = useLanguage()

  const contacts = [
    {
      label: t.contact.labels.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: '✉️',
    },
    {
      label: t.contact.labels.phone,
      value: PHONE_DISPLAY,
      href: PHONE_HREF,
      icon: '📱',
    },
    {
      label: t.contact.labels.linkedin,
      value: '/in/juliemoura',
      href: 'https://linkedin.com/in/juliemoura',
      icon: '💼',
    },
    {
      label: t.contact.labels.github,
      value: '@juliemoura',
      href: 'https://github.com/juliemoura',
      icon: '🐙',
    },
  ]

  return (
    <section id="contato" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cherry-900 dark:text-cherry-100">
            {t.contact.titlePrefix}
            <span className="text-cherry-600 italic">{t.contact.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-cherry-800/80 dark:text-cherry-200/80">
            {t.contact.subtitle}
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-block mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-cherry-500 to-cherry-700 text-white font-semibold text-lg shadow-xl shadow-cherry-500/40 hover:shadow-cherry-500/60 hover:-translate-y-0.5 transition-all"
          >
            {t.contact.cta}
          </a>
        </Reveal>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="block p-5 rounded-2xl bg-white dark:bg-cherry-950/40 border border-cherry-200 dark:border-cherry-800/50 hover:border-cherry-400 dark:hover:border-cherry-600 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="font-medium text-cherry-700 dark:text-cherry-300">
                  {c.label}
                </div>
                <div className="text-sm text-cherry-800/70 dark:text-cherry-200/70 mt-1 break-all">
                  {c.value}
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
