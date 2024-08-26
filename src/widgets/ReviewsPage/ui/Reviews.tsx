/* eslint-disable arrow-body-style */

import { ReviewsItem } from "@/entities/ReviewsItem"
import { mockProjects } from "../model/mock/mockData"

/* eslint-disable react/jsx-no-undef */
const Reviews = () => {
  return (
    <section className="relative py-10 sm:py-10 md:py-16 lg:py-24">
      <h2 className="text mb-[60px] text-lg font-extrabold md:text-2xl lg:text-4xl">
        Избранные <span className="text-primary-500">проекты</span>
      </h2>

      <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
        {mockProjects.map((item, idx) => (
          <ReviewsItem
            key={idx}
            imageUrl={item.imageUrl}
            imageUrl2X={item.imageUrl2X}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )
}

export { Reviews }
