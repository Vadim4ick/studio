import Image from "next/image"
import { WhatYouGetList } from "../model/types"
import { OptionList } from "./OptionItem"

const WhatYouGetItem = ({ imageUrl, title, options }: WhatYouGetList) => (
  <div className="flex flex-col gap-y-5 md:flex-row md:even:flex-row-reverse">
    <div className="">
      <Image src={imageUrl} width={521} height={355} alt="div" />
    </div>
    <div className="flex flex-col justify-center">
      <h3 className="text mb-[17px] text-lg font-bold">{title}</h3>

      <ul className="text list-inside list-disc">
        {options.map((option) => (
          <OptionList
            key={option.id}
            description={option.description}
            id={option.id}
          />
        ))}
      </ul>
    </div>
  </div>
)

export { WhatYouGetItem }
