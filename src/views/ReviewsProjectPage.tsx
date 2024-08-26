import { findProject } from "@/shared/helpers/findProject.helper"
import { ReviewsProjectItem } from "@/widgets/ReviewsProjectItem"
import { notFound } from "next/navigation"

const ReviewsProjectPage = ({ id }: { id: string }) => {
  const item = findProject(id)

  if (!item) notFound()

  return (
    <main
      className={
        "relative mx-auto max-w-[1280px] px-4 max-desktop:pt-headerMobile"
      }
    >
      <ReviewsProjectItem item={item} />
    </main>
  )
}

export { ReviewsProjectPage }
