"use client"
import Image from "next/image"

const Contacts = () => (
  <div className="">
    <>
      {/* <div className="text max-w-[320px] text-sm font-bold xl:text-lg">
        <h3 className=" mb-6">
          Москва, ул. Профсоюзная 76, БЦ «ГАЛЕРЕЯ 76» 2 этаж
        </h3>

        <h3 className="">+7 (495) 792-66-69</h3>
      </div> */}

      <div className="mb-16 mt-4 flex justify-center gap-8 sm:mt-0">
        <a
          target="blank"
          href="https://telegram.me/rusl_dev"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Image
            src={"/image/telegram.svg"}
            priority
            width={50}
            height={50}
            alt="logoImage"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>
        <a
          target="blank"
          href="https://wa.me/79178696482"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Image
            src={"/image/whatsapp.svg"}
            priority
            width={50}
            height={50}
            alt="logoImage"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>
      </div>
    </>

    <div className="col-span-2 h-[420px] w-full bg-primary-950 ">
      <div className="relative h-full w-full shadow-lg">
        <Image
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          src="/image/Cover.webp"
          alt="bunner image"
          className="pointer-events-none mx-auto h-full w-full select-none object-cover"
          width={2000}
          height={2000}
        />
        {/* <iframe
          className="absolute left-0 top-0 h-full w-full rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          aria-hidden="false"
          tabIndex={0}
          title="Google Maps Adress"
        /> */}
      </div>
    </div>
  </div>
)

export { Contacts }
