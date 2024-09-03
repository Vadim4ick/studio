import { Contacts } from "@/widgets/Contacts"

const ContactsPage = () => (
  <main className={"mx-auto max-w-[1160px] px-4 py-20 pt-headerMobile"}>
    <section className=" pt-12">
      <h2 className="text mb-8 text-lg font-extrabold md:mb-12 md:text-2xl lg:mb-24 lg:text-4xl">
        Контактная, <span className="text-primary-500">информация</span>
      </h2>
      <Contacts />
    </section>
  </main>
)

export { ContactsPage }
