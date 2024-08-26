import { ReviewsProjectPage } from "@/views/ReviewsProjectPage"

const Page = ({ params }: { params: { id: string } }) => (
  <ReviewsProjectPage id={params.id} />
)
export default Page
