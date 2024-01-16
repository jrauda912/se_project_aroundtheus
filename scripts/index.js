let initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* --------------------------------------------------------------------------------------------- */
/*                                      Elements                                                 */
/* --------------------------------------------------------------------------------------------- */

const editButton = document.querySelector(".profile__edit-button");
const closeModalButton = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");
const profileName = document.querySelector(".profile__username");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);
const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__cards");

/* --------------------------------------------------------------------------------------------- */
/*                                      Functions                                                */
/* --------------------------------------------------------------------------------------------- */

function toggleModal() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  modal.classList.toggle("opened");
}

function handleProfileModalSubmit(EventTarget) {
  EventTarget.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  modal.classList.toggle("opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  cardImageElement.src = data.link;
  cardTextElement.alt = data.name;
  cardTextElement.textContent = data.name;
  return cardElement;
}

/* --------------------------------------------------------------------------------------------- */
/*                                    Event Listeners                                            */
/* --------------------------------------------------------------------------------------------- */

editButton.addEventListener("click", toggleModal);

closeModalButton.addEventListener("click", toggleModal);

modal.addEventListener("submit", handleProfileModalSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardGallery.append(cardElement);
});
