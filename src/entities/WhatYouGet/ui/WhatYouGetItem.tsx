import Image from "next/image"
import { WhatYouGetList } from "../model/types"
import { OptionList } from "./OptionItem"

const WhatYouGetItem = ({ imageUrl, title, options }: WhatYouGetList) => (
  <div className="flex flex-col gap-y-5 md:flex-row md:even:flex-row-reverse">
    <div className=" grayscale-[80%] ">
      <Image src={imageUrl} width={521} height={355} alt="div" />
    </div>
    <div className="flex flex-col justify-center">
      <h3 className="mb-[17px] text-lg font-bold text-primary-500">{title}</h3>

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
