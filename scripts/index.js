const initialCards = [
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
const addButton = document.querySelector(".profile__add-button");
const closeModalButton = document.querySelectorAll(".modal__close-button");
const modals = document.querySelectorAll(".modal");
const modalProfile = document.querySelector("#modal-profile");
const modalAdd = document.querySelector("#modal-add");
const profileForm = document.forms["profile-form"];
const addForm = document.forms["add-form"];
const profileName = document.querySelector(".profile__username");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);
const inputTitle = document.querySelector(".modal__input_type_title");
const inputLink = document.querySelector(".modal__input_type_link");
const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__cards");

/* --------------------------------------------------------------------------------------------- */
/*                                      Functions                                                */
/* --------------------------------------------------------------------------------------------- */

function openProfileModal() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  modalProfile.classList.toggle("modal_opened");
}

function toggleAddModal() {
  modalAdd.classList.toggle("modal_opened");
}

function openAddModal() {
  toggleAddModal();
}

function handleProfileModalSubmit(Event) {
  Event.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  toggleModal();
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardTextElement.textContent = data.name;
  return cardElement;
}

/* --------------------------------------------------------------------------------------------- */
/*                                    Event Listeners                                            */
/* --------------------------------------------------------------------------------------------- */

editButton.addEventListener("click", openProfileModal);

addButton.addEventListener("click", openAddModal);

// closeModalButton.addEventListener("click", toggleModal);

profileForm.addEventListener("submit", handleProfileModalSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardGallery.append(cardElement);
});

const cardLikeButtons = document.querySelectorAll(".card__like-button");

cardLikeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton
      .closest(".card__like-button")
      .classList.toggle("card__like-button_clicked");
  });
});

closeModalButton.forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest(".modal").classList.toggle("modal_opened");
  });
});
