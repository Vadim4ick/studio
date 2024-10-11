import { mockProjects } from "@/shared/const/mockProjects.const"
import { redirect } from "next/navigation"

export async function generateStaticParams() {
  // Генерируем массив параметров для каждого поста
  const postPages = mockProjects.map((post) => ({
    slug: ["reviews", post.id.toString()], // Динамические параметры для постов
  }))

  // Возвращаем статические параметры для всех страниц
  return [
    { slug: ["reviews"] }, // /reviews
    { slug: ["price"] }, // /price
    { slug: ["contacts"] }, // /contacts
    ...postPages, // Динамические страницы для каждого поста: /reviews/[id]
  ]
}

const DynamicPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  console.log("234")

  if (slug === "reviews") {
    redirect("/reviews")
  } else if (slug === "price") {
    redirect("/price")
  } else if (slug === "contacts") {
    redirect("/contacts")
  } else {
    redirect("/404") // Или любая другая страница по умолчанию
  }

  return null // Не требуется возвращать JSX, так как происходит редирект
}

export default DynamicPage
