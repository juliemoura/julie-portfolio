import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Stats() {
  const { t } = useLanguage()

  return (
    <section
      aria-label="stats"
      className="relative px-6 -mt-8 mb-4"
    >
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-3 gap-3 sm:gap-4 rounded-3xl border border-cherry-200 dark:border-cherry-800/50 bg-white/70 dark:bg-cherry-950/40 backdrop-blur-md p-5 sm:p-6 shadow-xl shadow-cherry-500/10">
          {t.stats.items.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 80} className="text-center px-2">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-cherry-500 via-cherry-600 to-cherry-800 bg-clip-text text-transparent leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-cherry-800/80 dark:text-cherry-200/80 leading-snug">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
