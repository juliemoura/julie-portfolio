import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cherry-900 dark:text-cherry-100">
            {t.services.titlePrefix}
            <span className="text-cherry-600 italic">{t.services.titleAccent}</span>
          </h2>
          <p className="mt-4 text-cherry-800/80 dark:text-cherry-200/70 text-lg">
            {t.services.subtitle}
          </p>
        </Reveal>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={i * 100}
              className="group relative h-full"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white to-cherry-50/40 dark:from-cherry-950/50 dark:to-cherry-900/20 border border-cherry-200 dark:border-cherry-800/50 hover:border-cherry-400 dark:hover:border-cherry-600 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cherry-500/20">
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3 origin-bottom-left">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-cherry-900 dark:text-cherry-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-cherry-800/80 dark:text-cherry-200/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
