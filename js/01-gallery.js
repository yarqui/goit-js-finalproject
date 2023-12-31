import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("ul.gallery");

const createGalleryMarkup = (items) =>
  items
    .map(
      ({ original, description, preview }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>
        `
    )
    .join("");

const handleImageClick = (e) => {
  e.preventDefault();

  if (e.target.nodeName === "IMG") {
    const imgLink = e.target.dataset.source;

    const instance = basicLightbox.create(
      `<img src="${imgLink}" width="800" height="600">`,
      {
        handler: null,
        onShow(instance) {
          this.handler = onEscKey.bind(instance);
          document.addEventListener("keydown", this.handler);
        },
        onClose() {
          document.removeEventListener("keydown", this.handler);
        },
      }
    );

    instance.show(instance);
  }
};

function onEscKey(e) {
  if (e.code === "Escape") this.close();
}

if (gallery) {
  gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
  gallery.addEventListener("click", handleImageClick);
} else {
  console.error("Gallery not found");
}
