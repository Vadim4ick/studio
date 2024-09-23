import { WhatYouGetItem } from "@/entities/WhatYouGet"
import { whatyougetlist } from "@/entities/WhatYouGet"

const WhatYouGet = () => (
  <section className="m-auto max-w-[1280px] px-4 py-[140px]">
    <h2 className="text mb-[54px] text-lg font-extrabold md:mb-8 md:text-2xl lg:mb-7 lg:text-4xl">
      Что вы <span className=" text-primary-500">получаете ?</span>
    </h2>
    {whatyougetlist.map((item) => (
      <WhatYouGetItem
        key={item.id}
        id={item.id}
        imageUrl={item.imageUrl}
        title={item.title}
        options={item.options}
      />
    ))}

    <p className="text mt-16 flex flex-col gap-4 border-x-4 border-primary-400 px-10 text-center tablet:basis-1/2">
      Каждый аспект вашего веб-проекта требует внимания и профессионального
      подхода, который веб-студия Barbaris готова предложить. Наши услуги
      охватывают все стадии разработки и продвижения сайтов, обеспечивая вашему
      бизнесу необходимое преимущество в цифровой среде.
    </p>
  </section>
)

export { WhatYouGet }
