/* eslint-disable indent */
import { createDomain } from "effector";

type Theme = "dark" | "light";

const theme = createDomain();

export const toggleTheme = theme.createEvent();
export const changeTheme = theme.createEvent<Theme>();

export const $theme = theme
  .createStore<Theme>("light")
  .on(toggleTheme, (prevState) => {
    switch (prevState) {
      case "dark":
        return "light";
      case "light":
        return "dark";
      default:
        return "light";
    }
  })
  .on(changeTheme, (_, props) => props);

$theme.watch((theme) => {
  const html = document.documentElement;

  if (theme !== "light") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
