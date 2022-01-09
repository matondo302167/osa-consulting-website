import { fetchAPI } from "./api";

export async function getMenus() {
  const data = await fetchAPI(`
  {
    menus(first: 10) {
      nodes {
        id
        name
        menuItems {
          nodes {
            label
            id
          }
        }
      }
    }
  }`);
  return data?.menus?.nodes;
}

export async function getMenu(id) {
  const data = await fetchAPI(
    `
  {
    menu(id: "${id}") {
      name
      menuItems {
        nodes {
          id
          path
          label
        }
      }
      slug
      id
    }
  }`
  );
  return data?.menu;
}

export async function getSite() {
  const data = await fetchAPI(
    `{
      allSettings {
        generalSettingsLanguage
        generalSettingsTitle
        generalSettingsUrl
        generalSettingsTimezone
      }
    }`
  );
  return data;
}
