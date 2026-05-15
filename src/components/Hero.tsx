import { CherryIcon } from './CherryIcon'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="topo"
      className="relative overflow-hidden min-h-[88vh] flex items-center"
    >
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-cherry-300/40 dark:bg-cherry-700/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-[26rem] h-[26rem] bg-blossom-300/50 dark:bg-cherry-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cherry-100 dark:bg-cherry-900/50 text-cherry-700 dark:text-cherry-300 text-sm font-medium border border-cherry-200 dark:border-cherry-800">
            <span className="w-2 h-2 rounded-full bg-cherry-500 animate-pulse" />
            {t.hero.available}
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold mt-6 text-cherry-950 dark:text-cherry-50 leading-tight">
            {t.hero.greetingPrefix}
            <span className="bg-gradient-to-r from-cherry-500 via-cherry-600 to-cherry-800 bg-clip-text text-transparent">
              {t.hero.greetingName}
            </span>
            <span className="italic font-display"> 🍒</span>
          </h1>

          <p className="mt-3 text-sm md:text-base font-medium tracking-wide uppercase text-cherry-700/80 dark:text-cherry-300/80">
            {t.hero.role}
          </p>

          <p className="mt-6 text-lg md:text-xl text-cherry-800/80 dark:text-cherry-200/80 max-w-xl leading-relaxed">
            {t.hero.tagline.before}
            <strong className="text-cherry-700 dark:text-cherry-300">{t.hero.tagline.strong}</strong>
            {t.hero.tagline.after}
          </p>

          <p className="mt-4 text-sm text-cherry-700/70 dark:text-cherry-300/70 flex items-center gap-1.5">
            <span aria-hidden>📍</span> {t.hero.location}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="px-6 py-3 rounded-full bg-cherry-600 hover:bg-cherry-700 text-white font-medium shadow-lg shadow-cherry-500/30 hover:shadow-cherry-500/50 transition-all hover:-translate-y-0.5"
            >
              {t.hero.ctaExperience}
            </a>
            <a
              href="#contato"
              className="px-6 py-3 rounded-full border-2 border-cherry-300 dark:border-cherry-700 text-cherry-700 dark:text-cherry-300 font-medium hover:bg-cherry-100 dark:hover:bg-cherry-900/40 transition-colors"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cherry-400/30 rounded-full blur-3xl animate-pulse" />
            <CherryIcon
              size={280}
              className="relative text-cherry-600 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
