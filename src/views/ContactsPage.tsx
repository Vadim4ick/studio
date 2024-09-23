import { Contacts } from "@/widgets/Contacts"

const ContactsPage = () => (
  <main className={"mx-auto max-w-[1160px] px-4 py-20"}>
    <h1 className="text mb-16 text-center text-lg font-extrabold  md:text-2xl lg:mb-24 lg:text-4xl">
      Контакты
    </h1>
    <Contacts />
  </main>
)

export { ContactsPage }
