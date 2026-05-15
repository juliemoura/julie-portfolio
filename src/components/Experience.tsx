import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cherry-900 dark:text-cherry-100">
            {t.experience.titlePrefix}
            <span className="text-cherry-600">{t.experience.titleAccent}</span>
          </h2>
          <p className="mt-4 text-cherry-800/80 dark:text-cherry-200/70 text-lg">
            {t.experience.subtitle}
          </p>
        </Reveal>

        <ol className="relative grid md:grid-cols-2 gap-6">
          {t.experience.items.map((item, i) => (
            <Reveal as="li" key={item.company} delay={(i % 2) * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white dark:bg-cherry-950/40 border border-cherry-200 dark:border-cherry-800/50 p-6 hover:border-cherry-400 dark:hover:border-cherry-600 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cherry-500/20">
                <div className="absolute -top-8 -right-8 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {item.icon}
                </div>

                <div className="relative">
                  <div className="text-4xl mb-4">{item.icon}</div>

                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h3 className="font-display text-2xl font-bold text-cherry-900 dark:text-cherry-100">
                      {item.company}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cherry-600/10 text-cherry-700 dark:bg-cherry-400/15 dark:text-cherry-300">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-1 mb-3 text-sm font-medium text-cherry-700 dark:text-cherry-300">
                    {item.role}
                  </p>

                  <p className="text-cherry-800/80 dark:text-cherry-200/80 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-cherry-100 dark:bg-cherry-900/60 text-cherry-700 dark:text-cherry-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
