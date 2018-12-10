export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

export function setSearchQuery(query) {
  return { type: SET_SEARCH_QUERY, query }
}

export const OPEN_LIGHTBOX = 'OPEN_LIGHTBOX';
export const CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';

export function openLightbox(image) {
  return { type: OPEN_LIGHTBOX, image }
}

export function closeLightbox() {
  return { type: CLOSE_LIGHTBOX }
}