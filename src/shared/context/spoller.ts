import { createDomain } from "effector"

const spoller = createDomain()

export const openSpollerPrice = spoller.createEvent<number | null>()
export const setSpollerPriceId = spoller.createEvent<number>()

export const $spollerPrice = spoller
  .createStore<number | null>(null)
  .on(openSpollerPrice, (spollerPrice, spoilerId) => {
    if (spollerPrice !== spoilerId) {
      return spoilerId
    }

    return null
  })
  .on(setSpollerPriceId, (_, id) => id)
