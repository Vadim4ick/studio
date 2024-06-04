import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const stages = [
  {
    id: 1,
    title: "Маркетинговый анализ бизнеса",
    description:
      "На предварительном этапе мы выясняем специфику вашего бизнеса, товаров. Отмечаем ваши преимущества и уникальные предложения, изучаем ожидания и потребности целевой аудитории, рассматриваем ближайшее конкурентное окружение. На основании полученных данных мы разрабатываем прототип интернет-магазина, пишем техническое ТЗ для специалистов, готовим рекомендации по текстовому наполнению с учетом требований SEO, разрабатываем план по внешней и внутренней оптимизации сайта. Также мы создаем набор готовых элементов для пользовательского интерфейса.",
  },
  {
    id: 2,
    title: "Привлекательный дизайн",
    description:
      "Интерфейс сайта будет соответствовать современным требованиям и отвечать ожиданиям целевой аудитории. Опытные специалисты Millenium создадут UX-дизайн, отталкиваясь от данных анализа пользовательского поведения, что позволит в несколько раз увеличить конверсию. Мы подберем оптимальные цветовые сочетания (основной, дополнительные, акцентные цвета), уделим внимание четкости графики, наглядности интерфейса, понятной и лаконичной визуализации.",
  },
  {
    id: 3,
    title: "Профессиональная верстка",
    description:
      "Мы производим верстку по стандарту Pixel Perfect, который предполагает точное соответствие сверстанных страниц дизайн-макету. Наши специалисты напишут чистый код с двухфакторной проверкой, позволяющий обеспечить высокую скорость загрузки на любых браузерах и электронных устройствах (десктопных и мобильных). Профессиональная адаптивная верстка является важным условием бесперебойной надежной работы сайта на протяжении длительного времени. ",
  },
  {
    id: 4,
    title: "«Посадка» на CMS",
    description:
      "Невозможно представить интернет-магазин без системы управления сайтом. Специалисты Millenium выполнят посадку готовой верстки вашего магазина на CMS №1 в странах СНГ - 1с Битрикс. Благодаря CMS, вы просто заходите в административную панель, и, при помощи понятных полей, легко управляете содержимым — редактируете новости, вносите коррективы в товары, добавляет фото и видеоконтент, модерируете и выполняете множество других действий, которые без CMS были бы сущим кошмаром.",
  },
  {
    id: 5,
    title: "Тестирование и доработка",
    description:
      "Чтобы избежать проблем во время использования сайта, на данном этапе мы отрабатываем все возможные сценарии взаимодействия пользователей с сайтом. Это позволяет вовремя выявить ошибки и устранить их. Мы тестируем usability и безопасность сайта, проверяем скорость загрузки страниц, работу форм обратной связи и интерактивных элементов, отображение страниц на разных устройствах. Это позволяет на 100% гарантировать функциональность ресурса.",
  },
  {
    id: 6,
    title: "Запуск сайта",
    description:
      "Когда все проверено и выполнены все нужные доработки, остается лишь выполнить грамотный запуск сайта. Наши специалисты сверяют всё по чек-листу, чтобы избежать неприятностей и получить на выходе идеальный интернет-магазин с высокой конверсией. Сайт от профессионалов Millenium позволит вам легко привлекать новых клиентов и станет достойным лицом вашей компании в интернете.",
  },
]

const Stages = () => {
  const ref = useRef<null | HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const maskHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="m-auto max-w-[1260px] px-2">
      <h2 className="pb-[55px] text-4xl font-extrabold text-[#2A2367]">
        Этапы
      </h2>

      <div className="flex" ref={ref}>
        <div className="sticky top-0 flex h-full w-[40%] pt-6">
          {/* LINE */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="398"
            viewBox="0 0 23 398"
            fill="currentColor"
            className="text-[#BDBDBD]"
          >
            <defs>
              <clipPath id="clip">
                <motion.rect
                  x="0"
                  y="0"
                  width="23"
                  height="398"
                  fill="white"
                  style={{ height: maskHeight }}
                />
              </clipPath>
            </defs>

            {/* Базовая серая линия */}
            <motion.line
              x1="11.5"
              y1="9"
              x2="11.5"
              y2="385"
              strokeWidth="5"
              stroke="#BDBDBD"
            />

            {/* Фиолетовая линия, которая будет окрашиваться */}
            <motion.line
              x1="11.5"
              y1="9"
              x2="11.5"
              y2="385"
              strokeWidth="5"
              stroke="#7F3FBF"
              clipPath="url(#clip)"
            />

            {/* Серые круги */}
            <circle cx="11.5" cy="102.5" r="11.5" fill="#BDBDBD" />
            <circle cx="11.5" cy="173.5" r="11.5" fill="#BDBDBD" />
            <circle cx="11.5" cy="244.5" r="11.5" fill="#BDBDBD" />
            <circle cx="11.5" cy="315.5" r="11.5" fill="#BDBDBD" />
            <circle cx="11.5" cy="386.5" r="11.5" fill="#BDBDBD" />
            <circle cx="11.5" cy="11.5" r="11.5" fill="#BDBDBD" />

            {/* Фиолетовые круги, которые будут окрашиваться */}
            <motion.circle
              cx="11.5"
              cy="102.5"
              r="11.5"
              fill="#7F3FBF"
              clipPath="url(#clip)"
            />
            <motion.circle
              cx="11.5"
              cy="173.5"
              r="11.5"
              fill="#7F3FBF"
              clipPath="url(#clip)"
            />
            <motion.circle
              cx="11.5"
              cy="244.5"
              r="11.5"
              fill="#7F3FBF"
              clipPath="url(#clip)"
            />
            <motion.circle
              cx="11.5"
              cy="315.5"
              r="11.5"
              fill="#7F3FBF"
              clipPath="url(#clip)"
            />
            <motion.circle
              cx="11.5"
              cy="386.5"
              r="11.5"
              fill="#7F3FBF"
              clipPath="url(#clip)"
            />
            <motion.circle
              cx="11.5"
              cy="11.5"
              r="11.5"
              fill="#7F3FBF"
              clipPath="url(#clip)"
            />
          </svg>

          <div className="flex flex-col gap-[50px] pl-10">
            {stages.map((item) => (
              <div key={item.id}>
                <p className="text-lg">{`0${item.id}. ${item.title}`}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-[60%] flex-col gap-[55px]">
          {stages.map((item, idx) => (
            <div
              key={item.id}
              style={{ boxShadow: "0px 10px 60px 0px #2A236726" }}
              className="rounded-[10px] bg-white px-[43px] py-[23px]"
            >
              <div className="flex items-center gap-[50px] border-b pb-[29px]">
                <div className="flex size-[53px] items-center justify-center rounded-full bg-[#43CD93] font-extrabold text-white">
                  {item.id}
                </div>

                <h3 className="text-2xl font-bold text-[#2A2367]">
                  {item.title}
                </h3>
              </div>

              <div className="pt-[26px] text-lg text-[#2A2367]">
                {item.description}
              </div>

              <div className="relative h-[775px] w-full">
                <Image src={"/1.png"} alt="test" fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Stages }
