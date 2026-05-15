import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section
      id="projetos"
      className="py-24 px-6 scroll-mt-20 bg-gradient-to-b from-transparent via-cherry-100/40 to-transparent dark:via-cherry-950/30"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cherry-900 dark:text-cherry-100">
            {t.projects.titlePrefix}
            <span className="text-cherry-600">{t.projects.titleAccent}</span>
          </h2>
          <p className="mt-4 text-cherry-800/80 dark:text-cherry-200/70 text-lg">
            {t.projects.subtitle}
          </p>
        </Reveal>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <Reveal as="li" key={project.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-white dark:bg-cherry-950/40 border border-cherry-200 dark:border-cherry-800/50 p-6 hover:border-cherry-400 dark:hover:border-cherry-600 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cherry-500/20">
                <div className="absolute -top-8 -right-8 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {project.icon}
                </div>

                <div className="relative">
                  <div className="text-4xl mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {project.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cherry-900 dark:text-cherry-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-cherry-800/80 dark:text-cherry-200/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-cherry-100 dark:bg-cherry-900/60 text-cherry-700 dark:text-cherry-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 text-sm font-medium">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cherry-600 hover:text-cherry-800 dark:text-cherry-400 dark:hover:text-cherry-200 transition-colors"
                      >
                        {t.projects.seeProject}
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cherry-700/70 hover:text-cherry-900 dark:text-cherry-400/70 dark:hover:text-cherry-200 transition-colors"
                      >
                        {t.projects.seeCode}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
