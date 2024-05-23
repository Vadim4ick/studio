import { createDomain } from "effector"

const modals = createDomain()

export const openBurger = modals.createEvent()
export const closeBurger = modals.createEvent()
export const toggleBurger = modals.createEvent()

export const $menuIsOpen = modals
  .createStore(false)
  .on(openBurger, () => true)
  .on(closeBurger, () => false)
  .on(toggleBurger, (prevState) => !prevState)
