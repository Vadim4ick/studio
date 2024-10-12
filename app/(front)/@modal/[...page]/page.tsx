import { ModalRequest } from "@/features/ModalRequest"
import { mockProjects } from "@/shared/const/mockProjects.const"

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

export default function ModalPageReviews() {
  return <ModalRequest />
}
