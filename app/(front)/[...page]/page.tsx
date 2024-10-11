import { ModalRequest } from "@/features/ModalRequest"
import { mockProjects } from "@/shared/const/mockProjects.const"
import { redirect } from "next/navigation"

export async function generateStaticParams() {
  // Генерируем массив параметров для каждого поста
  const postPages = mockProjects.map((post) => ({
    page: ["reviews", post.id.toString()],
  }))

  // Объединяем со статическими страницами
  return [
    { page: ["reviews"] }, // /@modal/reviews
    { page: ["price"] }, // /@modal/price
    { page: ["contacts"] }, // /@modal/contacts
    ...postPages, // /@modal/reviews/[id] для каждого поста
  ]
}

export default function ModalPageReviews({
  params,
}: {
  params: { slug: string[] }
}) {
  const [firstSegment, id] = params.slug

  if (firstSegment === "reviews") {
    if (id) {
      // Здесь можно добавить логику для отображения поста по ID
      redirect(`/reviews/${id}`) // Редирект на конкретный пост
    }
    redirect("/reviews")
  } else if (firstSegment === "price") {
    redirect("/price")
  } else if (firstSegment === "contacts") {
    redirect("/contacts")
  } else {
    redirect("/404")
  }

  return <ModalRequest />
}
