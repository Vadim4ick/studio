import { createDomain } from "effector"

const spoller = createDomain()

export const openSpollerPrice = spoller.createEvent<number | null>()

export const $spollerPrice = spoller
  .createStore<number | null>(null)
  .on(openSpollerPrice, (spollerPrice, spoilerId) => {
    if (spollerPrice === spoilerId) {
      return null
    } else {
      return spoilerId
    }
  })
