import { findProject } from "@/shared/helpers/findProject.helper"
import { ReviewsProjectPage } from "@/views/ReviewsProjectPage"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  // read route params
  const id = params.id
  const item = findProject(id)

  return {
    title: `${item?.title} | Barbaris`,
    description: "Разработка сайтов, интернет-магазинов и web-сервисов",
    keywords:
      "разработка сайтов,разработка высоконагруженных сайтов, CMS, админ панелей, Создание сайтов",
  }
}

const Page = ({ params }: { params: { id: string } }) => (
  <ReviewsProjectPage id={params.id} />
)
export default Page
