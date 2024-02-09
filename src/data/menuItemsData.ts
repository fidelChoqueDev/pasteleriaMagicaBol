/***************************************************************/
/* Realiza una Importacion a MenuItem de las variables title,  */
/* url, etc que estan tipadas o declarados del archivo types.ts*/
/***************************************************************/

import type { MenuItem } from "../types/types";

const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Menu",
    url: "/menu",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  }
];
 
export default menuItems;