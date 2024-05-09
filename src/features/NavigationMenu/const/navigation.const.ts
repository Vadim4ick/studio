import { DASHBOARD_PAGES } from "@/shared/const/pages-url.const";

export interface Navigation {
  name: string;
  path: string;
}

export const navigation: Navigation[] = [
  {
    name: "Главная",
    path: DASHBOARD_PAGES.HOME,
  },
  {
    name: "Цены",
    path: DASHBOARD_PAGES.PRICE,
  },
  {
    name: "Кейсы",
    path: DASHBOARD_PAGES.REVIEWS,
  },
  {
    name: "Контакты",
    path: DASHBOARD_PAGES.CONTACTS,
  },
];
