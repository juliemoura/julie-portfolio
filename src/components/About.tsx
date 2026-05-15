import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <Reveal className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-cherry-300/0 to-cherry-400" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cherry-900 dark:text-cherry-100">
            {t.about.titlePrefix}
            <span className="text-cherry-600">{t.about.titleAccent}</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-cherry-300/0 to-cherry-400" />
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <Reveal className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cherry-200 via-cherry-300 to-cherry-500 dark:from-cherry-700 dark:to-cherry-900 p-1 shadow-2xl shadow-cherry-500/30">
              <div className="w-full h-full rounded-3xl bg-cherry-50 dark:bg-cherry-950 flex items-center justify-center text-7xl">
                🍒
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-cherry-600 text-white px-4 py-2 rounded-full font-medium shadow-lg shadow-cherry-500/40">
              {t.about.badge}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-cherry-900/90 dark:text-cherry-100/90 mb-4">
              {t.about.p1.before}
              <strong className="text-cherry-700 dark:text-cherry-300">{t.about.p1.strong}</strong>
              {t.about.p1.after}
            </p>
            <p className="text-lg leading-relaxed text-cherry-900/90 dark:text-cherry-100/90 mb-8">
              {t.about.p2}
            </p>

            <h3 className="font-display text-xl font-bold text-cherry-800 dark:text-cherry-200 mb-4">
              {t.about.skillsTitle}
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 mb-8">
              {t.about.skillCategories.map((cat) => (
                <div key={cat.title}>
                  <h4 className="text-sm font-display font-bold text-cherry-700 dark:text-cherry-300 mb-2 flex items-center gap-1.5">
                    <span aria-hidden>{cat.icon}</span> {cat.title}
                  </h4>
                  <ul className="flex flex-wrap gap-1.5">
                    {cat.items.map((skill) => (
                      <li
                        key={skill}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-cherry-100 dark:bg-cherry-900/50 text-cherry-700 dark:text-cherry-300 border border-cherry-200 dark:border-cherry-800 hover:bg-cherry-200 dark:hover:bg-cherry-800 transition-colors cursor-default"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-dashed border-cherry-300 dark:border-cherry-700/60 bg-cherry-100/40 dark:bg-cherry-900/20 p-4 mb-8">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cherry-600 dark:text-cherry-400 mb-1 flex items-center gap-1.5">
                <span aria-hidden>🌱</span> {t.about.exploringTitle}
              </h4>
              <p className="text-sm text-cherry-900/80 dark:text-cherry-100/80">{t.about.exploring}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 pt-6 border-t border-cherry-200/70 dark:border-cherry-800/40">
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cherry-600 dark:text-cherry-400 mb-2">
                  🎓 {t.about.educationTitle}
                </h4>
                <p className="text-sm text-cherry-900/80 dark:text-cherry-100/80 leading-relaxed">
                  {t.about.education}
                </p>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cherry-600 dark:text-cherry-400 mb-2">
                  🌍 {t.about.languagesTitle}
                </h4>
                <p className="text-sm text-cherry-900/80 dark:text-cherry-100/80 leading-relaxed">
                  {t.about.languages}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
