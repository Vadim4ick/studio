"use client"

import { ReviewsItem } from "@/entities/ReviewsItem"

const ReviewsPage = () => (
  <main
    className={
      "relative mx-auto max-w-[1280px] px-4 max-desktop:pt-headerMobile"
    }
  >
    <section className="relative py-10 sm:py-10 md:py-16 lg:py-24">
      <h2 className="text mb-[60px] text-lg font-extrabold md:text-2xl lg:text-4xl">
        Избранные <span className="text-primary-500">проекты</span>
      </h2>

      <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
        <div className="flex flex-col gap-10">
          <ReviewsItem
            imageUrl="/image/portf-proj.png"
            title={
              <p>
                Fortezzo{" "}
                <span className="text-primary-400">Алмазное оборудование</span>
              </p>
            }
          />
          <ReviewsItem
            imageUrl="/image/portf-proj.png"
            title={
              <p>
                Fortezzo{" "}
                <span className="text-primary-400">Алмазное оборудование</span>
              </p>
            }
          />
        </div>

        <div className="flex flex-col gap-10">
          <ReviewsItem
            imageUrl="/image/portf-proj.png"
            title={
              <p>
                Fortezzo{" "}
                <span className="text-primary-400">Алмазное оборудование</span>
              </p>
            }
          />
          <ReviewsItem
            imageUrl="/image/portf-proj.png"
            title={
              <p>
                Fortezzo{" "}
                <span className="text-primary-400">Алмазное оборудование</span>
              </p>
            }
          />
        </div>
      </div>
    </section>
  </main>
)

export { ReviewsPage }
