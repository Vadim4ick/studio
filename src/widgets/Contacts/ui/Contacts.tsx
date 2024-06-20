import Image from "next/image"

const Contacts = () => (
  <div className="grid grid-cols-2 gap-7">
    <>
      <div className="text max-w-[320px] text-sm font-bold xl:text-lg">
        <h3 className=" mb-6">
          Москва, ул. Профсоюзная 76, БЦ «ГАЛЕРЕЯ 76» 2 этаж
        </h3>
        <h3 className="">+7 (495) 792-66-69</h3>
      </div>

      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-end">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Image
            src={"/image/telegram.svg"}
            priority
            width={35}
            height={35}
            alt="logoImage"
          />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Image
            src={"/image/whatsapp.svg"}
            priority
            width={35}
            height={35}
            alt="logoImage"
          />
        </a>
      </div>
    </>

    <div className="col-span-2 h-[420px] w-full bg-primary-950 ">
      <div className="relative h-full w-full dark:grayscale-[50%]">
        <iframe
          className="absolute left-0 top-0 h-full w-full dark:invert"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          aria-hidden="false"
          tabIndex={0}
          title="Google Maps Adress"
        />
      </div>
    </div>
  </div>
)

export { Contacts }
