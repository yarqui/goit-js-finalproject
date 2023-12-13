import { galleryItems } from "./gallery-items.js";

const createGalleryMarkup = (items) =>
  items
    .map(
      ({ original, description, preview }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
    )
    .join("");

const gallery = document.querySelector("ul.gallery");

if (gallery) {
  gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
} else {
  console.error("Gallery not found");
}
